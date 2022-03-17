import './Resume.css';

export default function Resume() {
  return (
    <div className='subsection' id='resume'>
      <h2>Resume</h2>

      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Education</h3>
          <div className='resumeDiv' />
          <p className='resumeJob'>Purdue University | Presidential Scholar</p>
          <ul>
            <li>Bachelor of Science in Computer Engineering '23</li>
            <li>Minor in Communications</li>
          </ul>
        </div>
      </div>

      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Internship Experience</h3>
          <div className='resumeDiv' />

          <p className='resumeJob'>Microsoft (May 2022-August 2022)</p>
          <p>Incoming Program Manager Intern</p>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Google (May 2021-August 2021)</p>
          <p className='jobTitle'>STEP Intern, TensorFlow.js Team</p>
          <ul>
            <li>
              Automated performance benchmarking of six machine learning models across seventeen devices
              and browsers and two back-ends, deployed by the TFJS team and by external collaborators daily
            </li>
            <li>
              Refactored manual benchmarking system using JavaScript, Jasmine, Karma, JSON, and Yarn
            </li>
            <li>
              Implemented advanced algorithms to asynchronously return and retry benchmarks
            </li>
            <li>
              Initiated system of Google Cloud Platform triggers, reactions, and scripts to initialize database
              authentication and persistently store over 2k benchmark results to Firestore nightly
            </li>
            <li>
              Launched visualization dashboard to track performance regression of benchmarks over time
            </li>
          </ul>
        </div>
      </div>

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
      
      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Leadership Experience</h3>
          <div className='resumeDiv' />

          <p className='resumeJob'>Electrical Computer Engineering Student Society (August 2021-Present)</p>
          <p className='jobTitle'>Multicultural Affairs Chair</p>
          <ul>
            <li>
              Planned sixteen social and professional events to empower historically marginalized students
            </li>
            <li>
              Revitalized committee through inter-organizational collaboration, increased event frequency, and
              social media campaigns across one semester, surging yearly event attendance by 100%
            </li>
            <li>
              Promoted ECE opportunities to over 3k current ECE undergraduates, graduates, and faculty
            </li>
          </ul>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Purdue University, College of Engineering (August 2021-Present)</p>
          <p className='jobTitle'>TA, ENGR 131/132 (Transforming Ideas to Innovation I/II)</p>
          <ul>
            <li>
              Supported students during biweekly labs and weekly office hours with MATLAB, Excel, and Agile
            </li>
            <li>
              Provided weekly feedback to professor and GTA on growth of 40 assigned students
            </li>
          </ul>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Purdue Medical Innovation, Networking, and Design (August 2020-Present)</p>
          <p className='jobTitle'>Director of Networking and Events, Webmaster</p>
          <ul>
            <li>
              Designed a device to quickly diagnose dehydration, created prototype through Fusion 360
            </li>
            <li>
              Received semi-finalist design award in the Rice 360 Global Health Technology Challenge
            </li>
            <li>
              Led React.js website construction and rebranded social media, increasing followers by 400%
            </li>
          </ul>
        </div>
      </div>

      <a id='resumeLink' href='https://drive.google.com/file/d/18TW65hJ955NbP7IelYwRhRlQRvET6gqR/view' target='_blank' rel='noopener noreferrer'>Click here for PDF version</a>
    </div>
  );
}
