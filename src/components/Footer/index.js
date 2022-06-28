import React, {StrictMode, useEffect, useState} from "react";
import './styles.css'

const Footer = ({setActive, setBackData, backData, active, setCurrentDate}) =>{
	function isToday(today, day){
		let a = today.getMonth() === day.getMonth() &&
			today.getFullYear() === day.getFullYear() &&
			today.getDate() === day.getDate() &&
			today.getHours() === day.getHours()
		return (
			a
		)
	}
	return (

		<div className="App-footer">
			<button
				className="footer-button"
				onClick={()=>{
					setCurrentDate(Date.now())
				}}
			>
				Today
			</button>
			<button className="footer-button"
			onClick={()=>{
				if (active[0] !== 0 ){
					setBackData(backData.splice(backData.indexOf(backData.find(o => isToday(new Date(o.date), new Date(active[2])))), 1))
					fetch('/api', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(backData)
					})
					window.location.reload()

					//'2022-06-24T14:00:00'

				}
				setActive([0,0,0])

			}}


			>
				x
			</button>
		</div>
	)
}

export default Footer;