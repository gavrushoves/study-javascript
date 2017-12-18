function pow(x,n){
	var resalt = x;
	for (var i=1; i<n; i++){
		resalt *=x;
	}
		return resalt;	
}

var x = prompt("Введите х", '');
var n = prompt("Введите n", '');

if (n<=1){
	alert("Введите другое значение"+ "\tn");
}
else {
	alert( pow(x,n));
}