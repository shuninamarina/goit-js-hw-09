import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime() - Date.now());
    const timeDifference = selectedDates[0].getTime() - Date.now();
    if (timeDifference <= 0) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    Notify.success('Now press Start button');
    refs.startBtn.disabled = false;
  },
};

const datePicker = flatpickr('#datetime-picker', options);

function onStartBtnClick() {}
