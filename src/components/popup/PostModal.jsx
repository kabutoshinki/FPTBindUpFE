import React from "react";
import { useState } from "react";
import * as projectService from "../../services/projectService";
import { toast } from "react-toastify";
import * as authenService from "../../services/authenService";
import Modal from "./Modal";
const initialFormData = {
  name: "",
  summary: "",
  description: "",
  source: "",
  voteQuantity: 0,
  milestone: 0,
  founderId: "",
};

const PostModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (localStorage.getItem("user") !== null) {
    console.log(localStorage.getItem("user"));
    initialFormData.founderId = localStorage.getItem("user").replace(/"/g, "");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const res = await projectService.createProject(formData);
      toast.success("Post Success");
      onClose();
      console.log(res);
    } catch (err) {
      toast.warning("Post Fail");
      console.log(err);
    }
  };

  if (!open) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOnClose}
    >
      {showModal && <Modal />}
      <div className="md:w-[500px] w-[500px] mx-auto flex flex-col">
        <div className="bg-white p-8 rounded-sm flex flex-col">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md max-h-80 overflow-y-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
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

            <div className="mb-4">
              <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
                Summary:
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="source" className="block text-gray-700 font-bold mb-2">
                Source:
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="voteQuantity" className="block text-gray-700 font-bold mb-2">
                Vote Quantity:
              </label>
              <input
                type="number"
                id="voteQuantity"
                name="voteQuantity"
                value={formData.voteQuantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="milestone" className="block text-gray-700 font-bold mb-2">
                Milestone:
              </label>
              <input
                type="number"
                id="milestone"
                name="milestone"
                value={formData.milestone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
