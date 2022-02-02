import { useState } from "react";
import { submitTask } from "../../helper/task";
import Button from "../Button";
import Deadline from "./Deadline";
import Details from "./Details";
import Tags from "./Tags";

const CreateTask = ({ closeModal }) => {
  const [tab, setTab] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [reminder, setReminder] = useState(0);
  const [category, setCategory] = useState([]);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  console.log(
    title,
    description,
    priority,
    category,
    scheduleDate,
    scheduleTime
  );
  return (
    <div className="py-8 rounded-xl px-4 bg-gray-100 text-sm w-full sm:max-w-md sm:min-w-[30%] grid gap-8 font-semibold shadow-md">
      <div className="grid grid-cols-3 text-white gap-1 text-center">
        <Button
          title="Details"
          style={`rounded-l-full ${
            tab == 0 ? "bg-indigo-500" : "bg-indigo-900"
          } p-1 sm:p-2`}
          action={() => setTab(0)}
        />
        <Button
          title="Tags"
          style={`${tab == 1 ? "bg-indigo-500" : "bg-indigo-900"} p-1 sm:p-2`}
          action={() => setTab(1)}
        />
        <Button
          title="Deadline"
          style={`rounded-r-full ${
            tab == 2 ? "bg-indigo-500" : "bg-indigo-900"
          } p-1 sm:p-2`}
          action={() => setTab(2)}
        />
      </div>
      {tab == 0 ? (
        <Details
          title={title}
          titlePipe={setTitle}
          description={description}
          descriptionPipe={setDescription}
        />
      ) : (
        ""
      )}

      {tab == 1 ? (
        <Tags
          priority={priority}
          priorityPipe={setPriority}
          category={category}
          categoryPipe={setCategory}
        />
      ) : (
        ""
      )}

      {tab == 2 ? (
        <Deadline
          scheduleDate={scheduleDate}
          scheduleDatePipe={setScheduleDate}
          scheduleTime={scheduleTime}
          scheduleTimePipe={setScheduleTime}
          reminder={reminder}
          reminderPipe={setReminder}
        />
      ) : (
        ""
      )}

      <div className="flex justify-end gap-2 my-4">
        <Button
          title="Cancel"
          style="bg-red-900 py-2 px-5 text-white rounded-full"
          action={closeModal}
        />
        <Button
          title={tab == 2 ? "Create" : "Next"}
          style="bg-indigo-900 py-2 px-8 text-white rounded-full"
          action={() => {
            if (tab != 2) {
              setTab(tab + 1);
            } else {
              submitTask({
                title,
                description,
                priority,
                tags: category,
                schedule: 1642698959,
                reminder: 1642698959,
                tracker: 0,
                on_screen: 0,
                time_frame: 0,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default CreateTask;
