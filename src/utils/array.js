
/**
 * Slices any given array in half.
 */
const sliceInHalf = arr => {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint, arr.length);
  return { firstHalf, secondHalf };
};

export {
  sliceInHalf
};
