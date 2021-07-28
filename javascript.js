let inputString = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";
let maskedString = inputString.replace((/\d{10}/),"'XXXXXXXXXX'");
// let sentences = maskedString.split(/[?.]/);
// console.log(maskedString)

let sentences = []
let start = 0;
let end = start;
for(let index=0;index<maskedString.length;index++){
    if(index == maskedString.length-1){
        sentences.push(maskedString.slice(start,index+1));
    }
    else if((maskedString[index]=== '.' || maskedString[index]=== '?')&& maskedString[index+1]=== ' '){
        sentences.push(maskedString.slice(start,end+1));
        start=end+1;
        end=start
    }
    else{
        end++;
    }
}

let finalSentence = "";
let sno = 1;
for (let sen = 0 ; sen < sentences.length ; sen++ ){
    if(sentences[sen].trim().split(" ").length > 3){
        finalSentence+=(sno+". "+sentences[sen]+"<br>");
        sno++;
    }
}

document.getElementById("ans1").innerHTML =  finalSentence ;

// Question 2
const qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };

// let desTeamSize = Object.values(qTeams).sort(function(a, b){return b-a})
let res = [];
for(let team in qTeams){
    res.push([team,qTeams[team]]);
}

res.sort((a,b)=>b[1]-a[1]);
let ans2= "";
for(let index=0;index<res.length;index++){
    ans2+=(res[index][0]+":"+res[index][1]+"<br>");
}
// console.log(ans2)

document.getElementById("ans2").innerHTML =  ans2 ;
