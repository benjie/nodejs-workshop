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
Cat.prototype = new Animal();
Cat.prototype.getType = function() {
    return 'a cat';
}
var c = new Cat();
c.announceSelf(); // I am a cat

var c2 = new Cat();
c2.getType = function(){ return 'a beautiful cat'; }
c2.announceSelf(); // I am a beautiful cat

var c3po = new Cat();
c3po.getType = function(){ return 'a robotic cat'; }
c3po.announceSelf(); // I am a robotic cat

c.announceSelf(); // I am a cat
a.announceSelf(); // I am an animal
