import { useState } from "react";
import Button from "../Button";
import Input from "../Form/Input";

const Deadline = ({
  scheduleDate,
  scheduleDatePipe,
  scheduleTime,
  scheduleTimePipe,
}) => {
  const [reminder, setReminder] = useState(0);

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
          <Button
            title="Low"
            style={`py-1 px-4 rounded-full text-white ${
              reminder == 0 ? "bg-indigo-900" : "bg-gray-400"
            }`}
            action={() => setReminder(0)}
          />
          <Button
            title="Medium"
            style={`py-1 px-4 rounded-full text-white ${
              reminder == 1 ? "bg-indigo-900" : "bg-gray-400"
            }`}
            action={() => setReminder(1)}
          />
          <Button
            title="High"
            style={`py-1 px-4 rounded-full text-white ${
              reminder == 2 ? "bg-indigo-900" : "bg-gray-400"
            }`}
            action={() => setReminder(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default Deadline;
