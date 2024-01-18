import React, { useEffect, useState, Fragment } from "react";
import Card from "./Card.jsx";

export default function SearchJobs() {
  const [jobs, setJobsData] = useState([]);

  const url =
    "https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
    },
  };

  useEffect(function () {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setJobsData(data.jobs));
  }, []);

  return (
    <>
      <h1>Let's put that new CV to use, search for your next role today!</h1>

      <section>
        {jobs.map((job) => (
          <Card
            key={job.id}
            title={job.title}
            employer={job.company}
            location={job.location}
            datePosted={job.datePosted}
          />
        ))}
      </section>
    </>
  );
}
