const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegasaurus', 'herbivore', 40);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 60);
    dinosaur4 = new Dinosaur('diplodocus', 'herbivore', 100);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park1 = new Park("Big Lizards", 10, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park1.name;
    assert.strictEqual(actual, "Big Lizards");
  });

  it('should have a ticket price', function(){
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
  const actual = park1.dinosaurs;
  assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDinosaur(dinosaur4);
    assert.strictEqual(dinosaurs.length, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.removeDinosaur(dinosaur1);
    assert.strictEqual(dinosaurs.length, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const result = park1.popularDinosaur();
    assert.strictEqual(result, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const result = park1.findBySpecies('stegasaurus');
    assert.deepStrictEqual(result, [dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const result = park1.totalVisitors();
    assert.strictEqual(result, 150);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const result = park1.yearlyVisitors();
    assert.strictEqual(result, 54750);
  });

  it('should be able to calculate total revenue for one year', function(){
    const result = park1.yearlyRevenue();
    assert.strictEqual(result, 547500);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    const result = park1.removeSpecies('t-rex');
    assert.deepStrictEqual(park1.dinosaurs, [dinosaur2, dinosaur3]);
  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    const result = park1.dinoDiets();
    diets = {'carnivore': 2, 'herbivore': 1}
    assert.deepStrictEqual(result, diets);
  })

});
