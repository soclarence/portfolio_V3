interface Project {
  title: string;
  body: string;
  tools: string[];
  link: string;
}

export default function Projects({ title, body, tools, link }: Project) {
  return (
    <div className="border-l-[#28292A] cursor-pointer hover:border-l-4  hover:pl-2 transition-all delay-75 duration-100 ease-in-out group/item">
      <a href={link} target="_blank">
        <h5 className="font-bold text-lg mb-1 group-hover/item:text-[#8FB2F0]">
          {title}
        </h5>
        <p className="text-gray-400 text-sm">{body}</p>

        <section className="mt-3 flex flex-wrap items-center justify-start gap-2">
          {tools &&
            tools.map((items: string, i: number) => (
              <div
                key={i}
                className="rounded-full bg-[#2350A1] px-3 py-2 w-fit text-xs"
              >
                <p>{items}</p>
              </div>
            ))}
        </section>
      </a>
    </div>
  );
}
