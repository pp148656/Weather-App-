//built in api request by city name
let weather = {
    "apiKey" : "29b670b9c219518550392649b18f785f", 
    //calling(fetch) the API and then add promises
    fetchWeather : function(city){
        fetch( 
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=29b670b9c219518550392649b18f785f"
        ).then(Response => Response.json())
        .then((data) => this.displayWeather(data)); 
    } ,
    // this keyword is used for lets say which object is calling the method we'll use that objects property
    displayWeather: function(data){
        // having these parameters from the json file
         const{name} = data;
         // extracting the icon and description from the info from the weather
         // since weather is array of objects not an object itself
         const{ icon, description} = data.weather[0];
         const{ temp, humidity} = data.main;
         const{ speed } = data.wind;
         document.querySelector(".city").innerText = "Weather in " + name;  
         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";  
         document.querySelector(".description").innerText = description;
         document.querySelector(".temp").innerText = temp + " °C";
         document.querySelector(".Humidity").innerText = "Humidity: "+ humidity + " %";
         document.querySelector(".Wind").innerText = "Windspeed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".card").classList.remove("bigcard");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/random/1920x1080/?"+ name +"')";
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
   
}
// accesing element by class and then its element
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
}) ;
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});