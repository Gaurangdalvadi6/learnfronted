
function houseKeeper(yearOfExperience,name,cleaningRepetoire) {
    this.yearOfExperience = yearOfExperience;
    this.name=name;
    this.cleaningRepetoire=cleaningRepetoire;
    this.clean = function (){
        alert("Cleaning in progress...");
    }
}