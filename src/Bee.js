var Bee = function() {

  // call the Grub superclass
  Grub.call(this);

  // set the prototype
  Object.setPrototypeOf(this, Grub.prototype);
  // set the constructor
  // this.constructor = Grub;
  
  // an age property that is set to 5
  this.age = 5;
  
  // a color property that is set to yellow
  this.color = 'yellow';
  
  // a food property that is inherited from grub
  // an eat method that is inherited from grub
  
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

