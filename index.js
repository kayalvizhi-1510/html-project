function checkEvenOdd(){
    const num=document.getElementById("number").value;
    const resultElement=document.getElementById("result")
    ;
    if(num % 2 === 0){
    resultElement.innerHTML= num + " is even."; 
} 
else{
    resultElement.innerHTML = num + " is odd.";
  }
}