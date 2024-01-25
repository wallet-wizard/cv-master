import React, { useEffect, useState, Fragment } from "react";
import Card from "./Card.jsx";
import "./searchJobs.css";

export default function SearchJobs() {
  const [jobs, setJobsData] = useState([]);

  // Creates url for API request
  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
    import.meta.env.VITE_ADZUNA_ID
  }&app_key=${
    import.meta.env.VITE_ADZUNA_KEY
  }&results_per_page=20&what=front%20end%20developer&where=london&distance=50&max_days_old=30`;

  // Runs on component refresh
  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setJobsData(data.results);
      });
  }, []);

  //  Returns
  return (
    <div className="job-body">
      <div className="job-search-title">
        <h1 className="">
          Latest Dev Jobs in London, UK
        </h1>
      </div>
        <section className="job-card-container g-1">
          {jobs.map((job) => (
            <Card
              key={job.id}
              title={job.title}
              company={job.company.display_name}
              city={
                job.location.area.length > 2
                  ? `${job.location.area[2]}, `
                  : `${job.location.area[1]}, `
              }
              country={job.location.area[0]}
              salary={job.salary_max}
              url={job.redirect_url}
              created={job.created}
            />
          ))}
        </section>
    </div>
  );
}
