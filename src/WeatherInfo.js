import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo (props){
    return (
        <div> 
             <h1>{props.data.city}</h1>
      <div>
      
      <h2 className="mainDegree">{Math.round(props.data.temperature)}</h2><span className="unit">°C</span>
     <img src= {props.data.icon} alt="hello" className="weatherIcon" />

      </div> 
         <div className="row">
              <div className="col-6">
                  <ul>
                      
                      <li>{props.data.weatherCondition}</li>
                      <li><FormatedDate date={props.data.date} /></li>
                  </ul>
              </div>
              <div className="col-6">
                  <ul>
                    
                      <li>Humidity: {props.data.humidity}%</li>
                      <li>Wind: {props.data.wind}km/h</li>
                  </ul>  
              </div>
          </div>
        </div>
    );
}
