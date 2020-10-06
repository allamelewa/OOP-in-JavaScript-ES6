import {Student} from './inheritance.js';
import {Teatcher} from './inheritance.js';
import {Person} from './inheritance.js';
/////////////////////// Create New Student /////////////////////////////////////
var stu=new Student(3,'Ali',85);
console.log('Create Object Student....');
console.log("ID: "+stu.getId+", Name: "+stu.getName+', Average: '+stu.getAverage);
///////////////////// Create New Teatcher ///////////////////////////////////////
var teatcher=new Teatcher(1,'Ahmad',300);
console.log('Create Object Teatcher....');
console.log("ID: "+teatcher.getId+", Name: "+teatcher.getName+', Average: '+teatcher.getSalary);
///////////////////////////////////////
var person=new Person(5,'Ramy');
person.print();
person=stu;
person.print();
person=teatcher;
person.print();