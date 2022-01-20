import './Orgs.css';

import Feed from "instagram-feed-embed";

export default function Orgs() {
  return (
    <div className='subsection' id='orgs'>
      <h2>Organizations</h2>
      
      <div id='orgDisplay'>
        <a className='logoLink' href='https://epicsdkc.wixsite.com/epicsdkc'
          target='_blank' rel='noopener noreferrer'>
          <img id='epicsLogo' className='logo'
            src='https://engineering.purdue.edu/EPICS/images/epics_logo.png'
            alt='Engineering Projects in Community Service Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            EPICS is an international organization run by teams of students. 
            Teams undergo the complete engineering design process to develop,
            implement, and maintain a project for real project partners. I
            have been a member of the Deaf Kids Code team for just under two
            years. As the Project Manager, I am responsible for three
            teams--Deaf Kids Outreach, Keep the Tempo, and Live Captioning
            Environment. I am also a full-stack developer on Deaf Kids
            Outreach.
          </p>

          <p>
            As the Project Manager, I serve as a central point for planning
            and communications. I monitor the developmental states of all
            three projects, predict and clear hurdles, and send out biweekly
            announcements and reminders. I also lead weekly standups and
            reflection discussions and onboard new members.
          </p>

          <p>
            As a full-stack developer, I primarily work with React.js,
            Node.js, and MongoDB to develop a website. My subteam, Deaf Kids
            Outreach, is partnered with the National Technical Institute for
            the Deaf and Deaf Kids Code to launch an online video platform.
            The website will allow deaf instructors to create and upload
            videos and NTID to approve or deny those videos with the end goal
            of enabling American Sign Language as an official language on
            Khan Academy.
          </p>
        </div>

        <a className='logoLink' href='https://www.purdue-ecess.org/'
          target='_blank' rel='noopener noreferrer'>
          <img className='logo'
            src='https://i.imgur.com/dz9zxzU.jpg'
            alt='Purdue Electrical Computer Engineering Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            In Fall 2021, I joined Purdue's Electrical Computer Engineering
            Student Society as the Multicultural Affairs Chair. Prior to Fall
            2021, the committee had yet to run an event since Spring 2017 and
            kept no documentation. Through networking and collaboration,
            planning, and establishing clear communications and guidelines,
            I rejeuvinated the committee from zero members to eight active
            students.
          </p>

          <p>
            In its inagural semester, the committee planned 4 events--a career fair
            prep night focused on international students, a ping pong social for
            undergrads, grads, and staff, a Dia Des Los Muertos celebration featuring
            sugar cookie decorating and Cocoa, and a Hunnakah celebration with the
            Dreidel Game and sufganiyot. Spring 2022, the multicultural committee
            is more than doubling the number of events. We will continue
            collaborations with other student organizations to gain better awareness
            and amplify the voices of those with unique backgrounds.
          </p>

          <p>
            As the committee head, I am primarily responsible for task delegation and
            the overseeing of progress. However, I also submit Activity Planning Forms
            to our Student Assosiation Organization, create and submit budgets, design
            flyers for our events, and tie up any loose ends. Examples of my graphics
            work can be seen below.
          </p>
        </div>

        <h4>ECESS Graphics</h4>
        <div className='graphicsExamples'>
          <img
            className='mediaPost'
            src='https://i.imgur.com/mOpoY5q.jpg'
            alt='ECESS Game Night - Japan Graphic'
          />
          <img
            className='mediaPost'
            src='https://i.imgur.com/FJQ2WR2.jpg'
            alt='ECESS Ping Pong Social Graphic'
          />
        </div>

        <a className='logoLink' href='https://purduemind.com/'
          target='_blank' rel='noopener noreferrer'>
          <img className='logo'
            src='https://i.imgur.com/IwPTyB9.jpg'
            alt='Purdue Medical Innovation, Networking, and Design Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            Purdue Medical Innovation, Networking, and Design pushes the
            forefront of technology, medicine, and design. Every year,
            the club undergoes the full-cycle engineering design process
            to produce three or four medical devices. I joined MIND as a
            first-year student in Fall 2020. Since, I have taken up several 
            leadership roles including Director of Networking and Events,
            Webmaster, and Project Manager. Currently, I am leading a team
            of ten in developing a smart exercise tracker using Tensorflow. 
          </p>

          <p>
            As the Director of Networking and Events, I hold professional
            development workshops, coordinate volunteering events, and run
            the social medias. During my first semester in the position, I
            increased media engagement by over 500% and increased the number
            of followers by over 300%.
          </p>
        </div>
        <h4>Instagram Feed</h4>
        <div id='instaFeed'><Feed
          userName='purdue.mind'
          limit={20}
        /></div>

        <a className='logoLink' href='https://engineering.purdue.edu/Engr'
          target='_blank' rel='noopener noreferrer'>
          <img className='logo'
            src='https://www.purdue.edu/futureengineers/images/Purdue_Engineering_Logo.png'
            alt='Purdue College of Engineering Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            In high school, I mentored K-5 in computer science and STEM. 
            My first year of college, I served as a volunteer tutor for
            five peers in my First-Year Engineering courses, teaching
            basic and intermediate programming concepts in Python, MATLAB,
            and C. I became the go-to for many to ask programming
            questions to, and one day, the professor inquired if I would
            like to become a teaching assistant for the class.
          </p>

          <p>
            In Fall 2021, I was one of three teaching assistants who
            roamed during labs and graded homeworks and quizzes for the
            first First-Year Engineering course. Our section had over
            110 students. At the end of the semester, I received
            excellent feedback from my GTA and Professor. The comments
            I left for students when grading were clear and succint,
            which led to one of the lowest regrade request rates.
          </p>

          <p>
            Spring 2022 is my second semester as a teaching assistant
            for the First-Year Engineering courses. I am one of four
            teaching assistants for my section of the second
            First-Year Engineering course, which focuses on MATLAB.
          </p>
        </div>
      </div>
    </div>
  );
}
