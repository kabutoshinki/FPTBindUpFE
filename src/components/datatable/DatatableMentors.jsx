import "./membersDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns, mentorColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as mentorService from "../../services/mentorService";
import { Button } from "@mui/material";
import AddMentorModal from "../popup/AddMentorModal";
import ModalDelete from "../popup/ModalDelete";

const DatatableMentors = ({ id }) => {
  const [mentors, setMentors] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idDel, setIdDel] = useState("");
  const projectId = id;
  const Mentors = async () => {
    const { data } = await mentorService.getListMentorsById(id);
    console.log(data);
    setMentors(data?.data);
  };

  const handleSuccess = () => {
    Mentors();
  };

  useEffect(() => {
    Mentors();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to={"/members/" + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
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

  const handleAdd = () => {
    setOpen(true);
  };
  return (
    <div className="datatableMember">
      <div className="datatableTitle">
        Mentors
        <Button onClick={() => handleAdd()}>Add Mentor</Button>
      </div>
      <AddMentorModal open={open} onClose={() => setOpen(false)} onCreateSuccess={handleSuccess} projectId={id} />
      <input
        type="text"
        placeholder="Search mentors..."
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
        rows={mentors?.filter((mentor) => mentor.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? []}
        columns={mentorColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
      <ModalDelete
        open={openDel}
        onClose={() => setOpenDel(false)}
        title={"Mentor"}
        id={idDel}
        projectId={projectId}
        type={"projectMentor"}
        reFresh={handleSuccess}
      />
    </div>
  );
};

export default DatatableMentors;
