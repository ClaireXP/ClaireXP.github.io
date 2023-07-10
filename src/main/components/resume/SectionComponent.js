export default function ResumeComponent() {
  return (
    <div className='resumeSection'>
      <div className='resumeContents'>
        <h3 className='resumeTitle'>Volunteer Experience in Technology</h3>
        <div className='resumeDiv' />

        <p className='resumeJob'>EPICS (August 2020-Present)</p>
        <p className='jobTitle'>Project Manager, Full-Stack Developer</p>
        <ul>
          <li>
            Partnered with the National Technical Institute for the Deaf to launch an online video platform to
            enable American Sign Language as an official language offered by Khan Academy
          </li>
          <li>
            Engineered scalable system to fetch and display over 8k Khan Academy YouTube videos by topic
            and subject using React.js, Node.js, YouTube API, MongoDB, Express.js, and Axios
          </li>
          <li>
            Orchestrated weekly debrief and planning sessions for three projects, actively guided iterative
            waterfall development process, and facilitated regular communication with project partners
          </li>
        </ul>
      </div>
    </div>
  )
}
