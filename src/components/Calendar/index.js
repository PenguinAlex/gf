import React from "react";
import DateSlider from "../DateSlider";
import Events from "../EventsTable";

const Calendar = ({currentDate, setCurrentDate, backData}) => {
	return(
		<div className="App-Calendar">
			<div className="mainContent">
				<DateSlider currentDate = {currentDate}
							setCurrentDate = {setCurrentDate}
				/>
				<Events currentDate = {currentDate}
						     setCurrentDate = {setCurrentDate}
							 backData = {backData}
				/>
			</div>
		</div>
	)
}

export default Calendar;