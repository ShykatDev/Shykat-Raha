export default {
  name: "accomplishment",
  title: "Accomplishment",
  type: "document",
  fields: [
    {
      name: "certificate",
      title: "Certificate Subject",
      type: "string",
    },
    {
      name: "description",
      title: "Certificate Description",
      type: "string",
    },
    {
      name: "certificateimg",
      title: "Certificate Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
