import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import * as topicService from "../../services/topicService";
import * as mentorServie from "../../services/mentorService";
import * as projectService from "../../services/projectService";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const CreateExtras = () => {
  const [topics, setTopics] = useState([]);
  const [mentors, setMentos] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [projectTopic, setProjectTopic] = useState([]);
  const [projectMentor, setProjectMentor] = useState([]);
  const { data, loading } = useFetch(`http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/topics`);
  var topicList = [];
  const Topic = async () => {
    const { data } = await topicService.getTopics();
    console.log(data);
    for (var topic of data?.data?.topicDTOList) {
      topicList.push(topic);
    }
    setTopics(topicList);
  };

  var mentorList = [];
  const Mentor = async () => {
    const { data } = await mentorServie.getMentors();
    for (var mentor of data?.data?.mentorDTOList) {
      mentorList.push(mentor.name);
    }
    setMentos(mentorList);
  };

  useEffect(() => {
    Topic();
    Mentor();
  }, []);

  const handleChangeTopic = (event) => {
    const {
      target: { value },
    } = event;
    setProjectTopic(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeMentor = (event) => {
    const {
      target: { value },
    } = event;
    setProjectMentor(typeof value === "string" ? value.split(",") : value);
  };

  // const handleButtonClickAPI = async (e) => {
  //   try {
  //     const userId = localStorage.getItem("user").replace(/"/g, "");
  //     const formData = new FormData();
  //     formData.append("imageFile", image);
  //     console.log(formData);
  //     await userService.userImage(userId, formData);
  //     toast.success("Upload Success");
  //   } catch (error) {
  //     toast.error("Upload Fail");
  //   }
  // };
  const handleSubmitTopics = async () => {
    try {
      const projectId = localStorage.getItem("newProjectId");
      await projectService.addTopicProject(projectId, projectTopic);
      toast.success("Add Topic Success");
    } catch (err) {
      toast.error("Add Topic Fail");
    }
  };
  const handleSubmitMentors = () => {};
  const handleFinish = () => {
    localStorage.removeItem("newProjectId");
  };

  return (
    <div className="h-content mx-[40px] flex flex-col mb-[40px]">
      <div className="pb-[30px] mb-[30px] ">
        <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">
          Tell us more about your project's domain
        </h3>
        <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">What is the topic of your project?</p>

        <div>
          <FormControl sx={{ mb: 3, width: "100%" }}>
            <InputLabel htmlFor="major-select" inputProps={{ id: "major-select" }}>
              Topic
            </InputLabel>
            <Select label="mentor" name="mentor" value={projectTopic} onChange={handleChangeTopic} required>
              <MenuItem disabled value="">
                Select a topic
              </MenuItem>
              {topics.map((topic) => (
                <MenuItem key={topic.id} value={topic.id}>
                  {topic.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button
          onClick={handleSubmitTopics}
          className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div>
      {/* <div className=" pb-[30px] mb-[30px] ">
        <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">Finally, add some more detail</h3>
        <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">Who are your mentors?</p>

        <div>
          <FormControl sx={{ width: 400 }}>
            <InputLabel id="demo-multiple-checkbox-label">Mentors</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={projectMentor}
              onChange={handleChangeMentor}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {mentors.map((mentor, index) => (
                <MenuItem key={index} value={mentor}>
                  <Checkbox checked={projectMentor.indexOf(mentor) > -1} />
                  <ListItemText primary={mentor} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button
          onClick={handleSubmitTopics}
          className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div> */}

      <div className="flex items-center justify-between">
        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update now
        </button> */}
        <Link to={"/project/" + localStorage.getItem("newProjectId")}>
          <button
            onClick={handleFinish}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View my project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateExtras;
