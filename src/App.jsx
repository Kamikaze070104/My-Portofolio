// App.jsx
function App() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-zinc-900 text-white font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
          {/* Left: Text Content (always first in source order for mobile) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8 bg-zinc-800 p-4 rounded-2xl w-fit">
              {/* Ensure the Hero Icon image is appropriately sized and styled */}
              <img
                src="/assets/Faizal-img.png"
                alt="Hero Icon"
                className="w-10 h-10 object-cover rounded-md"
              />
              <q className="text-sm sm:text-base font-inter italic">
                Nothing last forever, we can change the future 🔥
              </q>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left font-inter leading-tight">
              Hello, I'm{" "}
              <span className="text-violet-600">Faizal Azzriel Gibar</span>
            </h1>
            <p className="text-base md:text-lg mb-6 opacity-80 text-justify font-inter">
              I am a Software Engineering student at the Indonesian Education
              University (UPI) with a focus on web-based application and system
              development. Through various projects and experiences, I have
              honed my skills in programming, software testing, and
              problem-solving. I'm interested in Web Development, Android, and
              Cybersecurity, and I'm eager to deepen my expertise and contribute
              to developing innovative and impactful technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2 font-semibold"
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a
                href="#"
                className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2 font-semibold"
              >
                See Project <i className="ri-arrow-down-long-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* Right: Photo (will appear below text on mobile) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/assets/Faizal-img.png"
              alt="Faizal Azzriel Gibar"
              className="w-40 sm:w-64 md:w-[350px] lg:w-[400px] h-auto rounded-2xl mx-auto md:mx-0 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
