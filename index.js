  const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event){
   // console.log(event);
   // alert("Se detecto envio de formulario")
    event.preventDefault();
    let transactionFormData = new FormData(form);
    insertRowInTransactionTable(transactionFormData)
})

function insertRowInTransactionTable(transactionFormData){
    let transactionTableRef = document.getElementById("transactionTable");
    let newTransaccionRowRef = transactionTableRef.insertRow(-1);

    let newTypeCell = newTransaccionRowRef.insertCell(0);
    newTypeCell.textContent = transactionFormData.get("tsSelector")

   newTypeCell = newTransaccionRowRef.insertCell(1);
    newTypeCell.textContent = transactionFormData.get("transactionDescription")

    newTypeCell = newTransaccionRowRef.insertCell(2);
    newTypeCell.textContent = transactionFormData.get("transactionAmmount")

    newTypeCell = newTransaccionRowRef.insertCell(3);
    newTypeCell.textContent = transactionFormData.get("transactionCategory")
}

   


