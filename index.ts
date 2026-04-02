// task1
function rectangleArea(height:number,width:number):number{
    return height*width
}
rectangleArea(5,6)

function sum(...params:number[]){
    let sum=0
    for(const i of params){
        sum+=i
    }
    return sum
}
sum(2,3,4,5)

enum Days{
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
}
const today :Days = new Date().getDay()
console.log(Days[today])