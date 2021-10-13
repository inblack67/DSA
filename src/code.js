function searchSuggestions(repository, customerQuery) {
  const res = [];
  if (customerQuery.length > 1) {
    for (let j = 0; j < customerQuery.length; j++) {
      const arr = [];
      const hints = customerQuery
        .split('')
        .slice(0, j + 2)
        .join('');
      console.log(hints);
      for (let i = 0; i < repository.length; i++) {
        const item = repository[i];
        const itemHints = item.slice(0, hints.length);
        if (hints && itemHints && hints === itemHints) {
          arr.push(item);
        }
      }
      res.push(arr);
    }
  }
  return res;
}

console.log(
  searchSuggestions(
    ['mouse', 'mousepad', 'mobile', 'moneypot', 'monitor'],
    'mouse',
  ),
);
