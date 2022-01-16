import Input from "../Form/Input";
import TextArea from "../Form/TextArea";

const Details = ({ title, titlePipe, description, descriptionPipe }) => {
  return (
    <div className="grid gap-4">
      <div>
        <p className="my-2">Title</p>
        <Input
          name="title"
          type="text"
          value={title}
          onChangeAction={titlePipe}
          style="w-full rounded-xl appearance-none px-4 py-2 border border-gray-700 focus:outline-none hover:border-indigo-400 focus:border-indigo-400 focus:border-transparent"
        />
      </div>

      <div>
        <p className="my-2">Description</p>
        <TextArea
          name="message"
          rows={5}
          value={description}
          onChangeAction={descriptionPipe}
          style="resize-none w-full rounded-xl appearance-none p-4 border border-gray-700 focus:outline-none hover:border-indigo-400 focus:border-indigo-400 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default Details;
