import { CourseCardProps } from "../definitions";
import Link from "next/link";

// Map colors to specific Tailwind classes so the compiler detects them
const colorMap: Record<string, { text: string; bg: string; hover: string }> = {
  green: {
    text: "text-green-500",
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
  },
  red: {
    text: "text-red-500",
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
  },
  orange: {
    text: "text-orange-500",
    bg: "bg-orange-500",
    hover: "hover:bg-orange-600",
  },
  purple: {
    text: "text-purple-500",
    bg: "bg-purple-500",
    hover: "hover:bg-purple-600",
  },
};


export default function CourseCard({
  image,
  category,
  categoryColor,
  title,
  description,
  progress,
  url,
}: CourseCardProps) {

  const isStarted = progress > 0;
  const isComplete = progress === 100;
  const buttonText = isComplete
    ? "Review"
    : isStarted
      ? "Continue Learning"
      : "Start Course";


  // Use the mapped colors or fall back to green if the color is unknown
  const colors = colorMap[categoryColor] || colorMap.green;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm dark:shadow-lg dark:shadow-slate-950/50 overflow-hidden flex flex-col">
      <img
        alt={`${title} course banner`}
        className="w-full h-48 object-cover"
        src={image}
      />
      <div className="p-6 flex flex-col flex-grow">
        <span className={`${colors.text} text-sm font-semibold mb-1`}>
          {category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-center py-1">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {isStarted ? `${progress}% complete` : "Not started"}
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
            {isStarted && (
              <div
                className={`${colors.bg} h-1.5 rounded-full`}
                style={{ width: `${progress}%` }}>
               </div>
            )}
          </div>
        </div>
        <Link href={url} className="w-full">
        <button
          className={`w-full ${colors.bg} text-black font-semibold py-2.5 px-4 rounded-lg shadow-sm dark:shadow-slate-700 ${colors.hover} transition-colors duration-200 dark:text-white cursor-pointer`}>
          {buttonText}
        </button>
        </Link>
      </div>
    </div>
  );
}
