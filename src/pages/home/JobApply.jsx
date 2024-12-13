import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams();
    // console.log(id)
    const {user} = UseAuth();
    // console.log(user)

    const handleApply = (e)=>{
        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        // console.log(linkedIn,github,resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-application',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
    <div className="card bg-base-100 w-full shadow-2xl">
    <h1 className="text-2xl font-bold">Apply now!</h1>
      <form onSubmit={handleApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn url</span>
          </label>
          <input type="url" name='linkedIn' placeholder="LinkedIn url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github url</span>
          </label>
          <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume url</span>
          </label>
          <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
    );
};

export default JobApply;