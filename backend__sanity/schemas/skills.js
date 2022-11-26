export default {
  name: "skillsimg",
  title: "SkillsImg",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
    },
    {
      name: "skillimg",
      title: "SkillImg",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
