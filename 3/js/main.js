var userLogin = prompt( "Введите ваш логин!", '');
	
	if ( userLogin == "Админ" ) {
		var pass = prompt( "ВВедите пароль!", '');
			if ( pass == "Черный Властелин" ) {
				alert( "Добро пожаловать!" );
			} else if ( pass == null ) {
				alert( "Вход отменен" );
			} else {
				alert( "Пароль неверен!" );
			}
	} else if ( userLogin == null ) {
		alert( "Вход отменен!" );
	} else {
		alert( "Я Вас не знаю!");
	}

/* то же самое, только проверка пароля через функцию

var userLogin = prompt( "Введите ваш логин!", '');
	
	if ( userLogin == "Админ" ) {
		userPassword();
	} else if ( userLogin == null ) {
		alert( "Вход отменен!" );
	} else {
		alert( "Я Вас не знаю!");
	}

function userPassword() {
	var pass = prompt( "ВВедите пароль!", '');
			if ( pass == "Черный Властелин" ) {
				alert( "Добро пожаловать!" );
			} else if ( pass == null ) {
				alert( "Вход отменен" );
			} else {
				alert( "Пароль неверен!" );
			}
}