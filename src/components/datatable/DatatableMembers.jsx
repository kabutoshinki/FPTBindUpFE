import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Button } from "@mui/material";
import AddMemberModal from "../popup/AddMemberModal";
import ModalDelete from "../popup/ModalDelete";
import ModalUpdateMember from "../popup/ModalUpdateMember";

const DatatableMembers = ({ id }) => {
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [member, setMember] = useState({});
  const [idDel, setIdDel] = useState("");

  const { data, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/projects/${id}`
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMembers(data?.data?.members);
  }, [data]);
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

  const handleDelete = async (memberId) => {
    try {
      setIdDel(memberId);
      setOpenDel(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (row) => {
    try {
      setMember(row);
      setOpenModalUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    setOpen(true);
  };

  return (
    <div className="datatableMember">
      <AddMemberModal open={open} onClose={() => setOpen(false)} onCreateSuccess={reFetch} projectId={id} />
      <div className="datatableTitle">
        Members
        <Button onClick={() => handleAdd()}>Add Member</Button>
      </div>

      <input
        type="text"
        placeholder="Search members..."
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
        rows={members?.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? []}
        columns={memberColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

      <ModalUpdateMember
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        reFresh={reFetch}
        data={member}
      />

      <ModalDelete
        open={openDel}
        onClose={() => setOpenDel(false)}
        title={"Member"}
        id={idDel}
        type={"member"}
        reFresh={reFetch}
      />
    </div>
  );
};

export default DatatableMembers;
