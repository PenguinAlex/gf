import React, { useEffect, useState} from 'react';
import './styles.css'

const Header = ({setBackData, backData}) =>{
	return (
		<div className="App-header">
			<a className="header-text">Interview Calendar</a>
			<button
				className="header-button"
				onClick={() => {
					let data = backData;
					let date = prompt('Введите дату в формате YYYY-MM-DD HH:mm:ss ')
					if (date !== '') {
						data.push({date: date})
						setBackData(data)
						fetch('/api', {
							method: 'POST',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(backData)
						})

						window.location.reload()
					}
				}
				}
			>
				+
			</button>
		</div>
	)
}

export default Header;