export const getSiteSettings = () => {
  return {
    priorities: [
      { id: 0, color: "bg-green-600", title: "Low" },
      {
        id: 1,
        color: "bg-yellow-600",
        title: "Medium",
      },
      {
        id: 2,
        color: "bg-red-600",
        title: "High",
      },
    ],
  };
};
