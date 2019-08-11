import {createBlockMainTripInfo} from './components/block-main-trip-info.js';
import {createBlockTripControlTabs} from './components/block-trip-control-tabs.js';
import {createBlockTripFilters} from './components/block-trip-filters.js';
import {createBlockTripEventsSort} from './components/block-trip-events-sort.js';
import {createBlockTripEventsContent} from './components/block-trip-events-content.js';

// document.getElementByClassName('.trip-info__cost').style.display = none;


const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripControl = document.querySelector(`.trip-main__trip-controls`);
const mainBlockTripEvents = document.querySelector(`.trip-events`);

const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainBlockMainTrip, createBlockMainTripInfo(), `beforeend`);
renderBlocks(mainBlockTripControl, createBlockTripControlTabs(), `afterbegin`);
renderBlocks(mainBlockTripControl, createBlockTripFilters(), `beforeend`);
renderBlocks(mainBlockTripEvents, createBlockTripEventsSort(), `beforeend`);
renderBlocks(mainBlockTripEvents, createBlockTripEventsContent(), `beforeend`);


