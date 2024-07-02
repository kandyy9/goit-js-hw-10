import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTimeInput = document.querySelector("#datetime-picker");
const button = document.querySelector("button[data-start]");

let selectedDate;
let countdownInterval;
button.disabled = true; 

flatpickr(dateTimeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const currentTime = new Date();
      
    if (selectedDate - currentTime > 0) {
      button.disabled = false; 
    } else {
      button.disabled = true; 
      iziToast.error({
        message: 'Please choose a date in the future',
        title: 'Error',
        position: 'topRight',
      });
    }
  },
});

button.addEventListener("click", startCountdown);

function startCountdown() {
  clearInterval(countdownInterval); 
  dateTimeInput.disabled = true; 
  button.disabled = true; 
  let time = selectedDate - new Date();
  countdownInterval = setInterval(() => {
    if (time > 0) {
      const { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } = convertMs(time);
      
      const countdownTime = {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      };

      Object.keys(countdownTime).forEach(num => {
        document.querySelector(`span[data-${num}]`).innerHTML = addLeadingZero(countdownTime[num]);
      });
      time -= 1000;
    } else {
      clearInterval(countdownInterval);
      dateTimeInput.disabled = false;
    }
  }, 1000);
}

function addLeadingZero(value) {
  value = value.toString();
  if (value.length < 2) return (value.padStart(2, "0"));
  return value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
