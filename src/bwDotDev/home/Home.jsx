import Github from "../icons/GIthub";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Ben Whitfield</h1>
      <h3>Tech Lead @ ANS Group, Manchester</h3>
      <div className="links">
        <a
          href="https://github.com/BIWhitfield"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>

        <a
          href="https://www.instagram.com/uptheoldkentroad/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>

        <a
          href="https://www.linkedin.com/in/biwhitfield/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}

export default Home;
