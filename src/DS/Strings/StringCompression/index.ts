export const stringCompression1 = ( str: string ): void => {
	let res1 = str[0];
	for ( let i = 1; i < str.length; i++ ) {
		const el = str[i];
		const prev = str[i - 1];
		if ( prev !== el ) {
			res1 += el;
		}
	}
	console.log( res1 );
};

export const stringCompression2 = ( str: string ): void => {
	let res1 = '';
	let count = 0;
	for ( let i = 1; i <= str.length; i++ ) {
		const el = str[i];
		const prev = str[i - 1];
		if ( prev === el ) {
			count++;
		} else {
			count++;
			if ( count === 1 ) {
				res1 += prev;
			} else {
				res1 += prev + count;
			}
			count = 0;
		}
	}
	console.log( res1 );
};

stringCompression1( 'wwwwaaadexxxxxx' );
stringCompression2( 'wwwwaaadexxxxxx' );

