//Constructor with 2 static Variables AND 5 INSTANCE VARIABLES
class college{
    static college ="SBIT"
    static Department="Ece"
    constructor(Name,RollNumber,Cgpa,Backlogs,Year){
        this.Name=Name
        this.RollNumber=RollNumber
        this.Cgpa=Cgpa
        this.Backlogs=Backlogs
        this.Year=Year
    }
    branch(){
        console.log("Student Colege =",college.college );
        console.log("Student Department =",college.Department);
        console.log("Name of the Student = ",this.Name);
        console.log("Student Roll Number = ",this.RollNumber);
        console.log("student Cgpa = ",this.Cgpa);
        console.log("Number of BackLogs =",this.Backlogs);
        console.log("Student year = ",this.Year);    
        
    }
}
let s1=new college("Venu","22M61A0419",7.75,5,"Final Year")
s1.branch()
console.log("-------------");
let s2=new college("Nithis","23m61ao419",8.0,2,"Third Year")
s2.branch()
let s3=new college("Sai","24m61ao419",6.5,0,"1st year")
s3.branch()
