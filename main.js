const userRoles = new Map();
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

userRoles.set('Renato', 'SUDO');
userRoles.set('Dayana', 'ADMIN');
userRoles.set('Vitor', 'USER');
userRoles.set('Joana', 'ADMIN');
userRoles.set('Monica', 'USER');
userRoles.set('Gabriela', 'ADMIN');
userRoles.set('Edgley', 'USER');
userRoles.set('Daniela', 'ADMIN');

const getAdmins = (map) => {
	let tempAdmins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			tempAdmins.push(key);
		}
	}

	return tempAdmins;
};

function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

console.log(getAdmins(userRoles));
console.log(uniqueElements(arr));