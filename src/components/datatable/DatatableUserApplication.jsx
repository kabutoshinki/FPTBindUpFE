import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userApplyColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ModalDelete from "../popup/ModalDelete";
import ModalUpdateJob from "../popup/ModalUpdateJob";
import * as applicationService from "../../services/applicationService";

const DatatableUserApplication = ({ id }) => {
  const [jobs, setJobs] = useState([]);
  const { data, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs/user/?jobId=${id}&pageNo=0&pageSize=99&sortBy=id&ascending=ASC`
  );
  console.log(data);
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
            {params.row.applicationStatus === "ACCEPTED" ? (
              <div className="acceptButton disabled">Accept</div>
            ) : (
              <div className="acceptButton" onClick={() => handleAccept(params.row.applicationId)}>
                Accept
              </div>
            )}

            {params.row.applicationStatus === "REJECTED" ? (
              <div className="deleteButton disabled">Reject</div>
            ) : (
              <div className="deleteButton" onClick={() => handleDelete(params.row.applicationId)}>
                Reject
              </div>
            )}
          </div>
        );
      },
    },
  ];

  const handleAccept = async (id) => {
    try {
      console.log(id);
      await applicationService.changeStatusApplication(id, "ACCEPTED");
      reFetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await applicationService.changeStatusApplication(id, "REJECTED");
      reFetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="datatableMember">
      <div className="datatableTitle">User Apply</div>
      <input
        type="text"
        placeholder="Search Users..."
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
        columns={userApplyColumns.concat(actionColumn)}
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

export default DatatableUserApplication;
