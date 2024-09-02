import React, { FC, useState } from 'react';
import { WeatherForecastComponentWrapper, GetWeatherButn, TokenLabel} from './WeatherForecastComponent.styled.ts';
import axios from 'axios';



interface WeatherForecastComponentProps {}

const WeatherForecastComponent = () => {

   const [answer, setAnswer] = useState("");

   const [weather, setWeather] = useState();

   async function handleSubmit(event) {
      event.preventDefault();

      // setAnswer (localStorage.getItem("token")!);

      const token = localStorage.getItem("token")!;
      const response = await axios.get("https://localhost:7282/WeatherForecast", {headers: {
        Authorization: `Bearer ${token}`
        }});
      
      setWeather(response.data);
      console.log(weather);

      // try{
      //    axios.get("https://localhost:7282/WeatherForecast", loginPayload).then((response) => { 
      //       if (response.status != 200) {alert(response.status)}

      //    }).catch( (e) => alert(e) );
      // }
      // catch (e){
      //    alert(e);
      // }

      }

 return <WeatherForecastComponentWrapper>
    <TokenLabel >{(weather && weather[0]["temperatureC"])}  {(weather && weather[0]["temperatureF"])}  {(weather && weather[0]["summary"])}</TokenLabel>
    <GetWeatherButn onClick={handleSubmit}>Get weather response</GetWeatherButn>
 </WeatherForecastComponentWrapper>
};

export default WeatherForecastComponent;
