import React, { useState, useEffect } from "react";

import "./Weather.css";
import axios from 'axios';
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props){
    let [loaded,setloaded]= useState(false);
    let [forecast,setForecast]=useState(null);

   useEffect(function(){
setloaded(false)
   }, [props.coordinate])



    function handleResponse(response) {
     setForecast(response.data.daily);
     setloaded(true);
    }
    if (loaded){
        return (
            <div className="WeatherForecast">
                <div className= "row">
                    <div className="col">
            <WeatherForecastDay data={forecast[0]} />;
            </div>
            <div className="col">
            <WeatherForecastDay data={forecast[1]} />;
            </div>
            <div className="col">
            <WeatherForecastDay data={forecast[2]} />;
            </div>
            <div className="col">
            <WeatherForecastDay data={forecast[3]} />;
            </div>
            <div className="col">
            <WeatherForecastDay data={forecast[4]} />;
            </div>
            </div>
            </div>
        );
}else{
    console.log(props);
    let apiKey= "f3c571bd6250dd248124676218b0d8bd";
    let longitude = props.coordinate.coordinates.lon;
    let latitude =  props.coordinate.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);
    return "loading forecast...";  
}
 
};
 