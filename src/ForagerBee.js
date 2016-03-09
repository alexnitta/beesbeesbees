var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.honeyPot = 0;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
};

ForagerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
