import loginImg from "../../assets/others/authentication2.png";
import backgroundImage from "../../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useRef, useState } from "react";
import { shareFireContext } from "../../Hooks/AuthContext";

const Login = () => {
  const {googleSinging,singinEmail} = useContext(shareFireContext)
  const [disabled, setDisabled] = useState(true)

  const userRedirecturl = useLocation()
  const location = userRedirecturl.pathname.includes() || '/';
  const navigate = useNavigate()
  // form validation
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();


// form data
  const onSubmit = (data) => {
    singinEmail(data.email, data.password)
    navigate(location)
    console.log(data)

  };




const capformref = useRef(null)
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])




  const handleSubmitebutn = () =>{
    const user_captcha_value = capformref.current.value;
    
    if (validateCaptcha(user_captcha_value)==true) {
      setDisabled(false)
  }

  else {
    setDisabled(true)
  }
  }


  const loginHanlgeGoodle = () =>{
    googleSinging()
    navigate(location)
  }
 

  return (
    <div>
      <div
        className="hero bg-base-200 h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full h-[90vh] max-w-screen-xl mx-auto flex items-center shadow-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-[50%] flex justify-start items-center">
            <img src={loginImg} alt="" />
          </div>
          <div className="card md:w-[50%] flex-shrink-0">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true , reset:true })}
                  className="input input-bordered"
                  required
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/,
                      message:
                        "Invalid password format. It must include at least one lowercase letter, one uppercase letter, one digit, and one special character.and less then 6 digit need to write",
                    },
                    reset: true
                  })}
                  className="input input-bordered"
                />

                {errors.password && (
                  <p role="alert" className="text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                    <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type here captcha"
                  name="password"
                  className="input input-bordered"
                  ref={capformref}
                />
              </div>
              <button onClick={handleSubmitebutn} className="btn btn-active btn-neutral">Varify</button>
              <div className="form-control mt-6">
                <button disabled={disabled} onClick={() => reset()} className="btn btn-primary">Login</button>
              </div>
              <Link to='/singin'><p>Register Here</p></Link>
            </form>
            <div>
              <div className=" flex justify-center">
                <button onClick={loginHanlgeGoodle} className="border-2 border-black px-10 py-2 rounded-full">Google Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
