/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Main from "./routes";
import Logo from "./images/Hack-O-Lantern.png";

function App() {
   return (
      <div className="page-wrapper">
         <div className="logo-holder">
            <a href="/code/other/Hackathon_Project/guessing-game/src/pages">
               <img className="logo" src={Logo} />
            </a>
         </div>
         <Main />
      </div>
   );
}

export default App;
