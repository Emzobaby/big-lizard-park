const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  for( let i = 0; i < this.dinosaurs.length; i++){
   if (this.dinosaurs[i] === dinosaur) {
     this.dinosaurs.splice(i, 1);
    }
  }
};

Park.prototype.popularDinosaur = function(){
  let largest = this.dinosaurs[0];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > largest.guestsAttractedPerDay){
      largest = dinosaur
    }
  }
  return largest;
};

Park.prototype.findBySpecies = function(species){
  let newDinos = []
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      newDinos.push(dinosaur);
    }
  }
  return newDinos;
}

Park.prototype.totalVisitors = function(){
  let total = 0
  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.yearlyVisitors = function(){
  let result = this.totalVisitors() * 365;
  return result;
}

Park.prototype.yearlyRevenue = function(){
  let result = this.yearlyVisitors() * 10;
  return result;
}

Park.prototype.removeSpecies = function(species){
  let dinos = []
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species !== species){
      dinos.push(dinosaur);
    }
  }
  this.dinosaurs = dinos;
}

Park.prototype.dinoDiets = function(){
  let diets = {
    'carnivore': 0,
    'herbivore': 0
  };
  for (dinosaur of this.dinosaurs){
    if (dinosaur.diet === 'carnivore'){
      diets['carnivore'] += 1;
    } else if (dinosaur.diet === 'herbivore'){
        diets['herbivore'] += 1;
      }
  }
  return diets;
}

module.exports = Park;
