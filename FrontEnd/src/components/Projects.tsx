export const Projects = () => {
  const projects = [
    {
      title: "WiFi QR Code Generator",
      description: "A simple tool to generate WiFi QR codes instantly using HTML, CSS, and JavaScript.",
      image: "/project1.png",
      link: "https://github.com/zaidqaiser/wifi-qr-code",
    },
    {
      title: "Smart Attendance Tracker",
      description: "React + Django full-stack attendance system with face recognition and role-based access.",
      image: "/smrt.png",
      link: "https://github.com/zaidqaiser",
    },
    {
      title: "Fivem Loading Screen",
      description: "Enhance the loading experience for your FiveM server, supporting both ESX and QBcore frameworks",
      image: "https://private-user-images.githubusercontent.com/114343092/341990840-bcf137ee-d5d0-4356-b57d-842e42c4876b.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjAyODY4MjYsIm5iZiI6MTc2MDI4NjUyNiwicGF0aCI6Ii8xMTQzNDMwOTIvMzQxOTkwODQwLWJjZjEzN2VlLWQ1ZDAtNDM1Ni1iNTdkLTg0MmU0MmM0ODc2Yi5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxMlQxNjI4NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZTExNmMzZTllODFkZWRhMzhmMjg5MjFmYjhjMzA0NzE2Y2VlNTZhYWI1MzdkY2MyMWFlNWRiMjY4ZWMzYzk1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dRqTrE47m0DKIgIXFnOM90wUK1CYzUa12woOwsiF70g",
      link: "https://github.com/zaidqaiser/FiveM-LoadingScreen--Latest",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[40vh] px-6 md:px-16 lg:px-24 py-20 bg-[var(--black-olive)] text-white"
    >
      <h2 className="text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-12 text-center">
        Featured <span className="text-white">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-[clamp(1.2rem,1.5vw,1.5rem)] font-semibold text-[var(--pale-dogwood)]">
                {project.title}
              </h3>
              <p className="text-[clamp(0.9rem,0.9vw,1.1rem)] text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[var(--black-olive)] bg-[var(--pale-dogwood)] px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300 text-center"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
