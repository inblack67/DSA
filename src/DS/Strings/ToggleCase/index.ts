const toggleCase = ( str: string ): string => {
	let res = '';
	for ( let i = 0; i < str.length; i++ ) {
		const ch = str[i];
		const charCode = ch.charCodeAt( 0 );
		if ( charCode >= 'a'.charCodeAt( 0 ) && charCode <= 'z'.charCodeAt( 0 ) ) {
			// small to capital
			const diff = ch.charCodeAt( 0 ) - 'a'.charCodeAt( 0 ) + 'A'.charCodeAt( 0 );
			res += String.fromCharCode( diff );
		} else {
			// capital to small
			const diff = ch.charCodeAt( 0 ) - 'A'.charCodeAt( 0 ) + 'a'.charCodeAt( 0 );
			res += String.fromCharCode( diff );
		}
	}
	return res;
};

console.log( toggleCase(
	'pepCODinG'
) === "PEPcodINg" );
