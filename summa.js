
//Вычисление суммы больших чисел

function res(a, b, result, carry, base) {
		if(a.length == 0 && b.length == 0 && !carry){
				return result;
		}
		
		//поразрядное сложение
		var s1 = parseInt(a.pop() || '0', 10);
		var s2 = parseInt(b.pop() || '0', 10);
		var buf = s1 + s2 + (carry || 0);
		
		//промежуточный результат
		var bufResult = buf % base + (result || "");
		
		//перенос 1, если buf > 9
		var carry = Math.floor(buf/base);
		
		//рекурсия
		return res(a, b, bufResult, carry, base);
}

function add(a, b) {
	  return res(a.split(""), b.split(""), "","",10).toString();
}

var sum = add("1145", "2295");
alert( sum );

