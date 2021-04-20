export function getRandomNumber(maxno){
    return Math.floor(Math.random() * maxno) + 1;
}


export function getNextRoundRobin(total=6,current=0){
    console.log(current);
    if(current===total-1){
        current=0;
    }
    current++;
}

