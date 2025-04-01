import './styles/App.css'
import Title from './title.tsx'
import Intro from './intro.tsx'
import JacksonHobby from "./hobby1.tsx";
import MinhHobby from "./hobby2.tsx";

// import Hobby1 from './hobby1.tsx'

function App() {

  return (
      <>
          <Title/>
          <div className="page-container">
              <div className="Jackson-left">
                  <Intro firstName="Jackson" lastName="Colegrove"/>
                  <JacksonHobby/>
              </div>
              <div className="Minh-right">
                  <Intro firstName="Minh" lastName="Ha"/>
                  <MinhHobby/>
              </div>
          </div>
          </>
          )
          }

          export default App
