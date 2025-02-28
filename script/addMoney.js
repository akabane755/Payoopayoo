
document.getElementById("add").addEventListener("click",function(e){
e.preventDefault();
    const amount = document.getElementById("amount").value;
    console.log(amount);
   let intext=document.getElementById("tAmount").innerText;
    intext=parseFloat(intext)+parseFloat(amount);
    console.log(intext);
    
    const accNo = document.getElementById("accNo").value;
    const pass = document.getElementById("pass").value;
    if(accNo.length===11)
        {
            if(pass==="1234")
                {document.getElementById("tAmount").innerText=intext;
                    transaction("Bank Deposit");
                }
            else
            alert("Pass is 1234");
        }
        else
        {
            alert("The length of account number must be 11");
        }
})
