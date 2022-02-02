export const getSiteSettings = () => {
  return {
    priorities: [
      { id: 0, color: "bg-indigo-500", title: "Low" },
      {
        id: 1,
        color: "bg-indigo-500",
        title: "Medium",
      },
      {
        id: 2,
        color: "bg-indigo-500",
        title: "High",
      },
    ],
    reminders: [
      { id: 0, title: "10 mins", color: "bg-indigo-500", value: 600000 },
      {
        id: 1,
        title: "20 mins",
        color: "bg-indigo-500",
        value: 1200000,
      },
      {
        id: 2,
        title: "30 mins",
        color: "bg-indigo-500",
        value: 1800000,
      },
      {
        id: 3,
        title: "40 mins",
        color: "bg-indigo-500",
        value: 2400000,
      },
      {
        id: 4,
        title: "50 mins",
        color: "bg-indigo-500",
        value: 3000000,
      },
      {
        id: 5,
        title: "1 hour",
        color: "bg-indigo-500",
        value: 3600000,
      },
    ],
  };
};
