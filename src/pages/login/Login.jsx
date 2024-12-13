import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animationLoginData from '../../assets/lottie-login.json';
import AuthContext from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginUser,loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const form = location.state || '/';
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(form)
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
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie className='w-full h-[600px]' animationData={animationLoginData }></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className='btn mb-4'>Login With Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;