import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { projectColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as projectService from "../../services/projectService";
import * as applicationService from "../../services/applicationService";
import ModalDelete from "../popup/ModalDelete";
import PostModal from "../popup/PostModal";
const DatatableApplications = () => {
  const [projects, setProjects] = useState([]);
  const [projectsFilter, setProjectsFilter] = useState([]);
  const [project, setProject] = useState({});
  const [openDel, setOpenDel] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idDel, setIdDel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const userId = localStorage.getItem("user").replace(/"/g, "");

  const ListUserApplications = async () => {
    const userId = localStorage.getItem("user").replace(/"/g, "");
    console.log(userId);
    const { data } = await applicationService.getApplicationUser(userId);
    setProjects(data?.data?.applicationDTOList);
    console.log(data);
  };
  const onCreateSuccess = () => {
    ListUserApplications();
  };
  useEffect(() => {
    ListUserApplications();
  }, []);

  useEffect(() => {
    setProjectsFilter(projects?.filter((project) => project?.status !== "DELETED"));
  }, [projects]);

  const handleDelete = async (projectId) => {
    try {
      setIdDel(projectId);
      setOpenDel(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (row) => {
    try {
      setProject(row);
      setOpenModalUpdate(true);
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
    <div className="datatable">
      <div className="datatableTitle" style={{ marginTop: "80px" }}>
        Applications Table
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
        rows={
          projectsFilter?.filter((project) => project?.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? []
        }
        columns={projectColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

      <PostModal
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        reFresh={onCreateSuccess}
        data={project}
      />

      <ModalDelete
        open={openDel}
        onClose={() => setOpenDel(false)}
        title={"Project"}
        id={idDel}
        type={"project"}
        reFresh={onCreateSuccess}
      />
    </div>
  );
};

export default DatatableApplications;
