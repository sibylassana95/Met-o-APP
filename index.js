  <script>
      let result = document.getElementById("result");
      let searchbtn = document.getElementById("search-btn");
      let cityRef = document.getElementById("city");
      let key = "4181eed8c54493ee89dc4f3443aae9b4";

      let getWeather = () => {
        let cityValue = cityRef.value;
        //If the input field is empty
        if (cityValue.length == 0) {
          result.innerHTML = `<h3 class="msg">Please Enter A City Name</h3>`;
        }
        //If the input field is NOT empty
        else {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
          //Clear the input field
          cityRef.value = "";
          fetch(url)
            .then((resp) => resp.json())
            //If city name is valid
            .then((data) => {
              result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h3>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp_max}  &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min} &#176; </h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max} &#176;</h4>
                </div>
            </div>
            `;
            })
            //If city name is NOT valid
            .catch(() => {
              result.innerHTML = `<h3 class="msg">City Not Found</h3>`;
            });
        }
      };
      searchbtn.addEventListener("click", getWeather);
      window.addEventListener("load", getWeather);
    </script>
