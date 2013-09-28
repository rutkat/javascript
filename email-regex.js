var validEmail = "info@mydomain.com";
var invalidEmail = "clown@aol";
var pattern = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;

var phoneEmail = /^(\(\d+\) ?)?(\d+[\- ])*\d+$/; // pattern for email and phone

var a = pattern.test(validEmail);  // true
var b = pattern.test(invalidEmail); // false
