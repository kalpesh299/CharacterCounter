const inputtext=document.getElementById("inputtext");
const char_count=document.getElementById("char_count");
const char_count_plus=document.getElementById("char_count_plus");
const char_count_minus=document.getElementById("char_count_minus");

    let data=char_count_minus.innerText;
    console.log(data);
  
    inputtext.addEventListener("keyup",()=>{
        
        let count_minusData=char_count_minus.innerText;
        if(count_minusData>0)count_minusData--;
        char_count_minus.innerText=count_minusData;
        
        
        
    })
    inputtext.addEventListener("keyup",()=>{
       
        let cont_minusData=char_count_plus.innerText;
        if(cont_minusData<50)cont_minusData++;
       char_count_plus.innerText=cont_minusData;
        
        
        
    })

// }
