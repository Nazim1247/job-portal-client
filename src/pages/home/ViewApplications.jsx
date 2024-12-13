import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const jobs = useLoaderData();
    return (
        <div>
            ViewApplications: {jobs.length}
        </div>
    );
};

export default ViewApplications;