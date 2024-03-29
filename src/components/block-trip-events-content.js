export const createBlockTripEventsContent = () =>
  `
            <ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>

              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Taxi to airport</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
                      </p>
                      <p class="event__duration">1H 30M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Order Uber</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">20</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Flight to Geneva</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
                      </p>
                      <p class="event__duration">1H 30M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">160</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add luggage</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">50</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Switch to comfort</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">80</span>
                        </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>
                      </p>
                      <p class="event__duration">1H 10M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">160</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Rent a car</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">200</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Check into hotel</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
                      </p>
                      <p class="event__duration">1H 30M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">600</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add breakfast</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">50</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>

            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">2</span>
                <time class="day__date" datetime="2019-03-19">MAR 19</time>
              </div>

              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to Geneva</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T10:00">10:00</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T11:00">11:00</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Natural History Museum</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T11:20">11:20</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T13:00">13:00</time>
                      </p>
                      <p class="event__duration">1H 20M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">50</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Book tickets</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">40</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Lunch in city</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">30</span>
                        </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T18:00">18:00</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T19:00">19:00</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>

            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">3</span>
                <time class="day__date" datetime="2019-03-18">MAR 20</time>
              </div>

              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to airport</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-20T08:25">08:25</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-20T09:25">09:25</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Flight to Amsterdam</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-20T11:15">11:15</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-20T12:15">12:15</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">180</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add luggage</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">30</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Switch to comfort</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">100</span>
                        </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>`;

