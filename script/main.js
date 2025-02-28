document.getElementById('addMoneybox').style.display="none";
document.getElementById('cashoutbox').style.display="none";
document.getElementById('transferMoneybox').style.display="none";
document.getElementById('getBonusbox').style.display="none";
document.getElementById('payBillbox').style.display="none";
document.getElementById('transactionbox').style.display="none";
document.getElementById('defaultbox').style.display="block";
document.getElementById('addMoney').addEventListener("click",function(){
    
  document.getElementById('addMoneybox').style.display="block";
  document.getElementById('defaultbox').style.display="none";
  document.getElementById('cashoutbox').style.display="none";
document.getElementById('transferMoneybox').style.display="none";
document.getElementById('getBonusbox').style.display="none";
document.getElementById('payBillbox').style.display="none";
document.getElementById('transactionbox').style.display="none";
document.getElementById('addMoney').classList.add("clickedButton");
document.getElementById('cashOut').classList.remove("clickedButton");
document.getElementById('transferMoney').classList.remove("clickedButton");
document.getElementById('getBonus').classList.remove("clickedButton");
document.getElementById('payBill').classList.remove("clickedButton");
document.getElementById('transaction').classList.remove("clickedButton");
   
})
document.getElementById('cashOut').addEventListener("click",function(){
    
    document.getElementById('cashoutbox').style.display="block";
    document.getElementById('defaultbox').style.display="none";
    document.getElementById('addMoneybox').style.display="none";

document.getElementById('transferMoneybox').style.display="none";
document.getElementById('getBonusbox').style.display="none";
document.getElementById('payBillbox').style.display="none";
document.getElementById('transactionbox').style.display="none";
document.getElementById('addMoney').classList.remove("clickedButton");
document.getElementById('cashOut').classList.add("clickedButton");
document.getElementById('transferMoney').classList.remove("clickedButton");
document.getElementById('getBonus').classList.remove("clickedButton");
document.getElementById('payBill').classList.remove("clickedButton");
document.getElementById('transaction').classList.remove("clickedButton");

   
})
document.getElementById('transferMoney').addEventListener("click",function(){
    
    document.getElementById('transferMoneybox').style.display="block";
    document.getElementById('defaultbox').style.display="none";
    document.getElementById('addMoneybox').style.display="none";
document.getElementById('cashoutbox').style.display="none";

document.getElementById('getBonusbox').style.display="none";
document.getElementById('payBillbox').style.display="none";
document.getElementById('transactionbox').style.display="none";
document.getElementById('addMoney').classList.remove("clickedButton");
document.getElementById('cashOut').classList.remove("clickedButton");
document.getElementById('transferMoney').classList.add("clickedButton");
document.getElementById('getBonus').classList.remove("clickedButton");
document.getElementById('payBill').classList.remove("clickedButton");
document.getElementById('transaction').classList.remove("clickedButton");
})
document.getElementById('getBonus').addEventListener("click",function(){
    
    document.getElementById('getBonusbox').style.display="block";
    document.getElementById('defaultbox').style.display="none";
    document.getElementById('addMoneybox').style.display="none";
document.getElementById('cashoutbox').style.display="none";
document.getElementById('transferMoneybox').style.display="none";

document.getElementById('payBillbox').style.display="none";
document.getElementById('transactionbox').style.display="none";
document.getElementById('addMoney').classList.remove("clickedButton");
document.getElementById('cashOut').classList.remove("clickedButton");
document.getElementById('transferMoney').classList.remove("clickedButton");
document.getElementById('getBonus').classList.add("clickedButton");
document.getElementById('payBill').classList.remove("clickedButton");
document.getElementById('transaction').classList.remove("clickedButton");
   
})
document.getElementById('payBill').addEventListener("click",function(){
    
    document.getElementById('payBillbox').style.display="block";
    document.getElementById('defaultbox').style.display="none";
    document.getElementById('addMoneybox').style.display="none";
document.getElementById('cashoutbox').style.display="none";
document.getElementById('transferMoneybox').style.display="none";
document.getElementById('getBonusbox').style.display="none";

document.getElementById('transactionbox').style.display="none";
document.getElementById('addMoney').classList.remove("clickedButton");
document.getElementById('cashOut').classList.remove("clickedButton");
document.getElementById('transferMoney').classList.remove("clickedButton");
document.getElementById('getBonus').classList.remove("clickedButton");
document.getElementById('payBill').classList.add("clickedButton");
document.getElementById('transaction').classList.remove("clickedButton");
})
document.getElementById('transaction').addEventListener("click",function(){
    
    document.getElementById('transactionbox').style.display="block";
    document.getElementById('defaultbox').style.display="none";
    document.getElementById('addMoneybox').style.display="none";
document.getElementById('cashoutbox').style.display="none";
document.getElementById('transferMoneybox').style.display="none";
document.getElementById('getBonusbox').style.display="none";
document.getElementById('payBillbox').style.display="none";
document.getElementById('addMoney').classList.remove("clickedButton");
document.getElementById('cashOut').classList.remove("clickedButton");
document.getElementById('transferMoney').classList.remove("clickedButton");
document.getElementById('getBonus').classList.remove("clickedButton");
document.getElementById('payBill').classList.remove("clickedButton");
document.getElementById('transaction').classList.add("clickedButton");
   
})
document.getElementById('logout').addEventListener("click",function(){
    
    window.location.href="index.html";
   
})