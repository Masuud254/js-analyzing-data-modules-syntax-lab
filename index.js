
function combineUsers(...arrays) {
  const users = [].concat(...arrays);
  const merge_date = new Date();
  return {
    users,
    merge_date
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};