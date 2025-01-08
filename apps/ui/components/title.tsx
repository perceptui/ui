"use client";
type Props = {
  isNew?: boolean;
  title: string;
};
export const Title = ({ isNew, title }: Props) => {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <h1 className="text-[.8rem]">{title}</h1>
      {isNew && (
        <div className="px-2 py-0 text-nowrap">
          <span className="text-xs p-0 dark:text-green-400 text-green-700 animate-pulse">
            New
          </span>
        </div>
      )}
    </div>
  );
};
