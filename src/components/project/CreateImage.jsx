import React, { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import * as projectService from "../../services/projectService";

export const CreateImage = ({ setOpenTab }) => {
  const [logo, setLogo] = useState("");
  const [logoFile, setLogoFile] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
        setLogoFile(e.target.files[0]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImages(selectedFilesArray);
    // // FOR BUG IN CHROME
    // event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (logo) {
        const projectId = localStorage.getItem("newProjectId");
        console.log(projectId);
        formData.append("imageFile", logoFile);
        await projectService.uploadLogoProject(projectId, formData);
        toast.success("Upload Logo Success", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("Please select an image", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    console.log(selectedImages);
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`imageFile`, image);
      });
      const projectId = localStorage.getItem("newProjectId");
      await projectService.uploadImageProject(projectId, formData);
      toast.success("Upload Image Success", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });


    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className="h-content mx-[40px] flex flex-col mb-[40px]">
      <div className="pb-[30px] mb-[30px] ">
        <form onSubmit={handleSave} encType="multipart/form-data">
          <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">Upload your logo</h3>
          <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">
            Let create attractive visual of your project!
          </p>

          <div className="flex items-center">
            <div className="w-[80px] h-[80px] mr-[20px] border border-dashed border-slate-300 rounded bg-white">
              {logo && <img className="object-cover w-full h-full" src={logo} alt="" />}
            </div>
            <div className="flex flex-col space-y-[10px]">
              <label>
                <input
                  type="file"
                  onChange={handleChange}
                  className="text-sm text-grey-500
                file:mr-5 file:py-2 file:px-6
                file:rounded-full file:border-0
                file:text-sm file:font-medium
                file:bg-slate-100 file:text-slate-700
                hover:file:cursor-pointer hover:file:bg-blue-50
                hover:file:text-blue-700
                "
                  required
                />
              </label>
              <p className="text-sm text-slate-500" id="file_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-[20px] w-[80px] text-blue-400 border border-blue-500 hover:text-blue-800 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Save
          </button>
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="pb-[30px] mb-[30px]">
          <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">
            Add images to vividly describe your project
          </h3>
          <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">We recommend at least 3 or more images!</p>

          <div className="w-full">
            <div className="images flex space-x-4">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="image relative text-slate-400 group">
                      <img src={image} alt="upload" className="w-[90px] h-[90px] object-cover rounded" />
                      <button
                        onClick={() => deleteHandler(image)}
                        className="absolute top-[5px] right-[5px] p-[3px] bg-white/50 group-hover:bg-white rounded-full"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill="currentColor"
                            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              <div className={(selectedImages.length > 0 ? "w-[90px]" : "w-[300px]") + " h-[90px]"}>
                <label
                  htmlFor="dropzone-file"
                  className="w-full h-full flex flex-col justify-center items-center cursor-pointer text-slate-400 hover:text-blue-500 rounded border border-slate-400 border-dashed"
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z"
                      fill="currentColor"
                    />
                  </svg>
                  {selectedImages.length === 0 && (
                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  )}
                </label>
                <input
                  id="dropzone-file"
                  type="file"
                  name="images"
                  className="hidden"
                  onChange={onSelectFile}
                  multiple
                  accept="image/png , image/jpeg, image/webp, image/gif"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-[20px] w-[80px] text-blue-400 border border-blue-500 hover:text-blue-800 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm py-2.5 mr-2 mb-2 focus:outline-none"
            >Save</button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setOpenTab(3);
            document.documentElement.scrollTop = 0;
          }}
        >
          Add Members
        </button>
      </div>
    </div>
  );
};

export default CreateImage;
