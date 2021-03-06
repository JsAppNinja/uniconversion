const UNITS = {
  KELVIN: 'Kelvin',
  CELSIUS: 'Celsius',
  FAHRENHEIT: 'Fahrenheit',
  RANKINE: 'Rankine',
  LITERS: 'liters',
  TABLESPOONS: 'tablespoons',
  CUBIC_INCHES: 'cubic-inches',
  CUPS: 'cups',
  CUBIC_FEET: 'cubic-feet',
  GALLONS: 'gallons'
};

const UNIT_CONVERSIONS = {
  [`${UNITS.KELVIN}-${UNITS.KELVIN}`]: val => val,
  [`${UNITS.KELVIN}-${UNITS.CELSIUS}`]: val => val - 273.15,
  [`${UNITS.KELVIN}-${UNITS.FAHRENHEIT}`]: val => (val - 273.15) * 1.8 + 32,
  [`${UNITS.KELVIN}-${UNITS.RANKINE}`]: val => val * 1.8,
  [`${UNITS.CELSIUS}-${UNITS.KELVIN}`]: val => val + 273.15,
  [`${UNITS.CELSIUS}-${UNITS.CELSIUS}`]: val => val,
  [`${UNITS.CELSIUS}-${UNITS.FAHRENHEIT}`]: val => val * 1.8 + 32,
  [`${UNITS.CELSIUS}-${UNITS.RANKINE}`]: val => val * 1.8 + 491.67,
  [`${UNITS.FAHRENHEIT}-${UNITS.KELVIN}`]: val => (val - 32) * 5/9 + 273.15,
  [`${UNITS.FAHRENHEIT}-${UNITS.CELSIUS}`]: val => (val - 32) * 5/9,
  [`${UNITS.FAHRENHEIT}-${UNITS.FAHRENHEIT}`]: val => val,
  [`${UNITS.FAHRENHEIT}-${UNITS.RANKINE}`]: val => val + 459.67,
  [`${UNITS.RANKINE}-${UNITS.KELVIN}`]: val => val * 5/9,
  [`${UNITS.RANKINE}-${UNITS.CELSIUS}`]: val => (val - 491.67) * 5/9,
  [`${UNITS.RANKINE}-${UNITS.FAHRENHEIT}`]: val => val - 459.67,
  [`${UNITS.RANKINE}-${UNITS.RANKINE}`]: val => val,
  [`${UNITS.LITERS}-${UNITS.LITERS}`]: val => val,
  [`${UNITS.LITERS}-${UNITS.TABLESPOONS}`]: val => val * 67.628,
  [`${UNITS.LITERS}-${UNITS.CUBIC_INCHES}`]: val => val * 61.0237,
  [`${UNITS.LITERS}-${UNITS.CUPS}`]: val => val * 4.16667,
  [`${UNITS.LITERS}-${UNITS.CUBIC_FEET}`]: val => val / 28.317,
  [`${UNITS.LITERS}-${UNITS.GALLONS}`]: val => val / 3.785,
  [`${UNITS.TABLESPOONS}-${UNITS.LITERS}`]: val => val / 67.628,
  [`${UNITS.TABLESPOONS}-${UNITS.TABLESPOONS}`]: val => val,
  [`${UNITS.TABLESPOONS}-${UNITS.CUBIC_INCHES}`]: val => val / 1.108,
  [`${UNITS.TABLESPOONS}-${UNITS.CUPS}`]: val => val / 16.231,
  [`${UNITS.TABLESPOONS}-${UNITS.CUBIC_FEET}`]: val => val / 1915,
  [`${UNITS.TABLESPOONS}-${UNITS.GALLONS}`]: val => val / 256,
  [`${UNITS.CUBIC_INCHES}-${UNITS.LITERS}`]: val => val / 61.024,
  [`${UNITS.CUBIC_INCHES}-${UNITS.TABLESPOONS}`]: val => val * 1.108,
  [`${UNITS.CUBIC_INCHES}-${UNITS.CUBIC_INCHES}`]: val => val,
  [`${UNITS.CUBIC_INCHES}-${UNITS.CUPS}`]: val => val / 14.646,
  [`${UNITS.CUBIC_INCHES}-${UNITS.CUBIC_FEET}`]: val => val / 1728,
  [`${UNITS.CUBIC_INCHES}-${UNITS.GALLONS}`]: val => val / 231,
  [`${UNITS.CUPS}-${UNITS.LITERS}`]: val => val / 4.167,
  [`${UNITS.CUPS}-${UNITS.TABLESPOONS}`]: val => val / 16.231,
  [`${UNITS.CUPS}-${UNITS.CUBIC_INCHES}`]: val => val * 14.646,
  [`${UNITS.CUPS}-${UNITS.CUPS}`]: val => val,
  [`${UNITS.CUPS}-${UNITS.CUBIC_FEET}`]: val => val / 118,
  [`${UNITS.CUPS}-${UNITS.GALLONS}`]: val => val / 15.773,
  [`${UNITS.CUBIC_FEET}-${UNITS.LITERS}`]: val => val * 28.317,
  [`${UNITS.CUBIC_FEET}-${UNITS.TABLESPOONS}`]: val => val * 1915,
  [`${UNITS.CUBIC_FEET}-${UNITS.CUBIC_INCHES}`]: val => val * 1728,
  [`${UNITS.CUBIC_FEET}-${UNITS.CUPS}`]: val => val * 118,
  [`${UNITS.CUBIC_FEET}-${UNITS.CUBIC_FEET}`]: val => val,
  [`${UNITS.CUBIC_FEET}-${UNITS.GALLONS}`]: val => val * 7.481,
  [`${UNITS.GALLONS}-${UNITS.LITERS}`]: val => val * 3.785,
  [`${UNITS.GALLONS}-${UNITS.TABLESPOONS}`]: val => val * 256,
  [`${UNITS.GALLONS}-${UNITS.CUBIC_INCHES}`]: val => val * 231,
  [`${UNITS.GALLONS}-${UNITS.CUPS}`]: val => val * 15.773,
  [`${UNITS.GALLONS}-${UNITS.CUBIC_FEET}`]: val => val / 7.481,
  [`${UNITS.GALLONS}-${UNITS.GALLONS}`]: val => val
};

module.exports = {
  UNITS,
  UNIT_CONVERSIONS
};
