import './About.css';

export default function About() {
  return (
    <div className='subsection' id='about'>
      <div id='bio'>
        <img
          className='selfGraphic'
          id='selfGraphic'
          alt='Graphic of Claire Poukey'
          src='https://i.imgur.com/eDIYccL.jpg'
        />
        <div className='separator'/>
        <div className='statement' id='statement'>
          <h2>About</h2>
          <p>
            Hi! I'm Claire. When I'm not attending classes or extracurriculars, you can
            find me climbing at the Co-Rec, having game nights with friends, or trying
            out ambitious baking recipes. I also love volunteering through service
            projects and STEM mentorship!
          </p>
          
          <p>
            Last summer, I interned for Google's TensorFlow.js team. This summer, I plan
            on heading to Redmond, WA for a program management internship at Microsoft.
            My diverse background and thirst for learning help me to dream big, connect
            with others, and implement new ideas to create widespread impact.
          </p>

          <p>
            MyStrengths: Learner, Analytical, Restorative, Relator, Responsibility
          </p>
        </div>
      </div>
    </div>
  );
}
