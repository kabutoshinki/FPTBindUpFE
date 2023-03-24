import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { changelogColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as changelogService from "../../services/changeLogService";
import ModalDelete from "../popup/ModalDelete";
import { Button } from "@mui/material";
import ModalAddChangeLog from "../popup/ModalAddChangeLog";
import ModalUpdateChangeLog from "../popup/ModalUpdateChangeLog";

const DatatableChangeLog = ({ id }) => {
  const { data, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/changelogs/?projectId=${id}&paging=false`
  );

  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idDel, setIdDel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [changelogs, setChangeLogs] = useState([]);
  const [changelog, setChangeLog] = useState([]);

  useEffect(() => {
    setChangeLogs(data?.data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      // await changelogService.changeStatus(id, "REJECTED");
      setIdDel(id);
      setOpenDel(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (row) => {
    try {
      setChangeLog(row);
      setOpenModalUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="updateButton" onClick={() => handleUpdate(params.row)}>
              Update
            </div>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatableMember">
      <div className="datatableTitle">
        Change Logs
        <Button onClick={() => handleAdd()}>Add Change Log</Button>
      </div>

      <input
        type="text"
        placeholder="Search changelog..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      />

      <DataGrid
        className="datagrid"
        rows={
          changelogs?.filter(
            (changelog) =>
              changelog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              changelog.description.toLowerCase().includes(searchQuery.toLowerCase())
          ) ?? []
        }
        columns={changelogColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

      <ModalAddChangeLog open={open} onClose={() => setOpen(false)} reFresh={reFetch} projectId={id} />
      <ModalUpdateChangeLog
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        reFresh={reFetch}
        data={changelog}
      />
      <ModalDelete
        open={openDel}
        onClose={() => setOpenDel(false)}
        title={"Change Log"}
        id={idDel}
        type={"changelog"}
        reFresh={reFetch}
      />
    </div>
  );
};

export default DatatableChangeLog;
