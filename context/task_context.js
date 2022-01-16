import { createContext } from "react";
import { getTasks } from "../lib/task";

const TaskContext = createContext(getTasks());

export default TaskContext;
