'use strict';

/**
 * `utils` service.
 */

module.exports = {
  capitalizeFirstLetter: string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
