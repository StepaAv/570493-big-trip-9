import {createBlockMainTripInfo} from './components/block-main-trip-info.js';
import {createBlockTripControlTabs} from './components/block-trip-control-tabs.js';
import {createBlockTripFilters} from './components/block-trip-filters.js';
// import {createBlockTripEventsSort} from './components/block-trip-events-sort.js';
import {createTripEventsForm} from './components/block-trip-events-form.js';
import {addFirstTripEvent} from './components/block-add-trip-event.js';

const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
// const mainBlockTripEvents = document.querySelector(`.trip-events`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);
const mainBlockTripEventsForm = document.querySelector(`.trip-events`);


// console.log(createTripEventsForm());
const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainBlockMainTrip, createBlockMainTripInfo(), `beforeend`);
renderBlocks(mainBlockTripControlTabs, createBlockTripControlTabs(), `afterend`);
renderBlocks(mainBlockTripControlFilters, createBlockTripFilters(), `afterend`);
renderBlocks(mainBlockTripEventsForm, createTripEventsForm(), `beforeend`);

const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
renderBlocks(mainBlockOneTripEvent, addFirstTripEvent(), `beforeend`);
// renderBlocks(mainBlockTripEvents, createBlockTripEventsSort(), `beforeend`);
// renderBlocks(mainBlockTripEvents, createBlockTripEventsContent(), `beforeend`);
