import { motion } from "framer-motion";

const projects = [
  {
    title: "Previous portfolio",
    image: "/project1.png",
    live: "https://rohit-myportfolio.netlify.app/",
    repo: "https://github.com/rohititgithub/rohit-portfolio.git",
  },
  {
    title: "Animation Landing Page",
    image: "/projects2.png",
    live: "https://your-live-site.com",
    repo: "https://github.com/rohititgithub/Fanta-Animation-web-page.git",
  },
  {
    title: "Something Big is Coming....",
    image: "/project2.jpeg",
    live: "https://your-live-site.com",
    repo: "https://github.com/your-repo",
  },
  {
    title: "Something Big is Coming....",
    image: "/project3.jpeg",
    live: "https://your-live-site.com",
    repo: "https://github.com/your-repo",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f5f5f5] py-10 px-6 md:px-16 relative">
      <div className="flex justify-between text-xs text-gray-500 mb-10">
        <p>02</p>
        <p>/FEATURED</p>
      </div>

      <div className="absolute hidden sm:block left-0 md:left-6 top-48 md:top-60 pointer-events-none">
        <h1 className="vertical-text text-[40px] md:text-[80px] font-bold text-gray-200/80 tracking-widest">
          /projects
        </h1>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-8 pl-6 md:pl-16">
        .. best works
      </h1>

      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.div key={i} className="sticky top-20 flex justify-center">
            <div className="group relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white/80 backdrop-blur-md p-3 transition duration-300 hover:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl transition duration-700 ease-out group-hover:scale-110 group-hover:blur-sm"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 rounded-2xl"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                  {project.title}
                </h2>

                <div className="flex gap-4 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    Live →
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white text-sm rounded-full hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
