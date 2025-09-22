import { formatDatetime, timeAgo } from "../utils/format-date";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600  text-sm"
      dateTime={dateTime}
      title={timeAgo(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
