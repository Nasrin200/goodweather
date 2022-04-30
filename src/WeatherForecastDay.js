import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
  function maxTemperature (){
  let temperature = Math.round(props.data.temp.max);
  return(
    `${temperature}°`
  )
  }
  function minTemperature (){
    let temperature = Math.round(props.data.temp.min);
    return(
      `${temperature}°`
    )
    } 
    function day(){
      let date= new Date(props.data.dt * 1000);
      let day= date.getDay();
      let days=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
      return days[day];
    } 
    
return (
  <div>
    <div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="weatherForecast-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={30} color={"purple"} />
            <div className="weatherForecast-temperature">
              <span className="weatherForecast-temperature-max">{maxTemperature()} </span>
              <span className="weatherForecast-temperature-min">{minTemperature()}</span>
                 </div> 
        </div>
    </div>
</div>
</div>
)
}