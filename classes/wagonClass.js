class Wagon{
    constructor(capacity){
        this.capacity =capacity
        this.passengers = []
    }
    
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(traveler){
        if(this.getAvailableSeatCount() > 0 ){
            return this.passengers.push(traveler)
        }
        return "Wagon Full"
    }
    shouldQuarantine(){ 
        for(let i =0; i < this.passengers.length; i++){
            if(!this.passengers[i].isHealty){
            return true 
            }
        }
        return false
        //needs fixed
    }
    totalFood(){
    let foodTotal = 0
    for(let i =0; i < this.passengers.length; i++){
        foodTotal += this.passengers[i].food
    }
    return foodTotal
    }
}