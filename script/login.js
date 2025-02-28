alert();
document.getElementById("login").addEventListener("click",function(e)
    { e.preventDefault();
        

        const accNo = document.getElementById("accNo").value;
const pass = document.getElementById("pass").value;
if(accNo.length===11)
{
    if(pass==="1234")
       window.location.href="main.html";
    else
    alert("Pass is 1234");
}
else
{
    alert("The length of account number must be 11");
}
      
    }
)
