const slugify = string => {
  return string.split(' ').join('-').toLowerCase();
};

console.log(slugify('Top 10 dfg dfg dfgdfGFD dGGsdf osdf sdf'));
console.log(slugify('Top 10 dfg dhfghHFGg dfgdfGFD dGGsdf osdf sdfdfgdfg'));
console.log(
  slugify('Top 10 dfg dfg dfgdfGFD dGGsdf oHf sdfg Hfgd fHzGFFf F FHGHg'),
);
