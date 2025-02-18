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
		let smallLetter =
			firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90;
		let capitalLetter =
			firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122;
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

function electionResult(votes) {
	let mangoTeam = 0;
	let bananaTeam = 0;

	if (!Array.isArray(votes)) {
		return 'Invalid';
	}

	for (member of votes) {
		if (member === 'mango') {
			mangoTeam++;
		} else if (member === 'banana') {
			bananaTeam++;
		} else {
			continue;
		}
	}

	if (mangoTeam > bananaTeam) {
		return 'Mango';
	} else if (mangoTeam < bananaTeam) {
		return 'Banana';
	} else {
		return 'Draw';
	}
}

function isBestFriend(f1, f2) {
	if (typeof f1 !== 'object' || typeof f2 !== 'object') {
		return 'Invalid';
	}

	if (f1.roll === f2.bestFriend) {
		return true;
	} else if (f2.roll === f1.bestFriend) {
		return true;
	} else {
		return false;
	}
}
