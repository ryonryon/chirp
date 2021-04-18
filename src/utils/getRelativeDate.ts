export default function getRelativeDate(baseDate: Date): string {
  const _today = new Date();
  const today = new Date(
    `${_today.getFullYear()}/${baseDate.getMonth()}/${baseDate.getDate()}`
  );

  const diff = (baseDate.getTime() - today.getTime()) / 86400000;

  if (diff === 0) return "Today";
  if (diff === -1) return "Yesterday";

  const day = (() => {
    const _day = baseDate.getDay();

    switch (_day) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
  })();

  const month = baseDate.getMonth() + 1;
  const date = baseDate.getDate();
  const year = baseDate.getFullYear();
  const thisYear = today.getFullYear();

  return year === thisYear
    ? `${month}/${date}, ${day}`
    : `${day}, ${month}/${date}, ${year}`;
}
