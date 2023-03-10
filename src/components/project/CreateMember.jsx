import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddMemberModal from "../popup/AddMemberModal";
import { Button } from "@mui/material";
import * as projectMemberService from "../../services/projectMemberService";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}
export const CreateMember = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [members, setMembers] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const ProjectMembers = async () => {
    const projectId = localStorage.getItem("newProjectId");
    const { data } = await projectMemberService.getMembersProject(projectId);
    console.log(data.data);
    setMembers(data?.data);
  };

  const onCreateSuccess = () => {
    ProjectMembers();
  };
  useEffect(() => {
    ProjectMembers();
  }, []);
  return (
    <div className="h-content mx-[40px] flex flex-col mb-[40px]">
      <div className=" pb-[30px] mb-[30px] ">
        <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">
          Introduce the people behind your project
        </h3>
        <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">
          You can add another user as member of the project
        </p>

        <div>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-multiple-name-label">User</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
          >
            Add Member
          </button>
        </div>
        <div>
          <h1>List Member</h1>
          <div className="mt-[20pt] pb-[20pt] border-b-2 border-b-slate-200 grid grid-cols-3 gap-[20px]">
            {members.length !== 0 ? (
              members?.map((member, index) => (
                <div className="flex items-center space-x-4" key={index}>
                  <img className="w-10 h-10 rounded-full" src="/no_img.png" alt="" />
                  <div className="font-medium w-full flex justify-between items-center">
                    <div>
                      <span>{member.title} </span>
                      <Link to={"/"} className="text-sm text-slate-400 font-normal italic">
                        {member.name}
                      </Link>
                      <p className="text-sm text-blue-700 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="font-bold text-center">List Member Is Empty</div>
            )}
          </div>
        </div>
        <AddMemberModal open={openModal} onClose={() => setOpenModal(false)} onCreateSuccess={onCreateSuccess} />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next step: Extras
        </button>
      </div>
    </div>
  );
};

export default CreateMember;
