module.exports = (...args) => {
  return args.reduce(function(agg, val) {
    debugger;
    console.log("hii");
    return (agg += val);
  }, 0);
};
