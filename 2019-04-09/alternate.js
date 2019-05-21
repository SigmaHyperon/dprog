const {floor, max} = Math;
const permutate = arr => arr.length === 1 ? [arr] : arr
  .map((el, idx) => ({el, values: [...arr.slice(0, idx), ...arr.slice(idx + 1)]}))
  .map(({el, values}) => permutate(values).map(permutation => [el, ...permutation]))
  .reduce((acc, permutations) => acc.concat(permutations), []);
const fit = (crate, box) => crate
  .map((dimension, idx) => floor(dimension / box[idx]))
  .reduce((acc, fitDimension) => acc * fitDimension);
const fitn = (crate, box) => max.apply(null, permutate(box)
  .map((rotatedBox, idx) => fit(crate, rotatedBox)));
const fit1 = (x1, y1, x2, y2) => fit([x1, y1], [x2, y2]);
const fit2 = (x1, y1, x2, y2) => fitn([x1, y1], [x2, y2]);
const fit3 = (x1, y1, z1, x2, y2, z2) => fitn([x1, y1, z1], [x2, y2, z2]);