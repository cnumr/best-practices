/**
 * This function takes a text and converts it into a URL-friendly slug.
 * It performs the following transformations:
 * - Normalizes the string to remove accents
 * - Converts the text to lower case
 * - Replaces single quotes and double quotes with spaces
 * - Replaces spaces with hyphens
 * - Removes all non-alphanumeric characters except hyphens
 * - Replaces multiple consecutive hyphens with a single hyphen
 * - Replaces all non-ASCII characters with hyphens
 * - Removes leading and trailing hyphens
 *
 * @param {string} text - The text to be slugified.
 * @returns {string} The slugified text.
 */
const slugify = (text) => {
  return text
    .toString()
    .normalize('NFD')
    .toLowerCase()
    .replace(/['"]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/[^\x00-\x7F]/g, '-')
    .replace(/-+$/, '');
};

export { slugify };

/**
 * This function takes a date string and returns a formatted date string in French locale.
 *
 * @param {date} date - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    timeZone: 'UTC',
  });
}

/**
 * Generates a sequence of sizes for responsives images.
 *
 * @param {number} first - The min width in the sequence.
 * @param {number} last - The max width in the sequence.
 * @param {number} [size=16] - The number of elements in the sequence. Defaults to 16.
 * @returns {number[]} The generated sequence, with each number rounded to the nearest integer.
 */
export function responsiveSequence(first, last, size = 16) {
  if (size <= 0) return [];
  if (size === 1) return [first];
  if (size === 2) return [first, last];

  const ratio = (last / first) ** (1 / (size - 1));

  const seq = [first];
  for (let i = 1; i < size - 1; i++) {
    seq.push(seq[i - 1] * ratio);
  }
  seq.push(last);

  return seq.map((value) => Math.round(value));
}

/**
 * Calculates the priority of an implementation based on its MOE and environmental impact.
 * @param {*} moe
 * @param {*} environmental_impact
 * @returns {number} The calculated priority.
 */
export function getCalculatedPriorityImplementation(moe, environmental_impact) {
  return Math.ceil(((moe * environmental_impact) / 25) * 5) + 1;
}

/**
 * Capitalizes the first letter of a string.
 * @param {*} string
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
