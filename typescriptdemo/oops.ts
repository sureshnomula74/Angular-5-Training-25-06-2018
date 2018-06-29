interface IBank{
    show():void
}
interface IEmp{
	showDetails():void
}
class Company {
	constructor(){
		console.log("I am Company super class")
	}
	Cname(){
		console.log("Company : Murthy Infotek")
	}
}
class Emp extends Company implements IEmp,IBank{
	constructor(public ename:string,public salary:number){
		super()
		this.ename=ename
		this.salary=salary		    
	}
    show(){
        console.log("I am Murthy")
    }
	showDetails(){
      super.Cname()
      console.log("Name : "+this.ename+" , Salary : "+this.salary)
      this.show(); 
	}
}
let e1:IEmp = new Emp("Murthy",4500)
e1.showDetails()
//e1.show();  // error



