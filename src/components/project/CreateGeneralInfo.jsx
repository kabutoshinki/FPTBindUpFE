import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Editor } from "@tinymce/tinymce-react";
import * as projectService from "../../services/projectService";
import { toast } from "react-toastify";

const initialFormData = {
  name: "",
  summary: "",
  description: "",
  source: "",
  voteQuantity: 0,
  milestone: 0,
  founderId: "",
};

export const CreateGeneralInfo = ({ setOpenTab }) => {
  const [formData, setFormData] = useState(initialFormData);

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
      toast.success("Create Project Success!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      // console.log(res?.data?.data);
      localStorage.setItem("newProjectId", res?.data?.data);
      setOpenTab(2);
      // window.location.reload();
      document.documentElement.scrollTop = 0;
    } catch (err) {
      toast.warning("Create Project Fail!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(err);
    }
  };

  return (
    <div className="w-full h-content mx-[40px] flex flex-col mb-[40px]">
      <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[20px]">
        Provide the main information about your project
      </h3>
      <form onSubmit={handleSubmit} className="">
        <div className="">
          {/* Project Name */}
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

          {/* Summary */}
          <div className="mb-6 w-[60%]">
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
          <div className="mb-6 w-[60%]">
            <label htmlFor="source" className="block text-gray-700 font-bold mb-2">
              Link
            </label>
            <input
              type="url"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="mb-6 w-[60%]">
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

          <div className="mb-[30px] w-[80%]">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>

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
            // onClick={() => setOpenTab(2)}
          >
            Create and move to the next step: Logo & Images
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGeneralInfo;
