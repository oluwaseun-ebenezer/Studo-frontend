import { getTags } from "../lib/tag";

export const getTag = (tag_id) => {
  const { 0: tag } = getTags().tags.filter((item) => item.id == tag_id);
  if (tag == undefined || Object.keys(tag).length != 3) {
    return {
      id: "NULL",
      title: "NULL",
      color_code: "NULL",
    };
  } else {
    return tag;
  }
};
