import logo from "./assets/logo.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row?.img} alt="avatar" />
          {params?.row?.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cellWithStatus ${params?.row?.status}`}>{params?.row?.status}</div>;
    },
  },
];

export const projectColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "project",
    headerName: "Project Image",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params?.row?.logo || logo} alt="avatar" />
          {params?.row?.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },

  {
    field: "summary",
    headerName: "Summary",
    width: 250,
  },
  {
    field: "voteQuantity",
    headerName: "Vote",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cellWithStatus ${params?.row?.status}`}>{params?.row?.status}</div>;
    },
  },
];

export const memberColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "user_image",
    headerName: "Members Image",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={logo} alt="avatar" />
          {/* {params?.row?.username} */}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
];

export const changelogColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 650,
    renderCell: (params) => <div dangerouslySetInnerHTML={{ __html: params.value }} />,
  },
  {
    field: "createdDate",
    headerName: "Date",
    width: 100,
  },
];
export const topicColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 500,
  },
  {
    field: "shortName",
    headerName: "Short Name",
    width: 200,
  },
];

export const mentorColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "user_image",
    headerName: "Mentor Image",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={logo} alt="avatar" />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "major",
    headerName: "Major",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
];

export const majorColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "description",
    headerName: "Description",
    width: 700,
  },
];
export const jobColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "description",
    headerName: "Description",
    width: 700,
  },
];
export const userApplyColumns = [
  // { field: "id", headerName: "ID", width: 250 },
  {
    field: "user_image",
    headerName: "User Image",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params?.row?.avatar || logo} alt="avatar" />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "headline",
    headerName: "Headline",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "applicationStatus",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cellWithStatus ${params?.row?.applicationStatus}`}>{params?.row?.applicationStatus}</div>;
    },
  },
];
