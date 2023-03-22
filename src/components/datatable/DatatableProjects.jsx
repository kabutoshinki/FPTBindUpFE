import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { projectColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as projectService from "../../services/projectService";
const DatatableProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, reFetch } = useFetch(
    "http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/project/?pageSize=99&sortBy=id&statusType=-1"
  );
  console.log(data);

  useEffect(() => {
    setProjects(data?.data?.projectDTOList);
  }, [data]);

  const handleUpdate = async (id) => {
    try {
      console.log(id);
      await projectService.changeStatus(id, "PUBLIC");
      reFetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await projectService.changeStatus(id, "REJECTED");
      reFetch();
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/user_dashboard/project/" + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="updateButton" onClick={() => handleUpdate(params.row.id)}>
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
    <div className="datatable">
      <div className="datatableTitle" style={{ marginTop: "80px" }}>
        Projects Table
      </div>

      <input
        type="text"
        placeholder="Search projects..."
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
        rows={projects?.filter((project) => project?.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? []}
        columns={projectColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default DatatableProjects;
