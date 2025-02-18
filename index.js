function cashOut(money) {
	if (typeof money !== 'number' || money < 0) {
		return 'Invalid';
	}
	let cashOutCharge = (money / 100) * 1.75;
	return cashOutCharge;
}

function validEmail(email) {
	if (email && typeof email === 'string') {
		let firstLetter = email[0];
		let smallLetter = firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90;
		let capitalLetter = firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122;
		let dotExit = email.includes('.');
		let comExist = email.split('.')[1] === 'com';

		if (smallLetter || capitalLetter) {
			if (email.includes('@') && !email.includes(' ') && dotExit && comExist) {
				return true;
			}
		}
		return false;
	}
	return 'Invalid';
}



