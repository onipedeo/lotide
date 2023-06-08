// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // Looping through the array with all Items.
  for (const item of allItems) {
    // counting the number of times each key(item to count) occurred.
    if (itemsToCount[item] && results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;