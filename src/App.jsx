// App.jsx
import DataImage from "./data.js";
import { listTools } from "./data.js";
import { listProyek } from "./data.js";
import { listSertifikat } from "./data.js";

function App() {
  return (
    <>
      <section className="w-full min-h-[80vh] flex items-center justify-center bg-zinc-900 text-white font-sans">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
            {/* Left: Text Content (always first in source order for mobile) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8 bg-zinc-800 p-4 rounded-2xl w-fit">
                {/* Ensure the Hero Icon image is appropriately sized and styled */}
                <img
                  src={DataImage.HeroImage}
                  alt="Hero Icon"
                  className="w-10 h-10 object-cover rounded-md"
                  loading="lazy"
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
                I have an interest in programming and development, especially
                web-based development both as a front-end web developer and even
                fullstack web developer. I am currently pursuing my
                undergraduate education as an informatics student and always
                honing my programming skills.
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
                src={DataImage.HeroImage}
                alt="Faizal Azzriel Gibar"
                className="w-40 sm:w-64 md:w-[350px] lg:w-[400px] h-auto rounded-2xl mx-auto md:mx-0 shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="tentang mt:32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="img"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hello! my name is Faizal Azzriel Gibar, I am a Software Engineering
            student at the Indonesian Education University (UPI) with a focus on
            web-based application and system development. Through various
            projects and experiences, I have honed my skills in programming,
            software testing, and problem-solving. I'm interested in Web
            Development, Android, and Cybersecurity, and I'm eager to deepen my
            expertise and contribute to developing innovative and impactful
            technology solutions.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb1">
                  10<span className="text-violet-500">+</span>
                </h1>
                <p>Project Completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb1">
                  2<span className="text-violet-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools Used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Here are some tools that I often use when creating a website or
            design
          </p>
          <div className="tools-box mt-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Projects */}
        <div className="proyek mt-32 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
          <p className="text-base/loose text-center opacity-50">
            here are some of the projects I've made
          </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 rounded-md bg-zinc-800">
                <img src={proyek.gambar} alt="proyek image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="py-1 px-3 bg-zinc-700 rounded-md font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href="#"
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                    >
                      See Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sertifikat */}
        <div className="sertifikat mt-32 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">Certificate</h1>
          <p className="text-base/loose text-center opacity-50 mb-10">
            here are some certificates that I have
          </p>
          <div className="sertifikat-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {listSertifikat.map((sertif) => (
              <div
                key={sertif.id}
                className="p-4 rounded-md bg-zinc-800 flex flex-col items-center"
              >
                <img
                  src={sertif.gambar}
                  alt={sertif.nama}
                  className="w-64 h-64 object-contain mb-4 rounded-md"
                  loading="lazy"
                />
                <h2 className="text-xl font-bold mb-2 text-center">
                  {sertif.nama}
                </h2>
                <p className="opacity-70 text-center">{sertif.desk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-base/loos text-center mb-10 opacity-50 ">
          let's Connect with me
        </p>
        <form
          action="https://formsubmit.co/faizalazzriel@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 w-fit mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="input name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="input email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Message</label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="input message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
