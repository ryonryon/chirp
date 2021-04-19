import getFormatDay from "./getFormatDay";

export default function getRelativeDate(_baseDate: Date): string {
  const baseDate = new Date(
    `${_baseDate.getFullYear()}/${_baseDate.getMonth()}/${_baseDate.getDate()}`
  );
  const _today = new Date();
  const today = new Date(
    `${_today.getFullYear()}/${_today.getMonth()}/${_today.getDate()}`
  );

  const diff = (baseDate.getTime() - today.getTime()) / 86400000;

  if (diff === 0) return "Today";
  if (diff === -1) return "Yesterday";

  const day = getFormatDay(baseDate.getDay());
  const month = baseDate.getMonth() + 1;
  const year = baseDate.getFullYear();
  const thisYear = today.getFullYear();
  const date = baseDate.getDate();

  return year === thisYear
    ? `${month}/${date}, ${day}`
    : `${day}, ${month}/${date}, ${year}`;
}
