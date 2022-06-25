import React from "react";
import './styles.css';


const WeekMonthDay = ({index, WD, currentDate, setCurrentDate}) =>{
	if ( index === 0) return <div className="octo"/>
	function isToday(today, day){
		let a = today.getMonth() === day.getMonth() &&
		today.getFullYear() === day.getFullYear() &&
		today.getDate() === day.getDate()
		return (
			a
		)
	}
	const today = new  Date(Date.now());
	const currentDay = new Date(currentDate).getDate();
	const weekDay = new Date(currentDate).getDay() ;
	const monthDayMS = weekDay !== 0 ? new Date().setDate(currentDay + index - weekDay) : new Date().setDate(currentDay + index - 7)
	const monthDay = new Date(monthDayMS).getDate()
	const style = () =>{
		if(isToday(today, new Date(monthDayMS))){
			return 'marked'
		} else  return ''
	}
	return <div
	 className="octo"
	>
		<div>
			{WD}
		</div>
		<div
		className={style()}>
			{monthDay.toString()}
		</div>
	</div>
}

export default WeekMonthDay;