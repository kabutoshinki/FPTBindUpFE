import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as projectService from "../../services/projectService";
import * as mentorService from "../../services/mentorService";
import { useEffect } from "react";

const AddMentorModal = ({ open, onClose, onCreateSuccess, projectId }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const [mentorId, setMentorId] = useState("");
  const [mentors, setMentors] = useState([]);

  const Mentors = async () => {
    const { data } = await mentorService.getMentors();
    console.log(data);
    setMentors(data?.data?.mentorDTOList);
  };

  useEffect(() => {
    Mentors();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await projectService.addMentorProject(projectId, mentorId);
      toast.success("Add Mentor Success", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      onCreateSuccess();
      onClose();
    } catch (error) {
      toast.error("Add Mentor Fail");
    }
  };

  if (!open) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 rounded bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOnClose}
    >
      <div className="w-[500px] mx-auto flex flex-col">
        <div className="bg-white p-[30px] rounded-sm flex flex-col">
          <h1 className="font-bold text-center mb-[10px] text-xl md:text-2xl">Add New Mentor</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="justify-center ">
              <FormControl sx={{ mb: 3, width: "100%" }}>
                <InputLabel htmlFor="major-select" inputProps={{ id: "major-select" }}>
                  Mentor
                </InputLabel>
                <Select
                  label="mentor"
                  name="mentor"
                  value={mentorId}
                  onChange={(e) => setMentorId(e.target.value)}
                  required
                >
                  <MenuItem disabled value="">
                    Select a major
                  </MenuItem>
                  {mentors.map((mentor) => (
                    <MenuItem key={mentor.id} value={mentor.id}>
                      {mentor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <button
                type="submit"
                className="mt-[20px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMentorModal;
