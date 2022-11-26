import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import projects from "./projects";
import accomplishments from "./accomplishments";
import experience from "./experience";
import faq from "./faq";
import skills from "./skills";
import skillText from "./skillText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /* Your types here! */
    projects,
    accomplishments,
    experience,
    faq,
    skills,
    skillText,
  ]),
});
