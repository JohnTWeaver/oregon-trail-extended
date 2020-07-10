class Traveler{
    constructor(name){
    this.name = name
    this.food = 1;
    this.isHealthy = true
    }

    hunt(){
        return this.food += 2
    }
    eat(){
        if(this.food > 0){
        this.food -=1
        console.log(this.food)
        if(this.food < 1){
            return this.isHealthy = false
        }
        return true
        }
    }

}