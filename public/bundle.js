/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/block-add-trip-event.js":
/*!************************************************!*\
  !*** ./src/components/block-add-trip-event.js ***!
  \************************************************/
/*! exports provided: addFirstTripEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFirstTripEvent", function() { return addFirstTripEvent; });
const addFirstTripEvent = ({cityType, timeStart, timeEnd, routeType, price}) => {
  return `<header class="event__header">
              <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                  <span class="visually-hidden">Choose event type</span>
                  <img class="event__type-icon" width="17" height="17" src="img/icons/${(routeType === `Taxi`) ? `taxi` : (routeType === `Bus`) ? `bus` : (routeType === `Train`) ? `train` : (routeType === `Ship`) ? `ship` : (routeType === `Transport`) ? `transport` : (routeType === `Drive`) ? `drive` : (routeType === `Flight`) ? `flight` : ``}.png" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                <div class="event__type-list">
                  <fieldset class="event__type-group">
                    <legend class="visually-hidden">Transfer</legend>

                    <div class="event__type-item">
                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${(routeType == `Taxi`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${(routeType == `Bus`) ? `checked` : ``} >
                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${(routeType == `Train`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${(routeType == `Ship`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport" ${(routeType == `Transport`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${(routeType == `Drive`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${(routeType == `Flight`) ? `checked` : ``}>
                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                    </div>
                  </fieldset>

                  <fieldset class="event__type-group">
                    <legend class="visually-hidden">Activity</legend>

                    <div class="event__type-item">
                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="event__field-group  event__field-group--destination">
                <label class="event__label  event__type-output" for="event-destination-1">
                  ${routeType} to
                </label>
                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${cityType}" list="destination-list-1">
                <datalist id="destination-list-1">
                  <option value="Amsterdam"></option>
                  <option value="Geneva"></option>
                  <option value="Chamonix"></option>
                  <option value="Saint Petersburg"></option>
                </datalist>
              </div>

              <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">
                  From
                </label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeStart}">
                &mdash;
                <label class="visually-hidden" for="event-end-time-1">
                  To
                </label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeEnd}">
              </div>

              <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                  <span class="visually-hidden">Price</span>
                  &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
              </div>

              <button class="event__save-btn  btn  btn--blue" type="button">Save</button>
              <button class="event__reset-btn" type="reset">Cancel</button>
            </header>`;
};


/***/ }),

/***/ "./src/components/block-edit-trip-event.js":
/*!*************************************************!*\
  !*** ./src/components/block-edit-trip-event.js ***!
  \*************************************************/
/*! exports provided: createEditTripEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditTripEvent", function() { return createEditTripEvent; });
const createEditTripEvent = ({cityType, timeStart, timeEnd, routeType, additionalOffers, description, photos, price}) => {
  const MAX_NUM = 123;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return `<form class="event  event--edit" action="#" method="post">
                    <header class="event__header">
                      <div class="event__type-wrapper">
                        <label class="event__type  event__type-btn" for="event-type-toggle-1">
                          <span class="visually-hidden">Choose event type</span>
                          <img class="event__type-icon" width="17" height="17" src="img/icons/${(routeType === `Taxi`) ? `taxi` : (routeType === `Bus`) ? `bus` : (routeType === `Train`) ? `train` : (routeType === `Ship`) ? `ship` : (routeType === `Transport`) ? `transport` : (routeType === `Drive`) ? `drive` : (routeType === `Flight`) ? `flight` : ``}.png" alt="Event type icon">
                        </label>
                        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                        <div class="event__type-list">
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Transfer</legend>

                            <div class="event__type-item">
                              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${(routeType === `Taxi`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${(routeType === `Bus`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${(routeType === `Train`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${(routeType === `Ship`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport" ${(routeType === `Transport`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${(routeType === `Drive`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${(routeType === `Flight`) ? `checked` : ``}>
                              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                            </div>
                          </fieldset>

                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Activity</legend>

                            <div class="event__type-item">
                              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                            </div>

                            <div class="event__type-item">
                              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div class="event__field-group  event__field-group--destination">
                        <label class="event__label  event__type-output" for="event-destination-1">
                          ${routeType} at
                        </label>
                        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${cityType}" list="destination-list-1">
                        <datalist id="destination-list-1">
                          <option value="Amsterdam"></option>
                          <option value="Geneva"></option>
                          <option value="Chamonix"></option>
                        </datalist>
                      </div>

                      <div class="event__field-group  event__field-group--time">
                        <label class="visually-hidden" for="event-start-time-1">
                          From
                        </label>
                        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeStart}">
                        —
                        <label class="visually-hidden" for="event-end-time-1">
                          To
                        </label>
                        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeEnd}">
                      </div>

                      <div class="event__field-group  event__field-group--price">
                        <label class="event__label" for="event-price-1">
                          <span class="visually-hidden">Price</span>
                          €
                        </label>
                        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                      </div>

                      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                      <button class="event__reset-btn" type="reset">Delete</button>

                      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked="">
                      <label class="event__favorite-btn" for="event-favorite-1">
                        <span class="visually-hidden">Add to favorite</span>
                        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                        </svg>
                      </label>

                      <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Open event</span>
                      </button>
                    </header>

                    <section class="event__details">

                      <section class="event__section  event__section--offers">
                        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                        <div class="event__available-offers">
                          <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${(additionalOffers[0].check === true) ? `checked` : ``}>
                            <label class="event__offer-label" for="event-offer-luggage-1">
                              <span class="event__offer-title">${additionalOffers[0].desc}</span>
                              +
                              €&nbsp;<span class="event__offer-price">30</span>
                            </label>
                          </div>

                          <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" ${(additionalOffers[1].check === true) ? `checked` : ``}>
                            <label class="event__offer-label" for="event-offer-comfort-1">
                              <span class="event__offer-title">${additionalOffers[1].desc}</span>
                              +
                              €&nbsp;<span class="event__offer-price">100</span>
                            </label>
                          </div>

                          <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" ${(additionalOffers[2].check === true) ? `checked` : ``}>
                            <label class="event__offer-label" for="event-offer-meal-1">
                              <span class="event__offer-title">${additionalOffers[2].desc}</span>
                              +
                              €&nbsp;<span class="event__offer-price">15</span>
                            </label>
                          </div>

                          <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" ${(additionalOffers[3].check === true) ? `checked` : ``}>
                            <label class="event__offer-label" for="event-offer-seats-1">
                              <span class="event__offer-title">${additionalOffers[3].desc}</span>
                              +
                              €&nbsp;<span class="event__offer-price">5</span>
                            </label>
                          </div>

                          <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
                            <label class="event__offer-label" for="event-offer-train-1">
                              <span class="event__offer-title">Travel by train</span>
                              +
                              €&nbsp;<span class="event__offer-price">40</span>
                            </label>
                          </div>
                        </div>
                      </section>

                      <section class="event__section  event__section--destination">
                        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                        <p class="event__destination-description">${description}</p>

                        <div class="event__photos-container">
                          <div class="event__photos-tape">
                            <img class="event__photo" src="${photos + getRandomInt(MAX_NUM)}" alt="Event photo">
                            <img class="event__photo" src="${photos + getRandomInt(MAX_NUM)}" alt="Event photo">
                            <img class="event__photo" src="${photos + getRandomInt(MAX_NUM)}" alt="Event photo">
                            <img class="event__photo" src="${photos + getRandomInt(MAX_NUM)}" alt="Event photo">
                            <img class="event__photo" src="${photos + getRandomInt(MAX_NUM)}" alt="Event photo">
                          </div>
                        </div>
                      </section>
                    </section>
                  </form>`;
};


/***/ }),

/***/ "./src/components/block-main-trip-info.js":
/*!************************************************!*\
  !*** ./src/components/block-main-trip-info.js ***!
  \************************************************/
/*! exports provided: createBlockMainTripInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockMainTripInfo", function() { return createBlockMainTripInfo; });
const createBlockMainTripInfo = () =>
  `
  <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
            </div>

             <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value"></span>
            </p> `;



/***/ }),

/***/ "./src/components/block-trip-control-tabs.js":
/*!***************************************************!*\
  !*** ./src/components/block-trip-control-tabs.js ***!
  \***************************************************/
/*! exports provided: createBlockTripControlTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockTripControlTabs", function() { return createBlockTripControlTabs; });
const createBlockTripControlTabs = () =>
  `
  <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>`;



/***/ }),

/***/ "./src/components/block-trip-day.js":
/*!******************************************!*\
  !*** ./src/components/block-trip-day.js ***!
  \******************************************/
/*! exports provided: createBlockTripDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockTripDay", function() { return createBlockTripDay; });
const createBlockTripDay = ({cityType, routeType, timeStart, timeEnd, price}) => {
  return `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${(routeType === `Bus`) ? `bus` : (routeType === `Train`) ? `train` : (routeType === `Taxi`) ? `Taxi` : (routeType === `Ship`) ? `ship` : (routeType === `Transport`) ? `transport` : (routeType === `Drive`) ? `drive` : (routeType === `Flight`) ? `flight` : ``}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${routeType} to ${cityType}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${timeStart}</time>
                        —
                        <time class="event__end-time" datetime="2019-03-18T11:00">${timeEnd}</time>
                      </p>
                      <p class="event__duration">1H 30M</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Order Uber</span>
                        +
                        €&nbsp;<span class="event__offer-price">${price}</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
};


/***/ }),

/***/ "./src/components/block-trip-days.js":
/*!*******************************************!*\
  !*** ./src/components/block-trip-days.js ***!
  \*******************************************/
/*! exports provided: createBlockTripDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockTripDays", function() { return createBlockTripDays; });
const createBlockTripDays = () => {
  return `          <ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              <ul class="trip-events__list">
              </ul>
            </li>
          </ul>`;
};


/***/ }),

/***/ "./src/components/block-trip-events-form.js":
/*!**************************************************!*\
  !*** ./src/components/block-trip-events-form.js ***!
  \**************************************************/
/*! exports provided: createTripEventsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTripEventsForm", function() { return createTripEventsForm; });
const createTripEventsForm = () => {
  return `<form class="trip-events__item  event  event--edit" action="#" method="post">
          </form>`;

};


/***/ }),

/***/ "./src/components/block-trip-events-sort.js":
/*!**************************************************!*\
  !*** ./src/components/block-trip-events-sort.js ***!
  \**************************************************/
/*! exports provided: createBlockTripEventsSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockTripEventsSort", function() { return createBlockTripEventsSort; });
const createBlockTripEventsSort = () =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day">Day</span>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">
                Time
                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>
              </label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">
                Price
                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>
              </label>
            </div>

            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
          </form>`;



/***/ }),

/***/ "./src/components/block-trip-filters.js":
/*!**********************************************!*\
  !*** ./src/components/block-trip-filters.js ***!
  \**********************************************/
/*! exports provided: createBlockTripFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockTripFilters", function() { return createBlockTripFilters; });
const createBlockTripFilters = () =>
  `
  <form class="trip-filters" action="#" method="get">
              <div class="trip-filters__filter">
                <input id="filters-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                <label class="trip-filters__filter-label" for="filter-future">Future</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                <label class="trip-filters__filter-label" for="filter-past">Past</label>
              </div>

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>`;



/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/*! exports provided: createAllMokData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAllMokData", function() { return createAllMokData; });
let today = new Date();

const createAllMokData = () => ({
  get description() {
    const maxRandom = 3;

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    };


    const descArr = [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus.`,
    ];
    const descArrShuffle = descArr.sort(() => 0.5 - Math.random());
    let descSelected = descArrShuffle.slice(0, getRandomInt(maxRandom));
    return descSelected;
  },

  routeType: [
    `Bus`,
    `Drive`,
    `Flight`,
    `Ship`,
    `Taxi`,
    `Train`,
    `Transport`,
  ][Math.floor(Math.random() * 7)],

  cityType: [
    `Vilnius`,
    `Kaunas`,
    `Klaipeda`,
    `Palanaga`,
    `Nida`,
    `Utena`
  ][Math.floor(Math.random() * 6)],

  timeStart: today.getHours() + `:` + today.getMinutes(),

  timeEnd: today.getHours() + Math.floor(Math.random() * 10) + `:` + (today.getMinutes() + Math.floor(Math.random() * 30)),

  get photos() {
    return `http://picsum.photos/300/150?r=`;
  },


  price: Math.floor(Math.random() * (10 - 70)) + 70,


  additionalOffers: [{
    name: `luggage`,
    desc: `Add luggage`,
    price: 10,
    check: Boolean(Math.round(Math.random()))
  }, {
    name: `comfort`,
    desc: `Switch to comfort class`,
    price: 150,
    check: Boolean(Math.round(Math.random()))
  }, {
    name: `meal`,
    desc: `Add meal`,
    price: 2,
    check: Boolean(Math.round(Math.random()))
  }, {
    name: `seats`,
    desc: `Choose seats`,
    price: 9,
    check: Boolean(Math.round(Math.random()))
  }],
});


// export const generateEveryMokData = () => {
//   const routeData = Array(1).fill().map(createAllMokData);
//   return routeData;
// }
// // const oneTripEvent = generateEveryMokData();
// export const myMokData = addFirstTripEvent(createAllMokData());


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_block_main_trip_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/block-main-trip-info.js */ "./src/components/block-main-trip-info.js");
/* harmony import */ var _components_block_trip_control_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/block-trip-control-tabs.js */ "./src/components/block-trip-control-tabs.js");
/* harmony import */ var _components_block_trip_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/block-trip-filters.js */ "./src/components/block-trip-filters.js");
/* harmony import */ var _components_block_trip_events_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/block-trip-events-form.js */ "./src/components/block-trip-events-form.js");
/* harmony import */ var _components_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/data.js */ "./src/components/data.js");
/* harmony import */ var _components_block_add_trip_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block-add-trip-event.js */ "./src/components/block-add-trip-event.js");
/* harmony import */ var _components_block_trip_events_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-trip-events-sort.js */ "./src/components/block-trip-events-sort.js");
/* harmony import */ var _components_block_trip_days_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block-trip-days.js */ "./src/components/block-trip-days.js");
/* harmony import */ var _components_block_trip_day_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/block-trip-day.js */ "./src/components/block-trip-day.js");
/* harmony import */ var _components_block_edit_trip_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/block-edit-trip-event.js */ "./src/components/block-edit-trip-event.js");












const mainBlockMainTrip = document.querySelector(`.trip-main__trip-info`);
const mainBlockTripControlTabs = document.querySelector(`.trip-main__trip-controls > h2:first-child`);
const mainBlockTripControlFilters = document.querySelector(`.trip-main__trip-controls > h2:last-child`);
const mainBlockTripEventsForm = document.querySelector(`.trip-events`);
const mainBlockInsertTripEventsSort = document.querySelector(`.trip-events > h2`);
const mainEventAddBtn = document.querySelector(`.trip-main__event-add-btn`);


const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainBlockMainTrip, Object(_components_block_main_trip_info_js__WEBPACK_IMPORTED_MODULE_0__["createBlockMainTripInfo"])(), `beforeend`);
renderBlocks(mainBlockTripControlTabs, Object(_components_block_trip_control_tabs_js__WEBPACK_IMPORTED_MODULE_1__["createBlockTripControlTabs"])(), `afterend`);
renderBlocks(mainBlockTripControlFilters, Object(_components_block_trip_filters_js__WEBPACK_IMPORTED_MODULE_2__["createBlockTripFilters"])(), `afterend`);
renderBlocks(mainBlockTripEventsForm, Object(_components_block_trip_events_form_js__WEBPACK_IMPORTED_MODULE_3__["createTripEventsForm"])(), `beforeend`);


const generateEveryMokData = (quantity = 1) => {
  const routeData = Array(quantity).fill().map(_components_data_js__WEBPACK_IMPORTED_MODULE_4__["createAllMokData"]);
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
  document.onload = renderBlocks(mainBlockOneTripEvent, Object(_components_block_add_trip_event_js__WEBPACK_IMPORTED_MODULE_5__["addFirstTripEvent"])(eventHeaderData), `beforeend`);
  document.onload = mainEventAddBtn.disabled = true;
};
renderFirstEvent();


const saveBtn = document.querySelector(`.event__save-btn`);
const mainBlockInsertTripDays = document.querySelector(`.trip-events__item`);


const pushDataToEventsArrayOnce = () => {
  // sohraniajem pervyj event, s uslovijem jesli masiv pustoj, jesli net, to sohraniat budet funkcija newEvent
  if (allEventsArray && allEventsArray.length) {} else {
    allEventsArray.push(eventHeaderData);
  }

};

const renderTripDayBlock = (number = 0) => {
  const mainBlockInsertTripDay = document.querySelector(`.trip-events__list`);
  renderBlocks(mainBlockInsertTripDay, Object(_components_block_trip_day_js__WEBPACK_IMPORTED_MODULE_8__["createBlockTripDay"])(allEventsArray[number]), `afterbegin`);
};

const renderNewEvent = (number) => {
  const mainBlockOneTripEvent = document.querySelector(`.trip-events__item`);
  renderBlocks(mainBlockOneTripEvent, Object(_components_block_add_trip_event_js__WEBPACK_IMPORTED_MODULE_5__["addFirstTripEvent"])(allEventsArray[number]), `afterbegin`);
};

const renderDaysSortBlocks = () => {
  renderBlocks(mainBlockInsertTripEventsSort, Object(_components_block_trip_events_sort_js__WEBPACK_IMPORTED_MODULE_6__["createBlockTripEventsSort"])(), `afterend`);
  renderBlocks(mainBlockInsertTripDays, Object(_components_block_trip_days_js__WEBPACK_IMPORTED_MODULE_7__["createBlockTripDays"])(), `afterend`);
};
const ifContainsSortBlock = () => {
  const eventSortBlock = document.querySelector(`.trip-events__trip-sort`);
  if (document.contains(eventSortBlock)) {
    ``;
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

let abcd;
// let arrowUpBtn;
const makingSaveEvent = () => {
  pushDataToEventsArrayOnce();
  removingEventHeader();
  ifContainsSortBlock();
  renderTripDayBlock(eventNumber);
  newEventBtnEnable();
  savingEventsToArr();
  getTotalPrice();

  function renderSettingBlock(e) {
    newEventBtnDisable();
    let counter = arrowDownBtn.indexOf(e.target);
    const reversedEventsArr = [...allEventsArray];
    reversedEventsArr.reverse();
    abcd = document.querySelector(`.trip-events__item > form.event--edit`);
    if (document.contains(abcd)) {
      abcd.remove();
      oneEvent.map((segment) => segment.style.display = `flex`);
    }
    oneEvent[counter].style.display = `none`;
    renderBlocks(oneEventContainer[counter], Object(_components_block_edit_trip_event_js__WEBPACK_IMPORTED_MODULE_9__["createEditTripEvent"])(reversedEventsArr[counter]), `afterbegin`);
    const arrowUpBtn = document.querySelector(`.event--edit > .event__header > .event__rollup-btn`);

    function removeModal() {
      this.parentNode.parentNode.remove();
      oneEvent.map((segment) => segment.style.display = `flex`);
      newEventBtnEnable();
    }

    arrowUpBtn.addEventListener(`click`, removeModal);

  }
  arrowDownBtn.every((cell) => cell.addEventListener(`click`, renderSettingBlock));
};

saveBtn.addEventListener(`click`, makingSaveEvent);

const makingNewEvent = () => {
  // schetchik po kliku, ukazyvajet na element v masive s mokami
  eventNumber += 1;
  // dizablim knopku new event
  newEventBtnDisable();
  // sohraniajem mok danyje vo vremenyj massiv
  temporallyDataArray = generateEveryMokData();
  // sohraniajem danyje kazhdoj kartochki v masiv
  allEventsArray.push(temporallyDataArray[0]);
  // renderim novyh event header s mokami iz allEventsArray
  renderNewEvent(eventNumber);
  const saveAnyEvent = document.querySelector(`.event__save-btn`).onclick = makingSaveEvent;
};
mainEventAddBtn.addEventListener(`click`, makingNewEvent);

const getTotalPrice = () => {
  const totalSummBlock = document.querySelector(`.trip-info__cost-value`);
  totalSummBlock.innerHTML = ``;
  let totalPrice = 0;
  for (let value of allEventsArray) {
    totalPrice += value.price;
  }
  renderBlocks(totalSummBlock, totalPrice, `beforeend`);
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map