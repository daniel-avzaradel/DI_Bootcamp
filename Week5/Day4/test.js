console.log('Starting...');

const func = () => {
    console.log('Working...');
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
    .then((response) => response.json())
    .then(response => console.log(`The hour of the sunrise in Tel Aviv is: ${response.results.sunrise}`))
    .catch((error => console.log(`ERROR ${error}`)));
    console.log("Work done...")
}

func() 