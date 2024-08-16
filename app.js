let again=document.querySelector(".again")
let startguess=document.querySelector(".startguess")
let guessbox=document.querySelector(".guessbox")
// console.log(guessbox.innerHTML)
let userinput=document.querySelector(".userinput")
let checkbtn=document.querySelector(".check")
let scorebox=document.querySelector(".score")
let score=18

let randomnum=Math.floor(Math.random()*20+1)
console.log(randomnum)
// console.log(randomnum)

checkbtn.addEventListener("click",()=>{

    if(userinput.value==""){
        startguess.innerHTML="Please Enter A Number "

    }
    
   else if(userinput.value==randomnum){
        console.log("hi")
        guessbox.innerHTML=userinput.value
        startguess.innerHTML="Correct Answer"
        userinput.value=""
        score++
        scorebox.innerHTML=score

    }
    else if(userinput.value>randomnum){
        console.log("too high")
        startguess.innerHTML="Too High"
        score--
        scorebox.innerHTML=score


    }
    else if(userinput.value<randomnum){
        console.log("too low")
        startguess.innerHTML="Too Low"
        score--
        scorebox.innerHTML=score


    }
   
})

    again.addEventListener("click",()=>{
        randomnum=Math.floor(Math.random()*20+1)
        guessbox.textContent="?"
        console.log(randomnum)
        startguess.innerHTML="Start guessing.........."
        userinput.value=""
       
        
        // console.log(guessbox)
    })
       
    
        
    






