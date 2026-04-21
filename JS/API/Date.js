fetch("https://api.ipgeolocation.io/timezone?apiKey=free")
  .then(res => res.json())
  .then(data => {
    let date = data.datetime.split("T")[0];
    console.log("Today Date:", date);
  })
  .catch(err => console.log(err));