/**
 * Sentence case a string.
 *
 * @param  {String} string
 * @return {String}
 */
module.exports = function (string) {
  return string
    .toString()
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
    .replace(/\.+/g, '.')
    .replace(/(\d)_+(\d)/g, '$1.$2')
    .replace(/[^a-zA-Z0-9\.]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase();
};
