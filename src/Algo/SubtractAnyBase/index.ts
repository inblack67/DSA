const subtractAnyBase = ( base: number, num1: number, num2: number ): number => {
	let res = 0;

	let carry = 0;
	let power = 1;

	// 236
	// 754
	while ( num2 > 0 ) {
		let d1 = num1 % 10;
		num1 = Math.floor( num1 / 10 );
		let d2 = num2 % 10;
		num2 = Math.floor( num2 / 10 );

		let sub = 0;
		d2 += carry;

		if ( d2 >= d1 ) {
			sub = d2 - d1;
			carry = 0;
		} else {
			carry = -1;
			sub = d2 - d1 + base;
		}

		res += sub * power;
		power *= 10;
	};

	return res;
};


console.log( subtractAnyBase( 8, 1212, 256 ) );
