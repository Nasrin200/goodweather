import React from "react";
import FormatedDate from "./FormatedDate";
import "./Weather.css";
export default function WeatherInfo (props){
    return (
        <div> 
             <h1>{props.data.city}</h1>
      <div>
      <img src= {props.data.icon} alt="hello" className="weatherIcon" width="70"/>
      <h2 className="mainDegree">{Math.round(props.data.temperature)}</h2><span className="unit">°C</span>
     

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
