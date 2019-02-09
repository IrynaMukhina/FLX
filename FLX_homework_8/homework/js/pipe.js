function pipe() {
  let arg = arguments[0];
  let result;
  for(let i = 1; i < arguments.length; i++) {
    result = arguments[i](arg);
    arg = result;
  }
    
  return result;
}

function addOne(x) {
	
	return x + 1;
}
pipe(1, addOne);
pipe(1, addOne, addOne);
  