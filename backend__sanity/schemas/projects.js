export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projecttitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectname",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectdesc",
      title: "Project Short Description",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "string",
    },
    {
      name: "overcome",
      title: "Overcome",
      type: "string",
    },
    {
      name: "projectbanner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projecttech1",
      title: "Technologies Used_01",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projecttech2",
      title: "Technologies Used_02",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projecttech3",
      title: "Technologies Used_03",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "live",
      title: "Live Link",
      type: "string",
    },
    {
      name: "code",
      title: "Code Link",
      type: "string",
    },
  ],
};
