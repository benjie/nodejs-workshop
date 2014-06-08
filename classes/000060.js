function Animal() {}
var a = new Animal();
Animal.prototype.getType = function() {
  return 'an animal';
}
Animal.prototype.announceSelf = function() {
  console.log("I am "+this.getType());
}
a.announceSelf(); // I am an animal

function Cat() {}
