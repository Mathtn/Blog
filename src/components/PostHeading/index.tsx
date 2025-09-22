import Link from "next/link";

type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export default function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight font-extrabold sm:text-4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  const commonClasses = "";

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="group-hover:text-slate-600" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
