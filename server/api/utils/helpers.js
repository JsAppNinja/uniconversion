const { UNIT_CONVERSIONS } = require('./constants');

const convertValue = ({
    originalValue,
    originalUnit,
    convertedUnit
}) => UNIT_CONVERSIONS.hasOwnProperty(`${originalUnit}-${convertedUnit}`) ? UNIT_CONVERSIONS[`${originalUnit}-${convertedUnit}`](originalValue) : null;

module.exports = {
  convertValue
};
