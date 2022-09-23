// Shuffle an array
const shuffle = arr => arr.sort(() => 0.5 - Math.random());
shuffle([1, 2, 3]);    // [2, 3, 1]
