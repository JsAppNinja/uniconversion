const httpStatus = require("http-status");
const { convertValue } = require("../utils/helpers");
const { isNil } = require("lodash");

/**
 * Check conversion
 * @public
 */
exports.check = (req, res) => {
  const { originalValue, originalUnit, convertedUnit, userInput } = req.body;
  const userInputValue = isNil(userInput) ? userInput : userInput.toFixed(1);
  let convertedValue = convertValue({
    originalValue,
    originalUnit,
    convertedUnit
  });
  convertedValue = isNil(convertedValue)
    ? convertedValue
    : convertedValue.toFixed(1);
  const isCorrect = convertedValue && convertedValue === userInputValue;
  const isIncorrect = convertedValue && convertedValue !== userInputValue;
  const isInvalid = isNil(convertedValue);

  return res
    .status(httpStatus.OK)
    .json({
        success: true,
        convertedValue: convertedValue ? Number(convertedValue) : null,
        isCorrect,
        isIncorrect,
        isInvalid
    });
};
