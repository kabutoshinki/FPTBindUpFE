import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userApplyColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ModalDelete from "../popup/ModalDelete";
import ModalUpdateJob from "../popup/ModalUpdateJob";
const DatatableUserApply = ({ id }) => {
  const [jobs, setJobs] = useState([]);
  const { data, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/job/user/?jobId=${id}&pageNo=0&pageSize=99&sortBy=id&ascending=ASC`
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
            {/* <Link to={`/user_dashboard/user/` + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div className="acceptButton" onClick={() => handleUpdate(params.row)}>
              Accept
            </div>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Reject
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

export default DatatableUserApply;
