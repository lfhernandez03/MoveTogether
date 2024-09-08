import Register from "../auth/components/register";
import { Navbar } from "../global/elements/navbar";
import { NavLogin } from "../global/elements/nav";

const RegisterPage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div>
          <NavLogin isLoginPage={false} />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center">
          <div className="lg:flex justify-center hidden">
            <img
              src="/images/register.png"
              alt="Running"
              className="max-w-xl max-y-xl"
            />
          </div>
          <div className="lg:flex lg:justify-center">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
