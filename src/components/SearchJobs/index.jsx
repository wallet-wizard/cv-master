import React from 'react'

export default function SearchJobs(){
    const [jobs, setJobsData] = React.useState({})

    const url = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
};

    // const url = 'https://jsearch.p.rapidapi.com/search?query=web%20development%20in%20uk&page=1&num_pages=1';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': apikey,
    //         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    // };


    React.useEffect(function() {

        fetch(url, options)
            .then(res => res.json())
            .then(data => setJobsData(data.jobs))
            
    }, [])

    console.log(jobsArray)

    // const jobCards = jobsArray.map(job => {
    //     return (
    //         <Card 
    //             key={job.id}
    //             title={job.title}
    //             employer={job.company}
    //             location={job.location}
    //             datePosted={job.datePosted}
    //         />
    //     )
    // })

    return(
        <>
            <h1>Let's put that new CV to use, search for your next role today!</h1>
            {/* <div>{JSON.stringify(jobs, null, 2)}</div> */}
            <section>
                {/* {jobCards} */}
            </section>

            

        </>
    )
}

