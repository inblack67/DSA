const addAnyBase = ( base: number, num1: number, num2: number ): number => {
	let res = 0;

	let carry = 0;
	let power = 1;

	// 236
	// 754
	while ( num1 > 0 || num2 > 0 || carry > 0 ) {
		let d1 = num1 % 10;
		num1 = Math.floor( num1 / 10 );
		let d2 = num2 % 10;
		num2 = Math.floor( num2 / 10 );
		let sum = d1 + d2 + carry;
		carry = Math.floor( sum / base );
		sum = sum % base;
		res += sum * power;
		power *= 10;
	}

	return res;
};

console.log( addAnyBase( 8, 236, 754 ) );
