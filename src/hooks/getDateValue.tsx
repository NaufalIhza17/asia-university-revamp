interface GetDateProps {
  options: "day" | "date" | "month" | "year";
}

export default function getDateValue({
  options,
}: GetDateProps): number | string {
  const dateReact = new Date();

  switch (options) {
    case "day":
      return getDayAsString(dateReact.getDay());
    case "date":
      return dateReact.getDate();
    case "month":
      return getMonthAsString(dateReact.getMonth());
    case "year":
      return dateReact.getFullYear();
    default:
      throw new Error("Invalid option");
  }
}

function getDayAsString(day: number): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function getMonthAsString(month: number): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}
