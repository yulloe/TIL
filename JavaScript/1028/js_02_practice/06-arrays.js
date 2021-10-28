/*
	[배열 관련 주요 메서드 연습 1]
	
	주어진 배열의 요소 중 null 값을 제거한 새로운 배열을 만드세요.
*/

const homeworks = ['david.zip', null, 'maria.zip', 'tom.zip', null]

const excludeNull = function(homeworks) {
	let result = []
	for (let homework of homeworks) {
		if (homework != null) {
			result.push(homework)
		}
	}
	return result
}
console.log(excludeNull(homeworks))


/*
	[배열 관련 주요 메서드 연습 2]
	
	주어진 배열을 사용하여 아래 문자열을 완성하세요.

	'www.samsung.com/sec/buds/galaxy-buds-pro'

*/

const arr1 = ['www', 'samsung', 'com']
const arr2 = ['galaxy', 'buds', 'pro']
const arr3 = ['sec', 'buds']

//교수님
const homepage = arr1.join('.')  //www.samsung.com
console.log(homepage)
const product = arr2.join('-')  // galaxy-buds-pro
console.log(product)

arr3.unshift(homepage)
console.log(arr3)
arr3.push(product)
console.log(arr3)

const result = arr3.join('/')
console.log(result)


/*
	[배열 관련 주요 메서드 연습 3]

	주어진 배열의 요소 중 모든 'rainy' 요소를 'sunny'로 교체하세요
	- indexOf 메서드를 사용합니다.
*/

const weather = ['sunny', 'sunny', 'sunny', 'sunny', 'rainy', 'rainy', 'sunny']

while (weather.indexOf('rainy') >= 0) {
	weather[weather.indexOf('rainy')] = 'sunny'
}

console.log(weather)