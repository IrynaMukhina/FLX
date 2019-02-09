function reverseNumber(num) {
  if (typeof num === 'number' && Number.isFinite(num) && !(num % 1)) {
		num = num.toString();
    let reverseResult = parseFloat(num.split('').reverse().join(''));
    if(num >= 0) {
        
      return reverseResult;
    } else {

      return parseFloat('-' + reverseResult);
    }
	}
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);