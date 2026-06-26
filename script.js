function getWeather() {

    const city = document.getElementById("city").value;

    const weatherData = {
        Chennai: { temp: 34, humidity: 70, wind: 5 },
        Trichy: { temp: 36, humidity: 60, wind: 4 },
        Madurai: { temp: 35, humidity: 65, wind: 6 },
        Coimbatore: { temp: 31, humidity: 72, wind: 7 },
        Salem: { temp: 33, humidity: 68, wind: 5 },
        Erode: { temp: 34, humidity: 62, wind: 4 },
        Tirunelveli: { temp: 37, humidity: 58, wind: 6 },
        Thanjavur: { temp: 35, humidity: 67, wind: 5 },
        Vellore: { temp: 32, humidity: 70, wind: 4 },
        Kanyakumari: { temp: 30, humidity: 80, wind: 8 }
    };

    const data = weatherData[city];

    if (data) {
        document.getElementById("result").innerHTML = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${data.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind} km/h</p>
        `;
    } else {
        document.getElementById("result").innerHTML = `
            <p style="color:red;">City not found!</p>
            <p>Try: Chennai, Trichy, Madurai, Coimbatore, Salem</p>
        `;
    }
}
