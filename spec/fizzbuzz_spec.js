var fb = require('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {
	it("can count from 1 to 5", function() {
		expect(fb.count(10, 15)) .toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it("Can take multiples of 3 and return 'fizz'", function() {

		expect(fb.fizzer(3)) .toBe('fizz');
		expect(fb.fizzer(33)) .toBe('fizz');
		expect(fb.fizzer(81)) .toBe('fizz');
	});

	it("Can take multiples of 5 and return 'buzz'", function() {
		expect(fb.buzzer(5)) .toBe('buzz');
		expect(fb.buzzer(6)) .toBe(6);
		expect(fb.buzzer(17)) .toBe(17);
	});
});

	it("Can take multiples of 3 and 5 and return 'fizzbuzz'", function() {
		expect(fb.fizzbuzzer(15)) .toBe('fizzbuzz');
		expect(fb.fizzbuzzer(27)) .toBe(27);
		expect(fb.fizzbuzzer(52)) .toBe(52);
});