import { createContext } from "react";
import { getTags } from "../lib/tag";

const TagContext = createContext(getTags());

export default TagContext;
