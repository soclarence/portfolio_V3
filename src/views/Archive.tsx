import { ArrowLeft } from "iconsax-react";
import archive from "../data/Archive.ts";
import { Link } from "react-router-dom";

export default function Archive() {
  return (
    <div className="w-full">
      <Link to="/">
        <div className="flex items-center mb-3 space-x-2 text-[#8FB2F0] font-semibold">
          <ArrowLeft size="15" />
          <p className="w-fit">About me</p>
        </div>
      </Link>
      <h1 className="text-4xl font-bold w-fit">All Projects</h1>

      <div className="relative w-full mt-16">
        <div className="sticky top-0 grid grid-cols-6 w-full border-b border-[#3f4041] py-5 text-left font-bold backdrop-blur">
          <p className="col-span-3">Project</p>
          <p className="col-span-2">Tools</p>
          <p className="">Made at / With</p>
        </div>
        {/* items */}
        {archive.map((items, i: number) => (
          <div
            key={i}
            className="grid grid-cols-6 w-full border-b border-[#3f4041] py-10 text-left"
          >
            <p className="col-span-3 font-semibold">{items.project}</p>
            <div className="col-span-2 flex flex-wrap items-center gap-3">
              {items.tools.map((tool, i: number) => (
                <div
                  key={i}
                  className="rounded-full bg-[#2350A1] px-3 py-2 w-fit text-xs"
                >
                  <p>{tool}</p>
                </div>
              ))}
            </div>
            <p className=" text-gray-400 text-sm font-semibold">{items.made}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
