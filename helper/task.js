import { getSiteSettings } from "../lib/site";
import axios from "axios";

export const getPriority = (priority_id) => {
  const { 0: priority } = getSiteSettings().priorities.filter(
    (item) => item.id == priority_id
  );

  return priority;
};

export const submitTask = (payload) => {
  axios
    .post("http://localhost:3000/task", payload, {
      headers: { authorization: "Bearer 1" },
    })
    .then((response) => console.log(task.response))
    .catch((error) => console.log(error));
};
