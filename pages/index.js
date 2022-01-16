import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import Layout from "../components/Layout";
import SelectInput from "../components/Form/SelectInput";
import { useContext, useState } from "react";
import ReactModal from "react-modal";
import TaskContext from "../context/task_context";

const Index = () => {
  const today = new Date(Date.now());
  const [createModal, setCreateModal] = useState(false);

  const { tasks } = useContext(TaskContext);

  const createModalHandler = () => setCreateModal(!createModal);

  return (
    <Layout site_title="Task">
      <div className="min-h-screen max-h-screen content-center overflow-y-scroll relative">
        <div className="sticky top-0">
          <div className="bg-indigo-900 flex justify-between items-center px-4 py-2 text-gray-100">
            <div>
              <p className="font-medium text-md">Today</p>
              <p className="font-medium text-xl">{today.toDateString()}</p>
            </div>
            <div>Collapse</div>
          </div>

          <div className="grid grid-cols-3 bg-white py-2 border-b border-gray-300">
            <p className="text-center">Todo</p>
            <p className="text-center">Missing</p>
            <p className="text-center">Done</p>
          </div>
        </div>

        <div className="flex justify-end px-4 my-4 gap-4">
          <p className="font-medium">Sort:</p>
          <SelectInput
            options={["Due Date and Time", "Priority", "Category"].map(
              (option) => ({
                title: `${option}`,
                value: option,
              })
            )}
            style="text-sm bg-transparent focus:outline-none border-b-2 pb-2 px-2 border-gray-400 rounded-sm"
          />
        </div>

        <div className="min-h-screen flex flex-col items-center my-4">
          <div className="w-full sm:max-w-xl grid gap-4 px-4">
            {tasks.map((item, key) => (
              <div
                key={key}
                className="bg-gray-100 rounded-xl w-full grid gap-4 border"
              >
                <Task
                  title={item.title}
                  time={new Date(item.schedule)}
                  tags={item.tags}
                  priority={item.priority}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-900 px-4 py-2 text-gray-100 sticky bottom-0">
          <div className="relative flex flex-col items-center">
            <p
              className="absolute -top-10 bg-indigo-900 border-2 border-white rounded-full h-16 w-16 flex justify-center items-center text-4xl font-medium"
              onClick={createModalHandler}
            >
              +
            </p>
            <div className="w-full flex justify-between py-2">
              <p>Tasks</p>
              <p>Calendar</p>
            </div>
          </div>
        </div>

        <ReactModal
          isOpen={createModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          className="h-full overflow-scroll flex flex-col px-2 py-10 items-center bg-gray-400 bg-opacity-50"
        >
          <CreateTask closeModal={createModalHandler} />
        </ReactModal>
      </div>
    </Layout>
  );
};

export default Index;
