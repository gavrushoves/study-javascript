function namberValue() {
var value = prompt(" Введите число", 15);
	
	if (value > 0) {
		alert( "1" );
	} else if ( value < 0 ) {
		alert("-1" );
	} else if ( value == 0 ) {
		alert( "0" );
	}
	else {
		namberValue();
	}
}