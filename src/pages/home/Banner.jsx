import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../../assets/team1.jpeg';
import team2 from '../../assets/team2.jpeg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
    className='max-w-sm w-64 rounded-t-2xl rounded-br-2xl shadow-2xl border-l-4 border-b-4 border-blue-500'
    src={team1} 
    animate={{y: [50, 100, 50]}}
    transition={{duration: 10, repeat: Infinity}}
    />
    <motion.img
    className='max-w-sm w-64 rounded-t-2xl rounded-br-2xl shadow-2xl border-l-4 border-b-4 border-blue-500'
    src={team2} 
    animate={{x: [100, 150, 100]}}
    transition={{duration: 10, repeat: Infinity}}
    />
    </div>
    <div className='flex-1'>
      <motion.h1 
      animate={{x: 50}}
      transition={{duration: 2, delay: 1,ease: easeOut, repeat: Infinity}}
      className="text-5xl font-bold">Latest <motion.span animate={{color: ['#B126B6','#52B727','#B72727']}}
      transition={{duration: 1.5, repeat: Infinity}}
      >Jobs</motion.span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;