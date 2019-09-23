import {createBlockMainTripInfo} from './components/block-main-trip-info.js';
import {createBlockTripControlTabs} from './components/block-trip-control-tabs.js';
import {createBlockTripFilters} from './components/block-trip-filters.js';
import {createTripEventsForm} from './components/block-trip-events-form.js';
import {createAllMokData} from './components/data.js';
import {addFirstTripEvent} from './components/block-add-trip-event.js';
import {createBlockTripEventsSort} from './components/block-trip-events-sort.js';
import {createBlockTripDays} from './components/block-trip-days.js';
import {createBlockTripDay} from './components/block-trip-day.js';
import {createEditTripEvent} from './components/block-edit-trip-event.js';



const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);
const mainBlockTripEventsForm = document.querySelector(`.trip-events`);
const mainBlockInsertTripEventsSort = document.querySelector(`.trip-events > h2`);
const mainEventAddBtn = document.querySelector('.trip-main__event-add-btn');


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



const renderFirstEvent = () => {
	const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
	temporallyDataArray = generateEveryMokData();
	eventHeaderData = temporallyDataArray[0];
	document.onload = renderBlocks(mainBlockOneTripEvent, addFirstTripEvent(eventHeaderData), `beforeend`);
	document.onload = mainEventAddBtn.disabled = true;
};
renderFirstEvent();


const saveBtn = document.querySelector('.event__save-btn');
const mainBlockInsertTripDays = document.querySelector('.trip-events__item');


const pushDataToEventsArrayOnce = () => {
	//sohraniajem pervyj event, s uslovijem jesli masiv pustoj, jesli net, to sohraniat budet funkcija newEvent
	if (allEventsArray && allEventsArray.length) {
		console.log('array is not empty') 
	} else {
		allEventsArray.push(eventHeaderData);
	}
	
};

const renderTripDayBlock = (eventNumber = 0) => {
  const mainBlockInsertTripDay = document.querySelector('.trip-events__list');
  renderBlocks(mainBlockInsertTripDay,createBlockTripDay(allEventsArray[eventNumber]), `afterbegin`);
};

const renderNewEvent = (eventNumber) => {
	const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
	renderBlocks(mainBlockOneTripEvent, addFirstTripEvent(allEventsArray[eventNumber]), `afterbegin`);
}

const renderDaysSortBlocks = () => {
	renderBlocks(mainBlockInsertTripEventsSort, createBlockTripEventsSort(), `afterend`);
	renderBlocks(mainBlockInsertTripDays, createBlockTripDays(), `afterend`);
}
const ifContainsSortBlock = () => {
	const eventSortBlock = document.querySelector('.trip-events__trip-sort');
	if (document.contains(eventSortBlock)) {
	} else {
	renderDaysSortBlocks();
	}
}

const removingEventHeader = () => {
	const eventHeaderBlock = document.querySelector('.event__header');
	eventHeaderBlock.remove();
}

const newEventBtnDisable = () => {
		mainEventAddBtn.disabled = true;

}
const newEventBtnEnable = () => {
		mainEventAddBtn.disabled = false;

}
let oneEventContainer;
let arrowDown;
let oneEvent; 
const savingEventsToArr = () => {
	oneEventContainer = [...document.querySelectorAll('.trip-events__item')];
  	arrowDown = [...document.querySelectorAll('.event__rollup-btn')];
  	oneEvent = [...document.querySelectorAll('.event')];
}

const makingSaveEvent = () => {
	pushDataToEventsArrayOnce();
	removingEventHeader();
	ifContainsSortBlock();
	renderTripDayBlock(eventNumber);
	newEventBtnEnable();
	console.log(allEventsArray);
	savingEventsToArr();
  	console.log(oneEventContainer);
}
saveBtn.addEventListener('click', makingSaveEvent);

const makingNewEvent = () => {
	// schetchik po kliku, ukazyvajet na element v masive s mokami
	eventNumber += 1;
	// dizablim knopku new event
	newEventBtnDisable();
 	 // sohraniajem mok danyje vo vremenyj massiv
  	temporallyDataArray = generateEveryMokData();
  	// sohraniajem danyje kazhdoj kartochki v masiv
  	allEventsArray.push(temporallyDataArray[0]);
  	console.log(allEventsArray);
  	// renderim novyh event header s mokami iz allEventsArray
  	renderNewEvent(eventNumber);
  	const saveAnyEvent = document.querySelector('.event__save-btn').onclick = makingSaveEvent;
}
mainEventAddBtn.addEventListener('click', makingNewEvent);















// const saveEvent = () => {
//   //otpravliajem dannyje v massiv
//   pushDataToEventsArray();
//   //ubirajem eventHeaderData
//   eventHeaderBlock.remove();
//   //pokazyvajem EventSort blok
//   renderBlocks(mainBlockInsertTripEventsSort, createBlockTripEventsSort(), `afterend`);
//   // sozdajem kontainer mainBlockInsertTripDays
//   renderBlocks(mainBlockInsertTripDays, createBlockTripDays(), `afterend`);
//   // renderim odnu kartochku event
//   renderTripDayBlock();
//   oneEventContainer = [...document.querySelectorAll('.trip-events__item')];
//   oneEvent = [...document.querySelectorAll('.event')];
//   arrowDown = [...document.querySelectorAll('.event__rollup-btn')];


//   const getArrowNum = (e) => {
//   	counter = arrowDown.indexOf(e.target);
// }
//   arrowDown.forEach(cell => cell.addEventListener('click', getArrowNum));
// };

// saveBtn.addEventListener('click', saveEvent);






// const newEventBtn = document.querySelector('.trip-main__event-add-btn');

// let counter = 0;
// let count = 0;
// // funkcija u kotoroj mnogo raboty
// const addNewEvent = () => {
// 	//schetchik
//   count += 1;
//   // sohraniajem mok danyje vo vremenyj massiv
//   temporallyDataArray = generateEveryMokData();
//   // sohraniajem danyje kazhdoj kartochki v masiv
//   allEventsArray.push(temporallyDataArray[0]);
//   const mainBlockInsertNewEvent = document.querySelector('.trip-events__item');
//   // renderim kartochku
//   renderTripDayBlock(count);
//   // sohraniajem tolko chto otrenderenyje elementy
//   oneEventContainer = [...document.querySelectorAll('.trip-events__item')];
//   arrowDown = [...document.querySelectorAll('.event__rollup-btn')];
//   oneEvent = [...document.querySelectorAll('.event')];
//   // eshe odna funkcija u kotoroj mnogo raboty
//   const getArrowNum = (e) => {
//   	counter = arrowDown.indexOf(e.target);
//   	console.log(counter);
//   		oneEvent[counter+1].style.display = 'none';
//   		renderBlocks(oneEventContainer[counter+1], createEditTripEvent(allEventsArray[counter]), `beforeend`);
// }



//   arrowDown.forEach(cell => cell.addEventListener('click', getArrowNum));

// };
// newEventBtn.addEventListener('click', addNewEvent);



