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
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month;
		}
		if (plan  === 'Safelock') {
			let interest = 15.5;
			document.getElementById('result').innerHTML = text +  Math.round((amount *  time * interest)/100)  + currency + (time * 12) + month;
		}
		if (plan  === 'Target') {
			let interest = 10;
			document.getElementById('result').innerHTML = text +  Math.round((amount *  time * interest)/100) + currency + (time * 12) + month;
		}
		if (plan  === 'Flex') {
			let interest = 10;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month;
		}
		if (plan  === 'Flex_Dollar') {
			let interest = 6;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month;
		}
		if (plan  === 'Investify') {
			let interest = 25;
			document.getElementById('result').innerHTML = text + Math.round((amount *  time * interest)/100) + currency + (time * 12) + month;
		}
		
	}	
}

function calc1(){
	var amount,period,time,formula

	var amount = document.getElementById("amount").value;
 
	var period = document.getElementById("period").value;

	if (amount==="" || period===""){
		text = "Fill in all fields Please!!";
	}else{
		let plan = document.getElementById('plan').value;

		if (plan  === 'Daily') {
			let time = 30;
			text =  "You will need to save " + Math.round(amount/(time * period)) + " NAIRA " + plan + " for the next " + period + " Months!";
		} 
		if (plan  === 'Weekly') {
			let time = 4.28571429;
			text=  "You will need to save " + Math.round(amount/(time * period))  + " NAIRA " + plan + " for the next " + period + " Months!";
		}
		if (plan  === 'Monthly') {
			let time = 1;
			text =  "You will need to save " + Math.round(amount/(time * period))  + " NAIRA " + plan + " for the next " + period + " Months!";
		}	
	}
	document.getElementById('result').innerHTML = text	
}