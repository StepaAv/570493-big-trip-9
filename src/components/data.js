import {addFirstTripEvent} from './block-add-trip-event.js';

export const createAllMokData = () => ({
description: [
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
  ][Math.floor(Math.random() * 11)],

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

  dateStart: Date.now() + 1 + Math.floor(Math.random() * 1) * 24 * 60 * 60 * 1000,
  dateFinish: Date.now() + 1 + Math.floor(Math.random() * 3) * 24 * 60 * 60 * 1000,

  additionalOffers: [{
  name: `luggage`,
  desc: `Add luggage`,
  price: 10,
  check: Boolean(Math.round(Math.random()))
},
{
  name: `comfort`,
  desc: `Switch to comfort class`,
  price: 150,
  check: Boolean(Math.round(Math.random()))
},
{
  name: `meal`,
  desc: `Add meal`,
  price: 2,
  check: Boolean(Math.round(Math.random()))
},
{
  name: `seats`,
  desc: `Choose seats`,
  price: 9,
  check: Boolean(Math.round(Math.random()))
}],
});


export const generateEveryMokData = () => {
  const routeData = Array(1).fill().map(createAllMokData);
  return routeData;
}
const oneTripEvent = generateEveryMokData();
export const blabla = addFirstTripEvent(createAllMokData());

