const printPalindrome = ( str: string ): void => {
	// substrings
	for ( let i = 0; i < str.length; i++ ) {
		for ( let j = i + 1; j <= str.length; j++ ) {
			const sub = str.substring( i, j );
			if ( isPalindrome( sub ) ) { console.log( sub ); }
		}
	}
};

const isPalindrome = ( str: string ): boolean => {
	let i = 0, j = str.length - 1;
	while ( i < j ) {
		if ( str[i] === str[j] ) {
			i++; j--;
			continue;
		} else {
			return false;
		}
	}
	return true;
};

printPalindrome( 'abcc' );
