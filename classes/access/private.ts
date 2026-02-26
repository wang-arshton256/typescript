class Student{
    private _name: string = "John";
    
    display() {
        console.log(this._name);
    }

    get name(): string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    };
}
    
var student = new Student();
student.name = "Wangutusi";
console.log(student.name);

