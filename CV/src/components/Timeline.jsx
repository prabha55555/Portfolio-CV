import { motion } from "framer-motion";

const timelineData = [
  { title: "SCHOOLING", content: ["Kongu Vellalar Matric Higher Secondary School,Tirupur", "HSC: 88.8%", "SSLC: 83.6%"] },
  { title: "COLLEGE", content: ["KPR Institute of Engineering and Technology,Coimbatore", "B.Tech-Computer Science and Business Systems", "CGPA: 8.3"] },
  { title: "INTERNSHIPS", content: ["Codsoft", "Capable Solutions", "Meriskill", "AICTE"] },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="container mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full hidden md:block"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex w-full mb-10 items-center md:items-start ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } flex-col md:flex-row`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="relative w-8 h-8 bg-purple-500 rounded-full z-10 md:w-10 md:h-10"></div>

            {/* Timeline Content */}
            <div
              className={`relative w-full md:w-2/5 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/30 mt-4 md:mt-0 ${
                index % 2 === 0 ? "md:ml-6" : "md:mr-6"
              }`}
            >
              <h2 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h2>
              <div className="text-white mt-2">
                {item.content.map((line, idx) => (
                  <p
                    key={idx}
                    className={`${
                      idx === 0 && (item.title === "SCHOOLING" || item.title === "COLLEGE")
                        ? "text-lg md:text-2xl font-bold text-gray-900"
                        : "text-sm md:text-base"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
