import './styles.css'
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";


 function App() {
     const[backData, setBackData] = useState([{}]);
     const [currentDate, setCurrentDate] = useState(Date.now());
     const [active, setActive] = useState([0,0])
     useEffect(()=>{
         fetch('/api').then(
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
            active = {active}
            setActive = {setActive}
        />
        <Calendar
            currentDate = {currentDate}
            setCurrentDate = {setCurrentDate}
            backData = {backData}
        />
          <Footer/>
      </div>
  );
}

export default App;