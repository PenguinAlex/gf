import React, {useState} from "react";
import './styles.css';
import WeekMonthDay from "../DateSlider/date";

const Events = ({currentDate, backData}) =>{
	const times = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
	const event = [1,2,3,4,5,6,7]
	const [active, setActive] = useState([0,0])
	function getWeek(date){
		return(Math.round( date / 1000/ 60/ 60/ 24 /7))

	}

	const EventButton = ({evented, t, e}) =>{

		return(
		<div className="event">
			<button
				className={`event-button ${evented}`}
				onClick={() =>{
					if(evented !== ''){
						setActive([t,e])
					}
				}}

			>
			</button>
		</div>
		)};

	const Line = ({t, marks}) =>{

		return (
			<div className="timeLine">
				<div className="Time">{t}:00</div>
				{event.map(e =>{
					let evented = marks.includes(e)?'evented':''
					if (active[0] === t && active[1] === e ) evented = 'active'
					return<EventButton
						key = {e}
						t = {t}
						e = {e}
						evented = {evented}
					/>
				})}
			</div>
		)};

	const ParseEvents = () => {
		let events = null
		if (backData!== undefined){

			events = times.map(t =>{
				let marks = []
				backData.forEach(data =>{
					const date = new Date(Date.parse(data.date))
					if(getWeek(date)===getWeek(currentDate) && date.getHours() === t){
						marks.push(date.getDay())
					}
				})
				console.log(marks)
				return<Line
					t = {t}
					key = {t}
					marks = {marks}
				/>
			})

			}
		return events
		}
	return (
		<ParseEvents />
	)
}


export default Events;