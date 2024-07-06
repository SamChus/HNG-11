const time = document.getElementById("time");
const day = document.getElementById("day");
const date = new Date();


const putInData = () => {
const timeInUTC = date.getTime();
 const currentTime = date.toDateString().slice(0, 3);
  time.innerHTML = timeInUTC;
  day.innerHTML = currentTime;
};

setTimeout(() => {
  putInData();
}, 1000);
