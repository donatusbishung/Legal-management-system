import Input from "../../components/input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="div lightgray h-screen w-full flex justify-center items-center">
        <div className="sub-container w-2/5  p-4">
          <h1 className="text-[#F5F5F5] font-[500] text-[40px] text-center">
            Log In
          </h1>
          <h3 className="text-white text-center text-[16px]">
            Don't have an account? <span className="text-black">Sign Up</span>
          </h3>

          {/* form */}
          <form action="" className="mt-[40px]">
            <div className="div-1 ">
              <Input
                label="Email"
                inputType="email"
                inputName="email"
                placeholder="xxxxxx@gmail.com"
                labelFor="email"
                inputClass="p-3 placeholder-white mb-1 w-[100%] border text-[16px]  font-[200] rounded-[5px]"
                labelClass="font-[400] block text-[#E7E7E7]  mb-1 text-[18px]"
              />
              {/* div-2 */}
              <Input
                label="Password"
                inputType="password"
                inputName="password"
                placeholder="xxxxxx@gmail.com"
                labelFor="email"
                inputClass="p-3 placeholder-white mb-1 w-[100%] border text-[16px]  font-[200] rounded-[5px]"
                labelClass="font-[400] block  text-[#E7E7E7] mb-1 text-[18px]"
              />
            </div>
            <div className="btn-div flex py-3 justify-center items-center">
              <Button
                btnClass=" bg-[#272D3B] px-6 items-center py-2 text-center text-[#F5F5F5] font-[500] text-[15px] text-center rounded-[3px]"
                btnType="button"
                label="Log In"
                btnClick={() => navigate("/dashboard")}
              />
            </div>
          </form>

          {/* terms */}
          <div className="terms flex justify-center items-center pt-11 gap-4">
            <p>
              <a
                href=""
                className="text-[#050505] text-[12px] font-[400] underline"
              >
                Terms of Use
              </a>
            </p>

            <p>
              <a
                href=""
                className="text-[#050505] text-[12px] font-[400] underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="div flex py-2 justify-center items-center">
            <p className="text-[#fff] text-[10px] font-[200]">
              This site is protected by reCAPTCHA Enterprise. Deibemedia’s{" "}
              <span className="text-[#050505] font-[300]">Privacy Policy</span>{" "}
              and{" "}
              <span className="text-[#050505] font-[300]">
                Terms of Use apply
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
