var message;
var login = prompt( "Введите логин", '');
	(login == "Вася") ?
	message = "Привет!" : ( login == "Директор" ) ?
	message = "Здравствуйте!" : ( login == '' ) ?
	message = "Нет логина!" : message = "Нет ничего!";
alert(message);