import './styles.css'
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";


 function App() {
     function getWeek(date){
         return(Math.round( date / 1000/ 60/ 60/ 24 /7))
     }
     const[backData, setBackData] = useState([{}]);
     const [currentDate, setCurrentDate] = useState(Date.now());
     const [active, setActive] = useState([0,0, 0, null])
     useEffect(()=>{
         if (currentDate!==undefined)fetch('/api').then(
             response => response.json()
         ).then(
                data => {
                 setBackData(data)
             })
     },[])

  return (
      <div className="App">
        <Header
            currentDate = {currentDate}
            setCurrentDate = {setCurrentDate}
            setBackData = {setBackData}
            backData={backData}

        />
        <Calendar
            currentDate = {currentDate}
            setCurrentDate = {setCurrentDate}
            backData = {backData}
            active = {active}
            setActive = {setActive}
        />
          <Footer
              active = {active}
              setActive = {setActive}
              setBackData = {setBackData}
              backData = {backData}
              setCurrentDate = {setCurrentDate}

          />
      </div>
  );
}

export default App;