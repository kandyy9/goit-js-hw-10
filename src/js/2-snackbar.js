// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const promiseForm = document.querySelector(".form");
const btn = document.querySelector("button[submit]");
let delayValue = 0;
let radioState = '';

promiseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    new Promise((resolve, reject) => {
        radioState = event.target.elements.state.value;
        delayValue = event.target.elements.delay.value;
            if (radioState == "fulfilled") {
                resolve(delayValue);
            }
            else {
                reject(delayValue);
            }
        promiseForm.reset();
    })
        .then((delay) => {
            setTimeout(() => {
                iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    messageColor: '#FFFFFF',
                    backgroundColor: '#59A10D',
                    position: 'topRight',
                    newestOnTop: false,
                });
            }, delay);
        })
        .catch((delay) => {
            setTimeout(() => {
                iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    messageColor: '#FFFFFF',
                    backgroundColor: '#EF4040',
                    position: 'topRight',
                    newestOnTop: false,
                });
            }, delay);
    })
    
})