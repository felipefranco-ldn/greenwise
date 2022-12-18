import { Link } from "react-router-dom";
import "./AboutInterface.scss";
import greenWiseLogo from "../../assets/images/images/greenwise-logo.svg";
import techStack from "../../assets/images/images/tech-stack.png";

export default function AboutInterface() {
  return (
    <div className="about__container">
      <Link className="header__logo-container" to="/">
        <img
          className="header__logo"
          alt="green-wise logo"
          src={greenWiseLogo}
        />
      </Link>

      <a
        href="https://greenwise.netlify.app/"
        className="about__text about__text--bold"
        target="_blank"
        rel="noreferrer"
      >
        greenwise.netlify.app
      </a>

      <p className="about__description">
        Hello! Thanks for visiting GreenWise.
        <br /> This website was conceived and developed as my capstone project
        at the end of the Web Development Diploma Programme at BrainStation. In
        the future I would like to incorporate more functionalities, like saving
        a history of estimates, as well as estimating your carbon footprint
        based on your diet and provide the environmental impact of everyday
        goods, like clothing, appliances, hygiene products, etc. If you have
        more ideas that you would like to see implemented on GreenWise, please
        do get in touch. Suggestions are always welcome! Cheers.
      </p>

      <h1 className="about__title">Tech Stack</h1>

      <img className="about__tech-stack" alt="felipe franco" src={techStack} />

      <div className="about__bottom-box">
        <Link className="about__link" to="/">
          <p className="about__text about__text--bold">
            <span className="span"> {"<<"} </span> Home
          </p>
        </Link>

        <Link className="about__link" to="/intro">
          <p className="about__text about__text--bold">
            About Felipe <span className="span"> {">>"} </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
