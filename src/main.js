import {createBlockMainTripInfo} from './components/block-main-trip-info.js';
import {createBlockTripControlTabs} from './components/block-trip-control-tabs.js';
import {createBlockTripFilters} from './components/block-trip-filters.js';
import {createBlockTripEventsSort} from './components/block-trip-events-sort.js';
import {createBlockTripEventsContent} from './components/block-trip-events-content.js';

const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripEvents = document.querySelector(`.trip-events`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);

const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainBlockMainTrip, createBlockMainTripInfo(), `beforeend`);
renderBlocks(mainBlockTripControlTabs, createBlockTripControlTabs(), `afterend`);
renderBlocks(mainBlockTripControlFilters, createBlockTripFilters(), `afterend`);
renderBlocks(mainBlockTripEvents, createBlockTripEventsSort(), `beforeend`);
renderBlocks(mainBlockTripEvents, createBlockTripEventsContent(), `beforeend`);


