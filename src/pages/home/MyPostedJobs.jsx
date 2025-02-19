import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const {user} = UseAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            jobs length: {jobs.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Date Line</th>
        <th>Application Count</th>
        <th>Application</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map((job, i) => <tr key={job._id}>
            <th>{i+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td>
                <Link to={`/viewApplications/${job._id}`}>
                <button className='btn btn-link'>View Application</button>
                </Link>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;