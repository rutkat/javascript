// Find which day of the year it is
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());

// Find number of days between two dates
const dateDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// Check if date is valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
