"use client";
import CourseCard from "./UI/Homepage/CourseCard";
import { exampleCoursesList } from "./lib/exampleCoursesList";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exampleCoursesList.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
