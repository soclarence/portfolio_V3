import { Link1 } from "iconsax-react";
import Projects from "../components/Projects";
import data from "../data/data";
import dp from "../assets/dp.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Dash() {
  return (
    <>
      <Nav />

      <div className="container m-auto w-full md:w-[70%] lg:w-[50%]">
        <div id="about" className="flex items-center space-x-4 pt-10">
          <div className="rounded-full h-20 w-20 bg-gray-500 overflow-hidden">
            <img src={dp} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[75%] text-left">
            <h3 className="font-semibold text-lg">Clarence Aigbuza</h3>
            <p className="text-gray-400 text-base">
              Frontend Developer based in Nigeria
            </p>
            <div className="flex items-center gap-2 mt-2">
              <a href="https://github.com/soclarence" target="_blank">
                <FaGithub
                  size={18}
                  className="text-gray-400 hover:text-[#8FB2F0]"
                />
              </a>
              <a href="https://instagram.com/soclarence">
                <FaInstagram
                  size={18}
                  className="text-gray-400 hover:text-[#8FB2F0]"
                />
              </a>
              <a href="https://www.linkedin.com/in/clarence-aigbuza/">
                <FaLinkedin
                  size={18}
                  className="text-gray-400 hover:text-[#8FB2F0]"
                />
              </a>
              <a href="mailto:aigbuzaclarence@gmail.com">
                <BiEnvelope
                  size={20}
                  className="text-gray-400 hover:text-[#8FB2F0]"
                />
              </a>
            </div>
          </div>
        </div>
        {/* about me */}
        <div className="text-left mt-10">
          <h4 className="text-gray-500 font-semibold mb-5">About Me</h4>
          <p>
            I specialize in crafting intuitive and engaging web applications
            that seamlessly blend design and functionality. With over 5 years of
            experience in design and 3 years in frontend development, I excel at
            transforming user needs into innovative digital solutions.
            <br />
            At 2canplay, I led a comprehensive design overhaul, resulting in a
            20% increase in user engagement. My ability to both design and
            develop allowed me to build their website from scratch, ensuring a
            consistent and impactful brand presence.
            <br />
            <br />
            What sets me apart is my multidisciplinary background in marketing,
            media, and communication. This unique perspective enables me to
            approach projects holistically—understanding user behaviors,
            aligning with business goals, and delivering products that drive
            results. I’m passionate about tackling complex challenges, staying
            ahead of trends, and fostering innovation in every project I
            undertake.
          </p>
          <div>
            <a href="">
              <button className="cursor-pointer flex items-center justify-center space-x-2 mt-5 text-[#8FB2F0] hover:text-white ease-in transition-all hover:pl-2">
                <Link1 size="32" />
                <p className="font-semibold">View Full Résumé</p>
              </button>
            </a>
          </div>
        </div>
        {/* projects */}
        <div id="projects" className="text-left mt-14">
          <h4 className="text-gray-500 font-semibold mb-5">Projects</h4>
          <section className="space-y-10">
            {data.map((data, i) => (
              <Projects
                key={i}
                title={data.title}
                body={data.body}
                tools={data.tools}
                link={data.link}
              />
            ))}
          </section>
          <div className="mt-10">
            <Link to="/archive">
              <button className="cursor-pointer flex items-center justify-center space-x-2 mt-5 text-[#8FB2F0] hover:text-white ease-in transition-all hover:pl-2">
                <Link1 size="32" />
                <p className="font-semibold">View Project Archive</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full mt-16">
          <p className="text-sm text-gray-400">
            Built by yours truely ❤️ with inspirations from{" "}
            <span className="hover:text-white">
              {" "}
              <a href="read.cv" target="_blank">
                read.cv
              </a>{" "}
            </span>{" "}
            and my linkedin account. Site was built using Vite/Typescript
          </p>
        </div>
      </div>
    </>
  );
}
