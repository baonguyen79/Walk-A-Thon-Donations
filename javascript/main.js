var form = document.getElementById("donorForm");

form.addEventListener('submit', checkOnSubmit);
form.addEventListener('reset', resetForm);

function resetForm(){
	form.reset();
}

// var a = Donor.getJsonObj();
	// console.log("--", a[0]);

function checkOnSubmit(e) {
	e.preventDefault();
	var elements = this.elements;
	if (elements.Name.value > ' ' && elements.Email.value > ' ' && elements.Amount.value > ' ' && elements.donorType.value > ' '){
		console.log(elements.Name.value , elements.Email.value , elements.Amount.value , elements.donorType.value);
		var jsonString = `{"name":"${elements.Name.value}","email": "${elements.Email.value}","amount":"${elements.Amount.value}","donorType":"${elements.donorType.value}"}`
		var obj = JSON.parse(jsonString);
		console.log(obj.name , obj.email);
		Donor.pushJsonObj(obj);
		// console.log("--",a[0].amount);

		form.reset();
		document.getElementById('msg').textContent = "Donor was submit";
		var objArray = Donor.getJsonObj();
		console.log(objArray[objArray.length - 1]);
		makeDom(objArray[objArray.length - 1]);
    }
	else{
		document.getElementById('msg').textContent = "Please complete the form";
	}
	

}