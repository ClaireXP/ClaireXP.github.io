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
            <li>Bachelor of Art in Communication of Science & Technology '24</li>
            <li>Minor in Communication of Information Technology</li>
          </ul>
        </div>
      </div>

      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Internship Experience</h3>
          <div className='resumeDiv' />

          <p className='resumeJob'>Microsoft (May 2022-August 2023)</p>
          <p>Product Manager Intern, Azure Device Update (May 2023-August 2023)</p>
          <ul>
            <li>Analyzed hundreds of customer experiences and pain points to determine project scope</li>
            <li>Designed user-facing tool to simplify product experience for customers and reduce churning</li>
            <li>Organized company-sponsored group with tri-weekly D&D games for over 30 active interns</li>
          </ul>

          <p>Program Manager Intern, Azure Device Update (May 2022-August 2022)</p>
          <ul>
            <li>Engaged with 4 primary internal and external customers to understand needs and empathize</li>
            <li>Refined scope and defined product scenarios and functional and non-functional specifications</li>
            <li>Oversaw dev design and prototyping and reported progress to mentor and manager</li>
            <li>Presented sequence diagrams and high-fidelity E2E Figma’s to over 40 FTEs, including CVP</li>
          </ul>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Google (May 2021-August 2021)</p>
          <p className='jobTitle'>STEP Intern, TensorFlow.js</p>
          <ul>
            <li>Automated performance benchmarking of 6 machine learning models across seventeen devices and browsers and 2 back-ends, deployed by the TFJS team and by external collaborators daily</li>
            <li>Refactored manual benchmarking system using JavaScript, Jasmine, Karma, JSON, and Yarn</li>
            <li>Implemented advanced algorithms to asynchronously return and retry benchmarks up to 3 times</li>
            <li>Initiated system of Google Cloud Platform triggers, reactions, and scripts to initialize database authentication and persistently store over 2k benchmark results to Firestore nightly</li>
            <li>Launched visualization dashboard to track performance regression of benchmarks over time</li>
          </ul>
        </div>
      </div>

      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Volunteer Experience in Technology</h3>
          <div className='resumeDiv' />

          <p className='resumeJob'>EPICS (August 2020-Present)</p>
          <h5>Partnered with the National Technical Institute for the Deaf to launch an online video platform to enable American Sign Language as an official language offered by Khan Academy</h5>

          <p className='jobTitle'>Design Lead (August 2022-Present)</p>
          <ul>
            <li>Onboarded 5 to 7 new members to team and to full-stack development each semester</li>
            <li>Determined and delegated meaningful tasks for 3 front-end and 5 back-end developers</li>
            <li>Monitored individual and team progress for teams of 6 to 8, addressed and predicted blockers</li>
            <li>Collaborated with customer’s contracted developers over 2 weeks to hand off and launch website</li>
            <li>Nominated for and received one of four EPICS Leadership awards given across over 80 projects</li>
          </ul>

          <p className='jobTitle'>Project Manager, Full-Stack Developer (August 2020-May 2022)</p>
          <ul>
            <li>Orchestrated weekly debrief and planning sessions for three projects, guided iterative waterfall development process, and facilitated regular communication with project partners</li>
            <li>Engineered scalable system to fetch and display over 8k Khan Academy YouTube videos by topic and subject using React.js, Google Cloud Platform, Node.js, YouTube API, and MongoDB</li>
          </ul>
        </div>
      </div>
      
      <div className='resumeSection'>
        <div className='resumeContents'>
          <h3 className='resumeTitle'>Leadership Experience</h3>
          <div className='resumeDiv' />

          <p className='resumeJob'>Electrical Computer Engineering Student Society (August 2021-May 2023)</p>
          <p className='jobTitle'>Treasurer (May 2022-May 2023)</p>
          <ul>
            <li>Compiled budget of previous year’s expenditures and generated estimate using Google Sheets</li>
            <li>Recorded over 20 organization expenditures and processed reimbursements</li>
          </ul>

          <p className='jobTitle'>Multicultural Affairs Chair (August 2021-May 2022)</p>
          <ul>
            <li>Planned social and professional events to empower students of all backgrounds and identities</li>
            <li>Promoted ECE opportunities to over 3k current ECE undergraduates, graduates, and faculty</li>
          </ul>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Purdue University, College of Engineering (August 2021-Present)</p>
          <p className='jobTitle'>TA, ENGR 131/132 (Transforming Ideas to Innovation I/II)</p>
          <ul>
            <li>Supported over 110 students per semester during biweekly labs with class content such as MATLAB, Excel, Agile, and teamwork, repeatedly earned top marks on performance feedback</li>
            <li>Provided biweekly feedback to professor and GTA on growth of over 40 students in section</li>
          </ul>

          <div className='resumeSpacer' />

          <p className='resumeJob'>Purdue Medical Innovation, Networking, and Design (August 2020-Present)</p>
          <p className='jobTitle'>President (May 2022-May 2023)</p>
          <ul>
            <li>Managed biomedical device organization with over 40 active, due-paying members</li>
            <li>Empowered executive board through an environment built on communication, trust, and respect</li>
            <li>Restructured project leadership teams to invite junior members to take initiative and ownership</li>
          </ul>

          <p className='jobTitle'>Director of Networking and Events, Webmaster (May 2021-May 2022)</p>
          <ul>
            <li>Drove weekly summer ideation efforts with a team of 10</li>
            <li>Led website construction and rebranded social media, increasing followers by 80%</li>
            <li>Increased weekly attendance by 30% through workshops and social events</li>
          </ul>
        </div>
      </div>

      <a id='resumeLink' href='https://drive.google.com/file/d/18TW65hJ955NbP7IelYwRhRlQRvET6gqR/view' target='_blank' rel='noopener noreferrer'>Click here for PDF version</a>
    </div>
  );
}
