import { useContext, useState } from "react";
import SiteContext from "../../context/site_context";
import TagContext from "../../context/tag_context";
import Button from "../Button";

const Tags = ({ priority, priorityPipe, category, categoryPipe }) => {
  const { priorities } = useContext(SiteContext);
  const { tags } = useContext(TagContext);

  const tagSelectHandler = (tag_id) => {
    if (category.includes(tag_id)) {
      categoryPipe(category.filter((tag) => tag != tag_id));
    } else {
      categoryPipe([...category, tag_id]);
    }
  };

  return (
    <div className="grid gap-4">
      <div>
        <p className="my-2">Priority</p>
        <div className="grid grid-cols-3 gap-2">
          {priorities.map((item, key) => (
            <div key={key}>
              <Button
                title={item.title.toLocaleUpperCase()}
                style={`w-full p-2 rounded-full ${
                  priority == item.id
                    ? `${item.color} text-white`
                    : "bg-gray-300 text-gray-600 text-xs font-medium"
                }`}
                action={() => priorityPipe(item.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="my-2">Category</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((item, key) => (
            <div key={key}>
              <Button
                title={item.title.toLocaleUpperCase()}
                style={`py-1 px-4 rounded-xl ${
                  category.includes(item.id)
                    ? `${item.color_code} text-white`
                    : "bg-gray-300 text-gray-600 text-xs font-medium"
                }`}
                action={() => tagSelectHandler(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
