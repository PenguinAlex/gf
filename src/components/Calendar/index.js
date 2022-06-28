import React from "react";
import DateSlider from "../DateSlider";
import Events from "../EventsTable";

const Calendar = ({currentDate, setCurrentDate, backData, active,setActive}) => {
	return(
		<div className="App-Calendar">
			<div className="mainContent">
				<DateSlider currentDate = {currentDate}
							setCurrentDate = {setCurrentDate}
				/>
				<Events currentDate = {currentDate}
						     setCurrentDate = {setCurrentDate}
							 backData = {backData}
						active = {active}
						setActive = {setActive}
				/>
			</div>
		</div>
	)
}

export default Calendar;