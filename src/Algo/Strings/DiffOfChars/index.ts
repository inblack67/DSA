const diffOfASCII = ( str: string ): string => {
	let res = '';

	res += str[0];
	for ( let i = 1; i < str.length; i++ ) {
		const curr = str[i];
		const prev = str[i - 1];
		const diff = curr.charCodeAt( 0 ) - prev.charCodeAt( 0 );
		res += `${diff}${curr}`;
	}


	return res;
};


console.log( diffOfASCII(
	'pepCODinG'
) );
