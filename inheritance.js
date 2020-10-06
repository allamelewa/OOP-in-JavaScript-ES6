///////////////////////// Class Person //////////////////////////////////

export class Person{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.name=name
    }
    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }
    print(){
        console.log('The Person ID: '+this.id+", Name: "+this.name);
    }
}
////////////////////////// Class Student ////////////////////////////////////

export class Student extends Person{
    constructor(id,name,average){
        super(id,name);
        this.average=average;
    }
    setAverage(average){
        this.average=average;
    }
    get getAverage(){
        return this.average;
    }
    print(){
        console.log('The Student ID: '+this.getId+', Name: '+this.getName+', Average: '+this.average);
    }
}
////////////////////// Class Teatcher ///////////////////////////////////////
export class Teatcher extends Person{
    constructor(id,name,salary){
        super(id,name);
        this.salary=salary;
    }
   setSalary(salary){
       this.salary=salary;
   }
   get getSalary(){
       return this.salary;
   }
   print(){
       console.log('The Teatcher ID: '+this.getId+', Name: '+this.getName+', Salary: '+this.salary);
   }
}