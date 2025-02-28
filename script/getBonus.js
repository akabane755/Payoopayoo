document.getElementById("addbonus").addEventListener("click",function(e){
    e.preventDefault();
        
       let intext=document.getElementById("tAmount").innerText;
        intext=parseFloat(intext)+1200;
        console.log(intext);
        
       
                    document.getElementById("tAmount").innerText=intext;
                    transaction("Bonus paise betay");
            
    })