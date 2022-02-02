import Button from "./Button";

const TaskPreview = ({ closeModal }) => {
  return (
    <div className="py-8 rounded-xl px-4 bg-gray-100 text-sm w-full sm:max-w-md sm:min-w-[30%] grid gap-8 font-semibold shadow-md">
      <div className="grid grid-cols-3 gap-1 text-center">Content</div>

      <div className="flex justify-end gap-2 my-4">
        <Button
          title="Close"
          style="bg-red-900 py-2 px-5 text-white rounded-full"
          action={closeModal}
        />
      </div>
    </div>
  );
};

export default TaskPreview;
