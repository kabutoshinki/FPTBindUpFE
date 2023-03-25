import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import * as changelogService from "../../services/changeLogService";
import { Editor } from "@tinymce/tinymce-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalUpdateChangeLog = ({ open, onClose, data, reFresh }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        title: data.title || "",
        description: data.description || "",
      });
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changelogService.updateChangeLog(formData);
      console.log(formData);
      toast.success("Update Success");
      onClose();
      reFresh();
    } catch (error) {
      toast.error("Update Fail");
    }
  };
  const handleDescChange = (content, editor) => {
    console.log("desc:", content);
    setFormData({ ...formData, ["description"]: content });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 3 }}>
              Update Change Log
            </Typography>

            <div className="mb-4 w-full">
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
            <div className="col-span-3 h-full">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>

              <Editor
                apiKey="n4wo29pfipl3fr4n3e29mh6yokcj1nt0cigd7rz76twvvswg"
                id="description"
                name="description"
                value={formData.description}
                onEditorChange={handleDescChange}
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

            <div className="mt-3">
              <Button
                variant="contained"
                sx={{ me: 3 }}
                style={{ marginRight: "10px" }}
                color="inherit"
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdateChangeLog;
