const input_box=document.getElementById("input-box");
const search_btn=document.getElementById("search-btn");
const temp=document.getElementById("temp");
const desc =document.getElementById("description");
const humidity=document.getElementById("humidity");
const wind =document.getElementById("wind-speed");
const weather_img=document.getElementById("weather-img");
const weather_body=document.getElementById("weather-body");
const location_error=document.getElementById("location-error");
// API of weather
async function check_weather(city){
    const my_api="c7cd603944e858b1a40b73fc7ac75145";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${my_api}`;
    const weather_report= await fetch(url);
    const data= await weather_report.json();
// Location Not Found Error
    if (data.cod==`404`){
        location_error.style.display="flex";
        weather_body.style.display="none";
        console.log("error");
        return;
    }
    
    weather_body.style.display="flex";
    temp.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    desc.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed}Km/h`;
    switch(data.weather[0].main){
        case 'Snow':
            weather_img.src="assests/snow.jpeg";
            break;
        case 'Light Rain':
            weather_img.src="assests/rain.jpeg";
            break;
        case 'Rain':
            weather_img.src="assests/rain.jpeg";
            break;
         case 'Heavy Rain':
            weather_img.src="assests/rain.jpeg"; 
            break;   
        case 'Mist':
            weather_img.src="assests/mist.jpeg";
            break;   
        case 'Clear':
            weather_img.src="assests/sunny.jpeg";  
            break;
        case 'Clouds':
            weather_img.src="assests/cloudy.jpeg";
    }
};
search_btn.addEventListener("click",()=>{
    check_weather(input_box.value);
});
