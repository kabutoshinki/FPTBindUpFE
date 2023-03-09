import React from "react";
import { useState, useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Editor } from "@tinymce/tinymce-react";
// import '../..node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
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
    initialFormData.founderId = localStorage.getItem("user").replace(/"/g, "");
  }

  const handleDescChange = (content, editor) => {
    console.log("desc:", content);
    setFormData({ ...formData, ["description"]: content });
  };

  const handleMilestoneChange = (event) => {
    setFormData({ ...formData, ["milestone"]: event.target.value });
  };

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
      className="fixed inset-0 bg-black bg-opacity-[60%] flex justify-center items-center"
      onClick={handleOnClose}
    >
      {showModal && <Modal />}
      <div className="w-[1000px] h-fit mx-auto flex flex-col bg-white p-8 rounded ">
        <h2 className="font-semibold text-blue-700 text-[1.5rem] mb-[30px]">Submit to share your project</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-5 gap-[30px]">
            <div className="col-span-2">
              {/* Project Name */}
              <div className="mb-4">
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

              {/* Summary */}
              <div className="mb-4">
                <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
                  Summary
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  className="w-full h-[80px] resize-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                ></textarea>
              </div>

              {/* Source */}
              <div className="mb-4">
                <label htmlFor="source" className="block text-gray-700 font-bold mb-2">
                  Source
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

              {/* Milestone */}
              {/* <div className="mb-4">
                <label htmlFor="milestone" className="block text-gray-700 font-bold mb-2">
                  Milestone
                </label>
                <input
                  type="number"
                  id="milestone"
                  name="milestone"
                  value={formData.milestone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div> */}

              <div className="mb-4">
                <label htmlFor="milestone-input" className="block text-gray-700 font-bold mb-2">
                  Milestone
                </label>
                <Select
                  className="w-full"
                  id="milestone-input"
                  displayEmpty
                  value={formData.milestone}
                  onChange={handleMilestoneChange}
                >
                  <MenuItem value={0}>Pending</MenuItem>
                  <MenuItem value={1}>Upcoming</MenuItem>
                  <MenuItem value={2}>Launching</MenuItem>
                  {/* <MenuItem value={3}>Closed</MenuItem> */}
                </Select>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-3 h-full">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              {/* <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea> */}
              <Editor
                apiKey="n4wo29pfipl3fr4n3e29mh6yokcj1nt0cigd7rz76twvvswg"
                id="description"
                name="description"
                value={formData.description}
                onEditorChange={handleDescChange}
                initialValue="<p>Describe your project here...</p>"
                init={{
                  selector: "textarea",
                  height: 350,
                  menubar: false,
                  resize: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
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
  );
};

export default PostModal;
