import { getSiteSettings } from "../lib/site";

export const getPriority = (priority_id) => {
  const { 0: priority } = getSiteSettings().priorities.filter(
    (item) => item.id == priority_id
  );

  return priority;
};
