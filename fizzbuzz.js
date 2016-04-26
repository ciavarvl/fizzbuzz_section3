var count, fizzer, buzzer, fizzbuzzer
count = function(begin, end) {
	
	var output = "", space;
	for (counter = begin; counter <= end; counter = counter + 1) {
	space = counter > begin ? " " : "";
	output = output + space + buzzer(fizzer(fizzbuzzer(counter)));
}

	//return eg. "1 2 3 4 5"
	return output; 
};

fizzer = function(num) {
	if(0 === num % 3) {
	return "fizz";
	} 
	return num;

	return 0 === num % 3 ? "fizz" : num;
};

buzzer = function(num) {
	if(0 === num % 5) {
	return "buzz";
	} 
	return num;

	return 0 === num % 5 ? "buzz" : num;
};

fizzbuzzer = function(num) {
	if(0 === num % 15) {
	return "fizzbuzz";
	} 
	return num;

	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};