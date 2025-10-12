const projects = [
  {
    title: "Smart Attendance Tracker",
    description:
      "AI-powered attendance system using YOLO, InsightFace, and React frontend.",
    image: "/projects/attendance.png",
  },
  {
    title: "WiFi QR Code Generator",
    description:
      "Generate QR codes for WiFi networks with elegant UI and instant download.",
    image: "/projects/qr.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-[var(--pale-dogwood)] mb-12">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800/40 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500"
          >
            <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[var(--pale-azure)] mb-2">
                {p.title}
              </h3>
              <p className="text-gray-300">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
