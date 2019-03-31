import React from 'react'
const Weather = (props) => {
    return (
        <div className="list container">
            {props.country && props.city && <p>Location: {props.city},  {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.Description && <p>Conditions:  {props.Description}</p>}
            {props.error && <p>{props.error}</p>}


        </div>
    )
}
export default Weather;