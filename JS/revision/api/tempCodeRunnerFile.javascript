const URL = "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata";

let btn = document.querySelector(".btn");

btn.addEventListener("click", getTime);

const getTime = async () => {

    console.log("Getting Data...");

    let promise = await fetch(URL);

    let response = await promise.json();

    console.log(response);

    let time = response.time;

    let timeDiv = document.getElementById("time");

    timeDiv.innerText = time;
};

getTime();