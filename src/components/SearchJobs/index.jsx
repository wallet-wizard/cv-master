import React, { useEffect, useState, Fragment } from "react";
import Card from "./Card.jsx";

export default function SearchJobs() {
  const [jobs, setJobsData] = useState([]);

  const url = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
    import.meta.env.VITE_ADZUNA_ID
  }&app_key=${
    import.meta.env.VITE_ADZUNA_KEY
  }&results_per_page=20&what=javascript%20developer&content-type=application/json`;

  // const url =
  //   "https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": apikey,
  //     "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
  //   },
  // };

  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setJobsData(data.results);
      });
  }, []);

  // JSON.stringify(jobs, null, 2)

  return (
    <>
      <h1>Let's put that new CV to use, search for your next role today!</h1>
      <section>
        {jobs.map((job) => (
          <Card
            key={job.id}
            title={job.title}
            company={job.company.display_name}
            city={job.location.area[2]}
            country={job.location.area[0]}
            datePosted={job.datePosted}
          />
        ))}
      </section>
    </>
  );
}
