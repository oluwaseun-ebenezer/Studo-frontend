import { getTag } from "../helper/tag";
import { getPriority } from "../helper/task";

const Task = ({ title, time, tags, priority }) => {
  return (
    <div className="w-full flex py-2 px-4 gap-4">
      <div
        className={`w-1.5 ${getPriority(priority).color} rounded-full`}
      ></div>
      <div className="flex sm:flex-col items-center sm:items-start justify-between w-full py-2 gap-4">
        <div>
          <h2 className="font-semibold text-xl line-clamp-1">{title}</h2>
          <p className="text-xs line-clamp-1">{time.toDateString()}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((item, key) => (
            <div
              key={key}
              className={`py-1 px-4 ${getTag(item).color_code} rounded-full`}
            >
              <p className="text-xs font-medium sm:text-white invisible hidden sm:inline sm:visible">
                {getTag(item).title.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
