import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as projectMemberService from "../../services/projectMemberService";
const initData = {
  role: "",
  title: "",
  name: "",
  projectId: localStorage.getItem("newProjectId"),
};
const AddMemberModal = ({ open, onClose, onCreateSuccess }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const [formData, setFormData] = useState(initData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await projectMemberService.createMemberProject(formData);
      toast.success("Add Member Success");
      onCreateSuccess();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!open) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="md:w-[600px] w-[600px] mx-auto flex flex-col">
        <div className="bg-white p-8 rounded-sm flex flex-col">
          <h1 className="font-bold text-center mt-2 mb-3 text-xl md:text-2xl">Add Member</h1>
          <p className="text-gray-600 text-center text-base md:text-lg">
            Join our community of friendly folks discovering and sharing the latest ideas.
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="justify-center ">
              <div className="mb-6 w-[60%]">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <br />
              <div className="mb-6 w-[60%]">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <br />
              <div className="mb-6 w-[60%]">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
