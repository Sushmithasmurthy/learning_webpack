const loaderUtils  = require('loader-utils');

module.exports = function(source){
  const options = loaderUtils.getOptions(source)| '';
  console.log('[tee-loader-'+ options + ']');
  console.log(source);
  return source;
};