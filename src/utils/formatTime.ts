export default function formatTime(date: Date): string {
  const minutes = date.getMinutes();

  return `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
