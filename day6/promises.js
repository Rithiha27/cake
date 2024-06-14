function weatherplace(place) {
  return new Promise((resolve, reject) => {
    const Data = {
      'New York': 'Sunny',
      'London': 'Rainy',
      'Tokyo': 'Cloudy',
      'Sydney': 'Sunny',
    };

    
    setTimeout(() => {
      Data[place] ? resolve(Data[place]) : reject(`No such place ${place}`);
    }, 500);
  });
}

function match(place, weather1) {
  weatherplace(place)
    .then(weather => {
      weather === weather1
        ? console.log(`The weather in ${place} is ${weather}.`)
        : console.error(`Error:The weather in ${place} is ${weather}, not ${expectedWeather}.`);
    })
    .catch(error => console.error(`Error: ${error}`));
}

match('New York', 'Sunny');
match('London', 'Sunny');
match('Paris', 'Sunny');