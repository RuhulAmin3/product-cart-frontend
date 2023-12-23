import illustration from "../assets/svg/illustration.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#161c24] flex items-center justify-center">
      <div className="container">
        <div className="wrapper">
          <div className="basis-7/12 md:block">
            <img src={illustration} alt="login_illustration" />
          </div>
          <div className="login-form">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
