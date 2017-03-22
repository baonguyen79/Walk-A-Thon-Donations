makeDom = function(obj){

var donorList = document.getElementById('donorList');

var trElement =  document.createElement("tr");

var thString = `<th>${obj.name}</th> <th>${obj.email}</th> <th>${obj.amount}</th> <th>${obj.donorType}</th>`;
trElement.innerHTML = thString;
// trElement.append(thString);
donorList.append(trElement);

}
