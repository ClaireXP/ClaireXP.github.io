import './Orgs.css';

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
            EPICS is an international organization run by teams of students. Teams undergo the complete engineering design process to develop, implement, and maintain a project for real project partners. I have been a member of the Deaf Kids Code team for just under three years. As the Design Lead for Deaf Kids Outreach, I onboard new members every semester--often from zero webdev experience to soloing medium-cost features--and complete large amounts of featurework myself.
          </p>

          <p>
            In Spring 2021, I became the Project Manager, responsible for three teams--Deaf Kids Outreach, Keep the Tempo, and Live Captioning Environment. I served as a central point for planning and communications. I monitored the developmental states of all three projects, predict and clear hurdles, and send out biweekly announcements and reminders. I also led weekly stand ups and reflection discussions and onboard new members to the greater team.
          </p>

          <p>
            As a full-stack developer, I primarily work with React.js, Node.js, and MongoDB to develop a website. My subteam, Deaf Kids Outreach, is partnered with the National Technical Institute for the Deaf and Deaf Kids Code to launch an online video platform. The website will allow deaf instructors to create and upload videos and allow NTID to approve or deny those videos with the end goal of enabling American Sign Language as an official language on Khan Academy.
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
            If you've been reading the website closely, you may be confused as to why a Communication major was in the Electrical Computer Engineering Student Society. Well, like many others, I transferred out of Computer Engineering after realizing that I didn't enjoy it and despite loving coding, it wasn't what I wanted to do.
          </p>

          <p>
            In Fall 2021, I joined Purdue's Electrical Computer Engineering Student Society as the Multicultural Affairs Chair. Prior to Fall 2021, the committee had yet to run an event since Spring 2017 and kept no documentation. Through networking and collaboration, planning, and establishing clear communications and guidelines, I rejuvenated the committee from zero members to nine active students.
          </p>

          <p>
            In its inaugural semester, the committee planned 4 events--a career fair prep night focused on international students, a ping pong social for undergrads, grads, and staff, a Dia Des Los Muertos celebration featuring sugar cookie decorating and Cocoa, and a Hunnakah celebration with the Dreidel Game and sufganiyot. In Spring 2022, the multicultural committee more than doubled the number of events. We also continued our collaborations with other student organizations to gain better awareness and amplify the voices of those with unique backgrounds.
          </p>

          <p>
            As the committee head, I was primarily responsible for task delegation and the overseeing of progress. However, I also submitted Activity Planning Forms to our Student Association Organization, create and submit budgets, design flyers for our events, and tie up any loose ends. Examples of my graphics work can be seen below.
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

        <div>
          <p>
            In May 2022, I was elected to become the Treasurer of ECESS. I handled the club's budget of ~$8k--reviewing and approving purchases, submitting reimbursement requests, and helping with other various Executive duties.
          </p>
        </div>

        <a className='logoLink' href='https://purduemind.com/'
          target='_blank' rel='noopener noreferrer'>
          <img className='logo'
            src='https://i.imgur.com/IwPTyB9.jpg'
            alt='Purdue Medical Innovation, Networking, and Design Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            Purdue Medical Innovation, Networking, and Design pushes the forefront of technology, medicine, and design. Every year, the club undergoes the full-cycle engineering design process to produce three or four medical devices. I joined MIND as a first-year student in Fall 2020. Since, I have taken up several leadership roles including President, Director of Networking and Events, Webmaster, and Project Manager. 
          </p>

          <p>
            As the Director of Networking and Events, I held professional development workshops, coordinate volunteering events, and managed our social media. During my first semester in the position, I increased media engagement by over 500% and increased the number of followers by over 300%.
          </p>
        </div>

        <a className='logoLink' href='https://engineering.purdue.edu/Engr'
          target='_blank' rel='noopener noreferrer'>
          <img className='logo'
            src='https://engineering.purdue.edu/Wraps/ECO/wrap7/images/logo.png'
            alt='Purdue College of Engineering Logo'
        /></a>
        <div className='orgDesc'>
          <p>
            In high school, I mentored K-5 in computer science and STEM. My first year of college, I served as a volunteer tutor for five peers in my First-Year Engineering courses, teaching basic and intermediate programming concepts in Python, MATLAB, and C. I became the go-to for many to ask programming questions to, and one day, the professor inquired if I would like to become a teaching assistant for the class.
          </p>

          <p>
            In Fall 2021, I was one of three teaching assistants who roamed during labs and graded homeworks and quizzes for the first of two First-Year Engineering courses. Our section had over 110 students. At the end of the semester, I received excellent feedback from my GTA and Professor. The comments I left for students when grading were clear and succinct, which led to one of the lowest regrade request rates.
          </p>

          <p>
            I continued as a teaching assistant for the First-Year Engineering courses through Spring 2022, when I transferred out of the College of Engineering. I assisted student with MATLAB, the Engineering Design Process, and Excel among other topics. My favorite part of TAing was when a student or a group of students would wait until I was making eye contact to raise their hand, because they knew I would be able to help them understand the materials.
          </p>
        </div>
      </div>
    </div>
  );
}
