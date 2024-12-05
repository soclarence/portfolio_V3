import { Document, Profile } from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");

  const handleScroll = (id: string) => {
    navigate("/");
    setCurrent(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden top-0 w-24 h-[100dvh] bg-[#2D2E30] fixed left-0  p-5 gap-5 md:flex md:flex-col justify-center items-center">
      <button
        className={`flex flex-col items-center justify-center gap-y-2 ${
          current.includes("about") ? "text-white" : "text-gray-400"
        }`}
        onClick={() => handleScroll("about")}
      >
        <Profile size="25" />
        <p className="text-xs font-bold">About</p>
      </button>
      <button
        className={`flex flex-col items-center justify-center gap-y-2 ${
          current.includes("projects") ? "text-white" : "text-gray-400"
        }`}
        onClick={() => handleScroll("projects")}
      >
        <Document size="25" />
        <p className="text-xs font-bold">Projects</p>
      </button>
    </div>
  );
}
