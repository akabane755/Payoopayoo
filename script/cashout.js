document.getElementById("csubtract").addEventListener("click",function(e){
    e.preventDefault();
      const  amount = document.getElementById("camount").value;
        console.log(amount);
       let intext=document.getElementById("tAmount").innerText;
       
        intext=parseFloat(intext)-parseFloat(amount);
      
        
        const accNo = document.getElementById("caccNo").value;
        const pass = document.getElementById("cpass").value;
        if(accNo.length===11)
            {
                if(pass==="1234")
                { if(intext>=0)
                    {document.getElementById("tAmount").innerText=intext;
                        transaction("Tk khoroch korse");
                    }
                    else
                    alert("Amount is not valid");
                }
                else
                alert("Pass is 1234");
            }
            else
            {
                alert("The length of account number must be 11");
            }
    })
    document.getElementById("tsubtract").addEventListener("click",function(e){
        e.preventDefault();
          const  amount = document.getElementById("ttamount").value;
            console.log(amount);
           let intext=document.getElementById("tAmount").innerText;
           
            intext=parseFloat(intext)-parseFloat(amount);
          
            
            const accNo = document.getElementById("taccNo").value;
            const pass = document.getElementById("tpass").value;
            if(accNo.length===11)
                {
                    if(pass==="1234")
                    { if(intext>=0)
                        {document.getElementById("tAmount").innerText=intext;
                            transaction("Kare jeno tk dise");
                        }
                        else
                        alert("Amount is not valid");
                    }
                    else
                    alert("Pass is 1234");
                }
                else
                {
                    alert("The length of account number must be 11");
                }
        })
        document.getElementById("psubtract").addEventListener("click",function(e){
            e.preventDefault();
              const  amount = document.getElementById("pamount").value;
                console.log(amount);
               let intext=document.getElementById("tAmount").innerText;
               
                intext=parseFloat(intext)-parseFloat(amount);
              
                
                const accNo = document.getElementById("paccNo").value;
                const pass = document.getElementById("ppass").value;
                if(accNo.length===11)
                    {
                        if(pass==="1234")
                        { if(intext>=0)
                            {document.getElementById("tAmount").innerText=intext;
                                transaction("Kono Ekta Bill");
                            }
                            else
                            alert("Amount is not valid");
                        }
                        else
                        alert("Pass is 1234");
                    }
                    else
                    {
                        alert("The length of account number must be 11");
                    }
            })