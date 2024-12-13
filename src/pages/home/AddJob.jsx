
import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();
    const {user} = UseAuth();
    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData)
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData)
        const {min,max,currency, ...newJob} = initialData;
        console.log(min,max,currency,newJob)
        newJob.salaryRange = {min,max,currency};
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        // console.log(newJob)

        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newJob)
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
                  navigate('/myPostedJobs')
            }
        })
    }
    return (
        <div className=''>
            <div className="card bg-base-100 w-full shadow-2xl">
                <form onSubmit={handleAddJob} className="card-body">
                    {/* job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                    </div>
                    {/* job location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job location</span>
                        </label>
                        <input type="text" name='location' placeholder="job location" className="input input-bordered" required />
                    </div>
                    {/* applicationDeadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">applicationDeadline</span>
                        </label>
                        <input type="date" name='applicationDeadline' placeholder="applicationDeadline" className="input input-bordered" required />
                    </div>
                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered" required />
                    </div>
                    {/* company */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">company</span>
                        </label>
                        <input type="text" name='company' placeholder="company" className="input input-bordered" required />
                    </div>
                    {/* status */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">status</span>
                        </label>
                        <input type="text" name='status' placeholder="status" className="input input-bordered" required />
                    </div>
                    {/* company_logo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">company_logo</span>
                        </label>
                        <input type="text" name='company_logo' placeholder="company_logo" className="input input-bordered" required />
                    </div>
                    {/* job category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="category" className="input input-bordered" required />
                    </div>
                    {/* requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">requirements</span>
                        </label>
                        <input type="text" name='requirements' placeholder="requirements" className="input input-bordered" required />
                    </div>
                    {/* responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">responsibilities</span>
                        </label>
                        <input type="text" name='responsibilities' placeholder="responsibilities" className="input input-bordered" required />
                    </div>
                    {/* hr_name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">hr_name</span>
                        </label>
                        <input type="text" name='hr_name' placeholder="hr_name"
                        className="input input-bordered" required />
                    </div>
                    {/* hr_email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">hr_email</span>
                        </label>
                        <input type="email" name='hr_email'
                        defaultValue={user?.email}
                        placeholder="hr_email" className="input input-bordered" required />
                    </div>
                    {/* job type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option defaultValue='Pick a job type'>Pick a job type</option>
                            <option>full-time</option>
                            <option>intern</option>
                            <option>part-time</option>
                        </select>
                    </div>
                    {/* job field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option defaultValue='Pick a job Field'>Pick a job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>teaching</option>
                        </select>
                    </div>
                    {/* salary range */}
                        <h2>salary range</h2>
                    <div className='flex items-center gap-4'>
                    <div className="form-control">
                        
                        <input type="text" name='min' placeholder="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        
                        <input type="text" name='max' placeholder="max" className="input input-bordered" required />
                    </div>
                        <div className="form-control">
                    
                        <select name='currency' className="select select-ghost w-full max-w-xs">
                            <option defaultValue='currency'>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                    </div>
                    {/* submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;