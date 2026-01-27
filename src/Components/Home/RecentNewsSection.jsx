import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const newsItems = [
  {
    date: "June 2025",
    title:
      "When should you hire a lawyer? A practical guide for individuals & businesses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgmrVC-0yhVDi6kFSVBihjvFJhn45MuPpeiueoHUd8q3YTnV8ttU6jOn81M9fGALoxLyMJVa3l6_Fn2ptXocfPrkBqPy4-j_ybZ99c8yAbbv2oAjyNJdm-pINJ-mw6H4JibcJv0TwraZrCSzBdJZS8fH4zWx5Kja_gAUt_XDiLw21-_A2Huhkf9n0AgvkGi-NFRe0QpE4rNoWAlStxU_WyJyh-CMUyYkCyYIz5-CWTRkG96LQBmR9uzaa3Wvpm11ZyM5HPIk3zjw",
    filledIcon: false,
  },
  {
    date: "June 2025",
    title:
      "Divorce and child custody: what you need to know in the United States of America",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPgqqWP3ag5QkFREGjg3RXW7aXXCYlNJe_i5w6WaMqLh12mDEOSLJQA5lB2IOJmg4Knq9vTTrbQplzk_an-uVDmxY9KC7HYFzA77ujqTORewN3YhC360K08RrF9ny6Sm5bBXzFXYO6Jye2QTc5wiqSmdu7nweslzN7EsBEzsb192HDV43y1O2AtlLluixslndnch72nyzvyBgIHJz9DQph6dvfgZxB52vhobr6VobL2UIAfTzCNbXev6sPSNA7Z7BCAYAPjJMjRA",
    filledIcon: false,
  },
  {
    date: "June 2025",
    title:
      "How we achieved a landmark victory in a office workplace harassment case",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN6DmXUdaL1sL-6n0eHDcViMJJN9vyVjL0GOO7Ugg02qGuoug8N9ILzvszowQiizLCRmxGP8eoRjWWNOpZF6UIjlTPHSUwFHMdWVDuu6d_VXv8pmx53myO255HpGdAuS3UNAgmQFRFrZ3tP6mnrtmr7okTuxEfPZQ-LXk_SYIPB5yRMRVsV_a377JmxF_HAGwjhMW7rpJ5Ut3lqJOhFQi23Bup_llIVayJlZcdPuLxdGLHR4oJ1FJGpCj04Ny92NxreH_Mm8UGSA",
    filledIcon: false,
  },
];

export default function RecentNewsSection() {
  return (
    <section className="bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 px-5 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline mb-16 relative">
        <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-sans mr-24">
          News
        </span>
        <div className="flex-grow flex items-center">
          <h2 className="text-4xl md:text-5xl font-display font-normal text-gray-800 dark:text-gray-100 whitespace-nowrap">
            Our recent news
          </h2>
          <div className="ml-10 flex-grow h-[1px] bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {newsItems.map((item, index) => (
          <article key={index} className="group cursor-pointer">
            {/* Meta */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#be7d60]"></span>
                <span className="text-[10px] tracking-[0.2em] font-sans font-medium uppercase text-gray-600 dark:text-gray-400">
                  News
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-gray-500 dark:text-gray-400 text-right leading-tight">
                {item.date.split(" ")[0]} <br /> {item.date.split(" ")[1]}
              </span>
            </div>

            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden mb-8 bg-gray-100 dark:bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Title + Icon */}
            <div className="flex items-start gap-4">
              <h3
                className={`text-xl leading-snug font-display group-hover:text-[#BE7D60] group-hover:underline decoration-[#BE7D60]/40 group-hover:underline-offset-8 group-hover:decoration-[#BE7D60] transition-all`}
              >
                {item.title}
              </h3>
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  item.filledIcon
                    ? "bg-primary text-white"
                    : "border border-[#BE7D60]/40 text-[#BE7D60] group-hover:bg-[#BE7D60] group-hover:text-white"
                }`}
              >
                <MdArrowRightAlt className="text-xl" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
