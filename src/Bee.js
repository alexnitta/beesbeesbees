var Bee = function() {

  // call the Grub superclass
  Grub.call(this);

  // an age property that is set to 5
  this.age = 5;
  
  // a color property that is set to yellow
  this.color = 'yellow';
  
  // a food property that is inherited from grub
  // an eat method that is inherited from grub
  
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

// set the prototype
  // set Bee.prototype to a new object created from Grub.prototype
Bee.prototype = Object.create(Grub.prototype);

// set the constructor
Bee.prototype.constructor = Bee;
