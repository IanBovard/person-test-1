var expect = require('chai').expect;
var Person = require('../person');

describe('starter', function() {

  it('start', function(){
    console.log('sanity check');
  });
});

describe('Person Class', function(){
  var person = Person;
  var you = null;

  beforeEach(function(){
    you = new Person('John', 25);
  });

  it('should be an instance of Person', function(){
    expect(you).to.be.instanceOf(Person);
  })

  it('should be a function', function(){
    expect(person).to.be.a('function');
  });

  it('should have a name', function(){
    expect(you).to.have.ownPropertyDescriptor('name');
  });

  it('should have a name that is a string', function(){
    expect(you.name).to.be.a('string');
  });

  it('should have an age', function(){
    expect(you).to.have.ownPropertyDescriptor('age');
  });

  it('should have an age that is a number', function(){
    expect(you.age).to.be.a('number');
  });

  it('should have a function sayHello that says Hello', function(){
    expect(you.sayHello()).to.include('Hello!');
  });

  it('should have a function sayName that returns a string', function() {
    expect(you.sayName()).to.be.a('string');
  });

  it('should have a function sayName says My name is + name', function() {
    expect(you.sayName()).to.include(you.name);
    expect(you.sayName()).to.include('My name is ');
  });

  it('should have a function sayAge that is a string', function() {
    expect(you.sayAge()).to.be.a('string');
  });

  it('should have a function sayAge that says I am \'age\' years old', function() {
    expect(you.sayAge()).to.include('I am ');
    expect(you.sayAge()).to.include(you.age);
    expect(you.sayAge()).to.include(' years old');
  });

});

console.log('done');