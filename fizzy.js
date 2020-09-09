let fizzy = (length = 101) => {
  for (let i = 1; i < length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`fizzbuzz`);
      continue;
    } else if (i % 3 === 0) {
      console.log(`fizz`);
      continue;
    } else if (i % 5 === 0) {
      console.log(`buzz`);
      continue;
    }
    console.log(i);
  }
};

fizzy();
