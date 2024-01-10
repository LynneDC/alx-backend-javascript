/**
 * cleanSet returns all set values that start with a specific string
 * @set the set that has values
 * @startString values to be returned
 */
export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join('-').replace(new RegExp(`^${startString}`), '');
}
