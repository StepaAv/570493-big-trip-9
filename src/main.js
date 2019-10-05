import {
    createBlockMainTripInfo
} from './components/block-main-trip-info.js';
import {
    createBlockTripControlTabs
} from './components/block-trip-control-tabs.js';
import {
    createBlockTripFilters
} from './components/block-trip-filters.js';
import {
    createTripEventsForm
} from './components/block-trip-events-form.js';
import {
    createAllMokData
} from './components/data.js';
import {
    addFirstTripEvent
} from './components/block-add-trip-event.js';
import {
    createBlockTripEventsSort
} from './components/block-trip-events-sort.js';
import {
    createBlockTripDays
} from './components/block-trip-days.js';
import {
    createBlockTripDay
} from './components/block-trip-day.js';
import {
    createEditTripEvent
} from './components/block-edit-trip-event.js';
import {
    createBlockAdditionalOffer
} from './components/block-additional-offers.js';


const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);
const mainBlockTripEventsForm = document.querySelector(`.trip-events`);
const mainBlockInsertTripEventsSort = document.querySelector(`.trip-events > h2`);
const mainEventAddBtn = document.querySelector(`.trip-main__event-add-btn`);


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


let temporallyDataArray;
let eventHeaderData;
let eventNumber = 0;
let allEventsArray = [];


const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);


const renderTripDayBlock = (number = 0) => {
    const mainBlockInsertTripDay = document.querySelector(`.trip-events__list`);
    renderBlocks(mainBlockInsertTripDay, createBlockTripDay(allEventsArray[number]), `afterbegin`);
};

const renderNewEvent = (number) => {
    const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
    renderBlocks(mainBlockOneTripEvent, addFirstTripEvent(allEventsArray[number]), `afterbegin`);
};

const renderDaysSortBlocks = () => {
    renderBlocks(mainBlockInsertTripEventsSort, createBlockTripEventsSort(), `afterend`);
    renderBlocks(mainBlockOneTripEvent, createBlockTripDays(), `afterend`);
};
const ifContainsSortBlock = () => {
    const eventSortBlock = document.querySelector(`.trip-events__trip-sort`);
    if (document.contains(eventSortBlock)) {
        return;
    } else {
        renderDaysSortBlocks();
    }
};

const removingEventHeader = () => {
    const eventHeaderBlock = document.querySelector(`.event__header`);
    eventHeaderBlock.remove();
};

const newEventBtnDisable = () => {
    mainEventAddBtn.disabled = true;

};
const newEventBtnEnable = () => {
    mainEventAddBtn.disabled = false;

};
let oneEventContainer;
let arrowDownBtn;
let oneEvent;
const savingEventsToArr = () => {
    oneEventContainer = [...document.querySelectorAll(`.trip-events__item`)];
    oneEventContainer.shift();
    // poluchaju masiv knopok so strelkoj vniz
    arrowDownBtn = [...document.querySelectorAll(`.event__rollup-btn`)];
    oneEvent = [...document.querySelectorAll(`div .event`)];
    oneEvent.shift();
};

// const renderOffers = () => {
//   const renderOffersPlace = document.querySelector('.event__selected-offers');
//   // for (let offer of allEventsArray) {
//   //   for (let key of offer.additionalOffers) {
//   //     if (key.check === true) {
//   //       console.log('its true');
//   //       console.log(key);
//   //     }
//   //   }
//   // }

//   for (let i = 0; i < allEventsArray.lenght; i++) {
//     console.log(allEventsArray[i]);
//     // for (let k = 0; k < allEventsArray.)
//   }
// };
let formEditBlock;
let saveButton;

const makingNewEvent = () => {
    if (document.contains(formEditBlock)) {
        formEditBlock.remove();
        oneEvent.map((segment) => segment.style.display = `flex`);
    };
    newEventBtnDisable();
    temporallyDataArray = generateEveryMokData();
    allEventsArray.push(temporallyDataArray[0]);
    renderNewEvent(eventNumber);
    saveButton = document.querySelector('.event__save-btn');
};
document.onload = makingNewEvent();
mainEventAddBtn.addEventListener(`click`, makingNewEvent);

const makingSaveEvent = () => {
    console.log('makingNewEvent clicked');
    removingEventHeader();
    ifContainsSortBlock();
    renderTripDayBlock(eventNumber);
    newEventBtnEnable();
    savingEventsToArr();
    getTotalPrice();
    eventNumber += 1;

    function renderSettingBlock(e) {
        let counter = arrowDownBtn.indexOf(e.target);
        const reversedEventsArr = [...allEventsArray];
        reversedEventsArr.reverse();
        console.log(formEditBlock);
        if (document.contains(formEditBlock)) {
            formEditBlock.remove();
            oneEvent.map((segment) => segment.style.display = `flex`);
        }
        oneEvent[counter].style.display = `none`;
        renderBlocks(oneEventContainer[counter], createEditTripEvent(reversedEventsArr[counter]), `afterbegin`);
        formEditBlock = document.querySelector(`.trip-events__item > form.event--edit`);
        const arrowUpBtn = document.querySelector(`.event--edit > .event__header > .event__rollup-btn`);

        function removeModal() {
            this.parentNode.parentNode.remove();
            oneEvent.map((segment) => segment.style.display = `flex`);
        }
        arrowUpBtn.addEventListener(`click`, removeModal);
    }
    arrowDownBtn.every((cell) => cell.addEventListener(`click`, renderSettingBlock));
};
saveButton.addEventListener(`click`, makingSaveEvent);




const getTotalPrice = () => {
    const totalSummBlock = document.querySelector(`.trip-info__cost-value`);
    totalSummBlock.innerHTML = ``;
    let totalPrice = 0;
    for (let value of allEventsArray) {
        totalPrice += value.price;
        for (let offers of value.additionalOffers) {
            if (offers.check === true) {
                totalPrice += offers.price;
            }
        }

    }
    renderBlocks(totalSummBlock, totalPrice, `beforeend`);
};
