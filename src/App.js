import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  let [loading, setLoading] = useState(true)
  let [jobs, setJobs] = useState([])
  let [value, setValue] = useState(0)

  let fetchJobs = async () => {
    let response = await fetch(url)
    let newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  let { company, dates, duties, title } = jobs[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience </h2>
        <div className='underline'></div>
      </div>
    </section>
  )
}

export default App
