function calc(){
	
	let money= document.getElementById('amount').value;
	
	if (money === "") {
		document.getElementById('result').innerHTML = "Enter the amount you wish to invest/save!! ";
	}else{
		let amount = parseInt(money)

		let time = parseInt(document.getElementById('period').value);

		let plan = document.getElementById('plan').value;

		let text = "Your interest amount is ";

		let currency = " NAIRA After ";

		let month = "Months"

		if (plan  === 'Piggybank') {
			let interest = 10;
			document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency + (time * 12) + month;
		}
		if (plan  === 'Safelock') {
			let interest = 15.5;
			document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100  + currency + (time * 12) + month;
		}
		if (plan  === 'Target') {
			let interest = 10;
			document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100 + currency + (time * 12) + month;
		}
		if (plan  === 'Flex') {
			let interest = 10;
			document.getElementById('result').innerHTML = text +  (amount *  time * interest)/100 + currency + (time * 12) + month;
		}
		if (plan  === 'Flex_Dollar') {
			let interest = 6;
			document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency + (time * 12) + month;
		}
		if (plan  === 'Investify') {
			let interest = 25;
			document.getElementById('result').innerHTML = text + (amount *  time * interest)/100 + currency + (time * 12) + month;
		}
		
	}	
}


function file(){
    var result = document.getElementsByClassName("result");
    
    result.href = 'data:attachment/text,' + encodeURI(textToSave);
    result.target = '__blank';
    result.download = 'myresult.txt';
    result.click();
}