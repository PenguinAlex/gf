import './styles.css'
import React, {useState} from "react";
import WeekMonthDay from "./date";

const DateSlider = ({currentDate, setCurrentDate}) =>{
	const week = [' ', 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
	const months = [ "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December" ];
	const getMonth = () =>{
		return  months[new Date(currentDate).getMonth()]
	}
	const getYear = () =>{

	}
	return(
		<div className="App-DateSlider">
			<div className="week">
				{
					week.map((el,i) =>
						<WeekMonthDay
							key ={i}
							index={i}
							WD ={el}
							currentDate = {currentDate}
							setCurrentDate = {setCurrentDate}
						/>
					)
				}
			</div>
			<div className="slider">
				<button
					className="dateButton"
					onClick={()=>{
						setCurrentDate(currentDate -  7 * 24 * 60 * 60 * 1000)
						console.log()
					}}

				>
					 &lt;
				</button>
					<a>
						{
							months[new Date(currentDate).getMonth()] +
							' ' +
							new Date(currentDate).getFullYear()
						}

					</a>
				<button
					className="dateButton"
					onClick={()=>{
						setCurrentDate(currentDate +  7 * 24 * 60 * 60 * 1000)
					}}
				>
					 &gt;
				</button>
			</div>
		</div>
	)

}

export default DateSlider;