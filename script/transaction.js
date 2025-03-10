function transaction(s)
{
    const div=document.createElement("div");
    let now=new Date();
    
    let hour=now.getHours();
    let min=now.getMinutes();
    
    time=hour%12+":"+min+(hour>=12?" AM":" PM");
    div.innerHTML=`<div  class="flex justify-between items-center px-[5%] py-[2%] mx-auto border-1 border-gray-300 rounded-xl">
        <div  class="flex gap-5"> 
            <div class="rounded-[50%] flex justify-center items-center bg-gray-300">
            <img src="assets/wallet1.png" alt="" class="w-[100%] m-[15px]">
        </div>
            <div>
                <p  class="text-lg font-semibold">${s}</p>
                <p class="text-[#08080880]">Today ${time} </p>
            </div>
        </div>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_2954)">
            <path d="M11 12.25C11 12.5152 11.1054 12.7696 11.2929 12.9571C11.4804 13.1446 11.7348 13.25 12 13.25C12.2652 13.25 12.5196 13.1446 12.7071 12.9571C12.8946 12.7696 13 12.5152 13 12.25C13 11.9848 12.8946 11.7304 12.7071 11.5429C12.5196 11.3554 12.2652 11.25 12 11.25C11.7348 11.25 11.4804 11.3554 11.2929 11.5429C11.1054 11.7304 11 11.9848 11 12.25Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 19.25C11 19.5152 11.1054 19.7696 11.2929 19.9571C11.4804 20.1446 11.7348 20.25 12 20.25C12.2652 20.25 12.5196 20.1446 12.7071 19.9571C12.8946 19.7696 13 19.5152 13 19.25C13 18.9848 12.8946 18.7304 12.7071 18.5429C12.5196 18.3554 12.2652 18.25 12 18.25C11.7348 18.25 11.4804 18.3554 11.2929 18.5429C11.1054 18.7304 11 18.9848 11 19.25Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 5.25C11 5.51522 11.1054 5.76957 11.2929 5.95711C11.4804 6.14464 11.7348 6.25 12 6.25C12.2652 6.25 12.5196 6.14464 12.7071 5.95711C12.8946 5.76957 13 5.51522 13 5.25C13 4.98478 12.8946 4.73043 12.7071 4.54289C12.5196 4.35536 12.2652 4.25 12 4.25C11.7348 4.25 11.4804 4.35536 11.2929 4.54289C11.1054 4.73043 11 4.98478 11 5.25Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_11_2954">
            <rect width="24" height="24" fill="white" transform="translate(0 0.25)"/>
            </clipPath>
            </defs>
            </svg>
            
      
      </div>
    `
    document.getElementById('transactionbox').appendChild(div);
}