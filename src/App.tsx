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
          <Intro fullName1="Jackson Colegrove" fullName2="Minh Ha" firstName1="Jackson" firstName2="Minh"/>
          <div className="page-container">
              <div className="Jackson-left">
                  <JacksonHobby/>
              </div>
              <div className="Minh-right">
                  <MinhHobby/>
              </div>
          </div>
          </>
          )
          }

          export default App
