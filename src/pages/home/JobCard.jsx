import React from 'react';
import { ImLocation } from 'react-icons/im';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const { _id,title,location,category,description,jobType,applicationDeadline,salaryRange,company,company_logo,responsibilities,status,requirements} = job;
    return (
        <div>
          <div className="card card-compact bg-base-100 shadow-xl">
  <div className='flex items-center gap-2'>
  <figure>
    <img
      className='w-16'
      src={company_logo} />
  </figure>
  <div>
  <h2 className='text-2xl'>{company}</h2>
  <p className='flex items-center gap-1'><ImLocation />{location}</p>
  </div>
  </div>
  <div className="card-body">
    <div className='flex items-center gap-2'>
    <h2 className="card-title">{title}</h2>
    <div className="badge badge-secondary">NEW</div>
    </div>
    <p>{description}</p>
    <div className='flex flex-wrap gap-2'>
        {
            requirements.map((requirement,i) => <p key={i} className='border-2 rounded-3xl text-center '>
                {requirement}
            </p>)
        }
    </div>
    <div className="card-actions items-center justify-end">
        <div>
            <p>Salary: ${salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        </div>
      <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  </div>
</div>  
        </div>
    );
};

export default JobCard;