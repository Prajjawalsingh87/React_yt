import JobCard from "./JobCard";
import { jobs } from "../data/jobs";

const JobList = () => {
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
