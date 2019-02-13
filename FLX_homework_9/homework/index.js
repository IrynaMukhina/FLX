//1
function findTypes() {
  let typeList = [];
  for(let i = 0; i < arguments.length; i++) {
    typeList.push(typeof arguments[i]);
  }

  return typeList;
}

findTypes('number')
findTypes(null, 5, 'hello')

//2
function executeforEach(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

executeforEach([1,2,3], function(el) { 
	console.log(el) 
})

//3
function mapArray(arr, func) {
  let transformedArray = [];
  executeforEach(arr, function(item) {
    transformedArray.push(func(item));
  })

  return transformedArray;
}

mapArray([2, 5, 8], function(el) { 
	return el + 3 
})

//4
function filterArray(arr, func) {
  let filteredArray = [];
  executeforEach(arr, function(item){
    if(func(item)) {
      filteredArray.push(item);
    }
  })

  return filteredArray;
}

filterArray([2, 5, 8], function(el) { 
	return el > 3 
})

//5
function getAmountOfAdultPeople(arr) {
  let adultPeople = filterArray(arr, function(item) {
		
		return item['age'] > 18;
  });
    
  return adultPeople.length;
}

getAmountOfAdultPeople(data);

//6
function getGreenAdultBananaLovers(arr) {
	let greenAdultBananaLovers = filterArray(arr, function(item) {
		
		return item['age'] > 18 && item['favoriteFruit'] === 'banana' && item['eyeColor'] === 'green'
	});

	return mapArray(greenAdultBananaLovers, function(item) {

		return item['name'];
	});
}

getGreenAdultBananaLovers(data);

//7
function keys(obj) {
	let keysArray = [];
	for(let key in obj) {
		keysArray.push(key);
	}

	return keysArray;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3})

//8
function values(obj) {
	let valuesArray = [];
	for(let key in obj) {
		valuesArray.push(obj[key]);
	}

	return valuesArray;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3})

//9
function showFormattedDate(date) {
	let day = date.getDate();
	let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let month = monthArray[date.getMonth()];
	let year = date.getFullYear();

	return `Date: ${day} of ${month}, ${year}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'))

//10
function isEvenYear(date) {
	let year = date.getFullYear();
	if(year % 2 === 0) {
		
		return true;
	} else {

		return false;
	}
}

isEvenYear(new Date('2019-01-27T01:10:00'))

//11
function isEvenMonth(date) {
	let month = date.getMonth() + 1;
	if(month % 2 === 0) {
		
		return true;
	} else {

		return false;
	}
}

isEvenMonth(new Date('2019-02-27T01:10:00'))

//data
let data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
]