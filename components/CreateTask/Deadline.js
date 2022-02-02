import { useContext, useState } from "react";
import SiteContext from "../../context/site_context";
import Button from "../Button";
import Input from "../Form/Input";

const Deadline = ({
  scheduleDate,
  scheduleDatePipe,
  scheduleTime,
  scheduleTimePipe,
  reminder,
  reminderPipe,
}) => {
  const { reminders } = useContext(SiteContext);

  return (
    <div className="grid gap-4">
      <div>
        <p className="my-2">Date</p>
        <Input
          name="password"
          type="date"
          value={scheduleDate}
          onChangeAction={scheduleDatePipe}
          style="w-full rounded-xl appearance-none px-4 py-2 border border-gray-700 focus:outline-none hover:border-indigo-400 focus:border-indigo-400 focus:border-transparent"
        />
      </div>

      <div>
        <p className="my-2">Time</p>
        <Input
          name="password"
          type="time"
          value={scheduleTime}
          onChangeAction={scheduleTimePipe}
          style="w-full rounded-xl appearance-none px-4 py-2 border border-gray-700 focus:outline-none hover:border-indigo-400 focus:border-indigo-400 focus:border-transparent"
        />
      </div>

      <div>
        <p className="my-2">Reminder</p>
        <div className="flex flex-wrap gap-1">
          {reminders.map((item, key) => (
            <div key={key}>
              <Button
                title={item.title.toLocaleUpperCase()}
                style={`w-full py-1 px-4 rounded-full text-xs font-medium ${
                  reminder == item.id
                    ? `${item.color} text-white`
                    : "bg-gray-300 text-gray-600"
                }`}
                action={() => reminderPipe(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deadline;
