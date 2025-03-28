import { cn } from "src/_lib/utils";

interface BlockCardProps {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const CardButton = ({
  title,
  subTitle,
  icon,
  isSelected = false,
  className,
  onClick,
}: BlockCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl  shadow-card-shadow cursor-pointer",
        isSelected ? "bg-gray-40" : "bg-white",
        className
      )}
    >
      <div className="p-5 flex flex-col gap-2">
        <div>{icon}</div>
        <div>
          <p
            className={cn(
              "label-md text-gray-90 pb-1 whitespace-pre-line",
              isSelected ? "text-white" : "text-gray-90"
            )}
          >
            {title}
          </p>
          <p className={cn("caption-sm text-gray-50", isSelected ? "text-white" : "text-gray-50")}>
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
