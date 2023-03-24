import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { jobColumns, memberColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as jobService from "../../services/jobService";
import { Button } from "@mui/material";
import ModalAddJob from "../popup/ModalAddJob";
import ModalDelete from "../popup/ModalDelete";
import ModalUpdateJob from "../popup/ModalUpdateJob";
const DatatableJobs = ({ id }) => {
  const [jobs, setJobs] = useState([]);
  const { data, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs/${id}/`
  );

  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [job, setJob] = useState({});
  const [idDel, setIdDel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setJobs(data?.data);
  }, [data]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/user_dashboard/project/job/` + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
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
      setJob(row);
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
      <ModalAddJob open={open} onClose={() => setOpen(false)} reFresh={reFetch} projectId={id} />
      <div className="datatableTitle">
        Jobs
        <Button onClick={() => handleAdd()}>Add Job</Button>
      </div>
      <input
        type="text"
        placeholder="Search Jobs..."
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
        rows={jobs?.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? []}
        columns={jobColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

      <ModalUpdateJob open={openModalUpdate} onClose={() => setOpenModalUpdate(false)} reFresh={reFetch} data={job} />

      <ModalDelete
        open={openDel}
        onClose={() => setOpenDel(false)}
        title={"Job"}
        id={idDel}
        type={"job"}
        reFresh={reFetch}
      />
    </div>
  );
};

export default DatatableJobs;
