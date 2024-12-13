import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../../assets/lottie.json'
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const {createUser, loginWithGoogle} = useContext(AuthContext);

    const handleRegister = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        // password validation here

        createUser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
    const handleGoogleLogin = ()=>{
      loginWithGoogle()
      .then(result =>{
        console.log(result.user)
      })
      .catch(err =>{
        console.log(err)
      })
    }
    return (
        <div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie className='w-full h-[600px]' animationData={registerLottieData }></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name='password'
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className='btn w-full mb-4'>Login With Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;