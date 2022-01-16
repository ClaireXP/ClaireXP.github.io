import './Skills.css';

export default function Skills() {
  return (
    <div className='subsection' id='skills'>
      <h3>Skills</h3>
      
      <div id='skillContainer'>
        <div className='skillList'>
          <div className='skill'>
            <img className='skillLogo' alt='React Logo' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'/>
            <div className='skillDesc'>
              <h4>Web Dev</h4>
              <h5>React, HTML/CSS, Vue, Node</h5>
            </div>
          </div>

          <div className='skill'>
            <img className='skillLogo' alt='Jasmine Logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1200px-Logo_jasmine.svg.png'/>
            <div className='skillDesc'>
              <h4>Dev Tools</h4>
              <h5>Jasmine, Karma, Google Cloud Platform, Docker</h5>
            </div>
          </div>

          <div className='skill'>
            <img className='skillLogo' alt='Firebase Logo' src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg'/>
            <div className='skillDesc'>
              <h4>Databases</h4>
              <h5>Firebase, MongoDB</h5>
            </div>
          </div>

          <div className='skill'>
            <img className='skillLogo' alt='JavaScript Logo' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/>
            <div className='skillDesc'>
              <h4>JavaScript</h4>
              <h5>CommonJS, ES6, TypeScript</h5>
            </div>
          </div>

          <div className='skill'>
            <img className='skillLogo' alt='Python Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'/>
            <div className='skillDesc'>
              <h4>Python</h4>
              <h5>Numpy, Pandas, BeautifulSoup</h5>
            </div>
          </div>

          <div className='skill'>
            <img className='skillLogo' alt='Python Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png'/>
            <div className='skillDesc'>
              <h4>C</h4>
              <h5>Data Structures, Algorithms</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
