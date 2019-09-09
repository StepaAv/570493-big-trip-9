import {createBlockMainTripInfo} from './components/block-main-trip-info.js';
import {createBlockTripControlTabs} from './components/block-trip-control-tabs.js';
import {createBlockTripFilters} from './components/block-trip-filters.js';
import {createTripEventsForm} from './components/block-trip-events-form.js';
import {createAllMokData} from './components/data.js';
import {addFirstTripEvent} from './components/block-add-trip-event.js';



const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);
const mainBlockTripEventsForm = document.querySelector(`.trip-events`);


const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainBlockMainTrip, createBlockMainTripInfo(), `beforeend`);
renderBlocks(mainBlockTripControlTabs, createBlockTripControlTabs(), `afterend`);
renderBlocks(mainBlockTripControlFilters, createBlockTripFilters(), `afterend`);
renderBlocks(mainBlockTripEventsForm, createTripEventsForm(), `beforeend`);



const generateEveryMokData = (quantity = 1) => {
  const routeData = Array(quantity).fill().map(createAllMokData);
  return routeData;
};


const blabla = generateEveryMokData();
const onebla =blabla[0];
const myMokData = addFirstTripEvent(onebla);

console.log(onebla);

const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
renderBlocks(mainBlockOneTripEvent, myMokData, `beforeend`);

const labelTaxi = document.getElementById('event-type-taxi-1');
const labelBus = document.getElementById('event-type-bus-1');
const labelTrain = document.getElementById('event-type-train-1');
const labelShip = document.getElementById('event-type-ship-1');
const labelTransport = document.getElementById('event-type-transport-1');
const labelDrive = document.getElementById('event-type-drive-1');
const labelFlight = document.getElementById('event-type-flight-1');

const eventTypeIcon = document.querySelector('.event__type-icon');

if (labelTaxi.checked) {
  eventTypeIcon.src = 'img/icons/taxi.png'
} else if (labelBus.checked) {
  eventTypeIcon.src = 'img/icons/bus.png'
} else if (labelTrain.checked) {
  eventTypeIcon.src = 'img/icons/train.png'
} else if (labelShip.checked) {
  eventTypeIcon.src = 'img/icons/ship.png'
} else if (labelTransport.checked) {
  eventTypeIcon.src = 'img/icons/transport.png'
} else if (labelDrive.checked) {
  eventTypeIcon.src = 'img/icons/drive.png'
} else if (labelFlight.checked) {
  eventTypeIcon.src = 'img/icons/flight.png'
}

const saveBtn = document.querySelector('.event__save-btn');

const saveEvent = () => {
  console.log('btn is working');
  // console.log(myMokData);
};

saveBtn.addEventListener('click', saveEvent);
