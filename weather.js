const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");
const resultOut = document.getElementById("result");

btnWeather.onClick = function () {
  const city = txtCity.value;
  const url = ``;

  // fetch the url API using the fetch function
  fetch(url).then((response) => {
    // set the API response to json object
    response.json().then((json) => {
      //set the data to json object
      let data = json;
      let output = formatResponse(data);
      // using innerHTML to display the output
      resultOut.innerHTML = output;
    });
  });
};

function kelvinFahrenheit() {
  const fTemp = kTemp * (9 / 5) - 459.67;
  return kTemp;
}

