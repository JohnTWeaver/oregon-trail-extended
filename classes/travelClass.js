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
        this.isHealthy = true
        console.log(this.food)
        return this.food -= 1 
        }
        else if(this.food === 0){
            this.isHealthy = false
            return this.food
        }
        
    }

}

class Doctor extends Traveler{
    constructor(name, permissionLevel = 2){
    super(name)
    this.permissionLevel = permissionLevel
    }
    heal(Traveler){
        return Traveler.isHealthy = true
    }

}

class Hunter extends Traveler{
    constructor(name, permissionLevel = 2){
    super(name)
    this.permissionLevel =permissionLevel
    this.food = 2
    }
    hunt(){
        this.food +=5
    }

    eat(){
        if(this.food > 2){
            return this.food -= 2
        }
        else if(this.food === 1){
            this.isHealthy = false
            return this.food = 0
        }
        else
            return this.isHealthy = false
    }

    giveFood(traveler,numberOfFoodUnits){
        if(numberOfFoodUnits < this.food){
            traveler.food += numberOfFoodUnits
            return this.food -= numberOfFoodUnits
        }
    }
}