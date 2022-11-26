export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "experience",
      title: "Experience Subject",
      type: "string",
    },
    {
      name: "description",
      title: "Experience Description",
      type: "string",
    },
    {
      name: "experienceImg",
      title: "Experience Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
