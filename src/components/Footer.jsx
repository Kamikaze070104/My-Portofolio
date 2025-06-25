const Footer = () => {
    return (
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#certificate">Certificate</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Kamikaze070104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/faizal-azzriel-g-686b36258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill ri-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/fzlazzgbr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
        </div>
      </div>
    );
}

export default Footer