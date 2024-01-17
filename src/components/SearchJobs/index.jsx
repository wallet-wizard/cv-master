import React from 'react'

export default function SearchJobs(){
    const [jobs, setJobsData] = React.useState({})

    const url = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f54cacf2aamshb3c4549e2a92e7bp1610f0jsn615f77a64d68',
            'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
};

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }

    React.useEffect(function() {

        fetch(url, options)
            .then(res => res.json())
            .then(data => setJobsData(data.jobs))
    }, [])

    return(
        <>
            <h1>Let's put that new CV to use, search for your next role today!</h1>
            {/* <div>{JSON.stringify(jobs, null, 2)}</div> */}
        </>
    )
}

