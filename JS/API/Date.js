async function getDate() {
  try {
    const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata");
    const data = await res.json();

    console.log("Today Date:", data.date);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getDate();