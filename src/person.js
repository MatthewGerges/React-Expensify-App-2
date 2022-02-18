const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };
