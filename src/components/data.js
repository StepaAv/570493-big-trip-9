let today = new Date();

export const createAllMokData = () => ({
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
