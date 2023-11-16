
import loginImg from '../../assets/others/authentication2.png'
import backgroundImage from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { shareFireContext } from '../../Hooks/AuthContext';

const SingIn = () => {
  const {createuser} = useContext(shareFireContext)

  const redirectLoaction = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    createuser(data.email,data.password)
    .then(resutl =>{
      if (resutl) {
        redirectLoaction('/')
        console.log(resutl);
      }
    })
    .catch(error =>{
      console.log(error);
    })
     
  }

  return (
    <div>
      <div className="hero  bg-base-200 h-screen" style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover'}}>

        <div className="w-full h-[90vh] max-w-screen-xl mx-auto flex items-center shadow-2xl flex-row-reverse " style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover'}}>
          <div className=" md:w-[50%] flex justify-start items-center">
            <img src={loginImg} alt="" />
          </div>
          <div className="card md:w-[50%] ">
          <h1 className="text-5xl font-bold text-center ">SingIn</h1>
            <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  {...register("Name", { required: true })}
                />

                {errors.Name  && (
                        <p role="alert" className='text-red-600'>First name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                  {errors.email  && (
                        <p role="alert" className='text-red-600'>email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true ,pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/,
                    message:
                      "Invalid password format. It must include at least one lowercase letter, one uppercase letter, one digit, and one special character.and less then 6 digit need to write",
                  },})}
                />
                {errors.password && (
                  <p role="alert" className="text-red-500">
                    {errors.password.message}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                  <Link to='/login'>Login here</Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
