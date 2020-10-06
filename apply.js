import {Student} from './inheritance.js';
import {Teatcher} from './inheritance.js';
import {Person} from './inheritance.js';
/////////////////////// Create New Student //////////////////////////////////////
var stu=new Student(3,'Ali',85);
console.log('Create Object Student....');
console.log("ID: "+stu.getId+", Name: "+stu.getName+', Average: '+stu.getAverage);
///////////////////// Create New Teatcher ///////////////////////////////////////
var teatcher=new Teatcher(1,'Ahmad',300);
console.log('Create Object Teatcher....');
console.log("ID: "+teatcher.getId+", Name: "+teatcher.getName+', Average: '+teatcher.getSalary);
//////////////////// polymorphism Example ///////////////////////////////////////
var person=new Person(5,'Ramy');
person.print();
person=stu;
//console.log(person instanceof Teatcher);
person.print();
person=teatcher;
person.print();
//////////////////// Call By Value ///////////////////////
var x=20;
console.log('Value Of X = '+x);
modify(x);
function modify(x){
    x=30;
}
console.log('Value Of X = '+x);
/////////////////// Call By Reference ///////////////////////
var obj={
    x:10,
}
console.log('Value Of Obj_X = '+obj.x);
modifyO(obj);
function modifyO(obj){
obj.x=50;
}
console.log('Value Of Obj_X = '+obj.x);
/////////////////////////////////////////////////////////////
