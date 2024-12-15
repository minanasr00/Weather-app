const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d
let d1
let d2

(async function (d) {
try {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=85ad8df5c09d467fbc962212241012&q=auto:ip&days=3`)
    let data = await response.json()
    let currentDay = document.querySelector("#currentDay")
    d = new Date(`${data.current.last_updated}`)
    currentDay.innerText = days[d.getDay()]
    let dayNumber = document.querySelector("#dayNumber")
    dayNumber.innerText = `${d.getDate()}${months[d.getMonth()]}`
    d1 = new Date(`${data.forecast.forecastday[1].date}`)
    let nextDay1 = document.querySelector('#nextDay1')  
    nextDay1.innerText = days[d1.getDay()]
    d2 = new Date(`${data.forecast.forecastday[2].date}`)
    let nextDay2 = document.querySelector('#nextDay2')  
    nextDay2.innerText = days[d2.getDay()]
    let cityName = document.querySelector("#cityName")
    cityName.innerText = data.location.name
    let cityTemp = document.querySelector("#cityTemp")
    cityTemp.innerText = data.current.temp_c
    let tempIcon = document.querySelector("#tempIcon")
    tempIcon.setAttribute("src", `https:${data.current.condition.icon}`);
    let tempDes = document.querySelector("#tempDes")
    tempDes.innerText = data.current.condition.text
    let tempIcon1 = document.querySelector("#tempIcon1")
    tempIcon1.setAttribute("src", `https:${data.forecast.forecastday[0].day.condition.icon}`)
    let cityTemp1 = document.querySelector('#cityTemp1')
    cityTemp1.innerText = data.forecast.forecastday[1].day.maxtemp_c
    let tempDes1 = document.querySelector('#tempDes1')
    tempDes1.innerText = data.forecast.forecastday[1].day.condition.text
    let tempIcon2 = document.querySelector("#tempIcon2")
    tempIcon2.setAttribute("src", `https:${data.forecast.forecastday[2].day.condition.icon}`)
    let cityTemp2 = document.querySelector('#cityTemp2')
    cityTemp2.innerText = data.forecast.forecastday[2].day.maxtemp_c
    let tempDes2 = document.querySelector('#tempDes2')
    tempDes2.innerText = data.forecast.forecastday[2].day.condition.text
    }catch (error) {
        console.log(error);
        }
})()

document.querySelector('#locationInput').addEventListener("input", async (e) => {
    console.log();
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/search.json?key=85ad8df5c09d467fbc962212241012&q=${e.target.value}`) 
        let data0 = await response.json()
        let name = data0[0].name
        let secResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=85ad8df5c09d467fbc962212241012&q=${name}&days=3`)
        let data = await secResponse.json()
        let currentDay = document.querySelector("#currentDay")
        d = new Date(`${data.current.last_updated}`)
        currentDay.innerText = days[d.getDay()]
        let dayNumber = document.querySelector("#dayNumber")
        dayNumber.innerText = `${d.getDate()}${months[d.getMonth()]}`
        d1 = new Date(`${data.forecast.forecastday[1].date}`)
        let nextDay1 = document.querySelector('#nextDay1')  
        nextDay1.innerText = days[d1.getDay()]
        d2 = new Date(`${data.forecast.forecastday[2].date}`)
        let nextDay2 = document.querySelector('#nextDay2')  
        nextDay2.innerText = days[d2.getDay()]
        let cityName = document.querySelector("#cityName")
        cityName.innerText = data.location.name
        let cityTemp = document.querySelector("#cityTemp")
        cityTemp.innerText = data.current.temp_c
        let tempIcon = document.querySelector("#tempIcon")
        tempIcon.setAttribute("src", `https:${data.current.condition.icon}`);
        let tempDes = document.querySelector("#tempDes")
        tempDes.innerText = data.current.condition.text
        let tempIcon1 = document.querySelector("#tempIcon1")
        tempIcon1.setAttribute("src", `https:${data.forecast.forecastday[0].day.condition.icon}`)
        let cityTemp1 = document.querySelector('#cityTemp1')
        cityTemp1.innerText = data.forecast.forecastday[1].day.maxtemp_c
        let tempDes1 = document.querySelector('#tempDes1')
        tempDes1.innerText = data.forecast.forecastday[1].day.condition.text
        let tempIcon2 = document.querySelector("#tempIcon2")
        tempIcon2.setAttribute("src", `https:${data.forecast.forecastday[2].day.condition.icon}`)
        let cityTemp2 = document.querySelector('#cityTemp2')
        cityTemp2.innerText = data.forecast.forecastday[2].day.maxtemp_c
        let tempDes2 = document.querySelector('#tempDes2')
        tempDes2.innerText = data.forecast.forecastday[2].day.condition.text
        
    } catch (error) {
    }
    
})




