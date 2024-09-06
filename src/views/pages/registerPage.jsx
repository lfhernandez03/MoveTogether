import Register from "../auth/components/register";
import { Navbar } from "../global/elements/navbar";

const RegisterPage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div>
          <Navbar />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center">
          <div className="lg:flex justify-center hidden">
            <img
              src="src/assets/images/register.png"
              alt="Running"
              className="max-w-xl max-y-xl"
            />
          </div>
          <div className="flex justify-center">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
