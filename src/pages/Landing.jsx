import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eveniet asperiores, ea neque quis sunt aliquam non voluptas dolor
            perferendis reiciendis doloremque quo et iure numquam nulla
            consectetur molestiae doloribus amet debitis. Ullam esse
            voluptatibus expedita doloribus possimus eaque repellendus? Tempora
            deleniti eligendi totam numquam harum debitis quasi cumque
            molestiae.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
