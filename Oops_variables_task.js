class college{
    static college ="SBIT"
    static Department="Ece"
    course(Name,RollNumber,Cgpa,Backlogs,Fav_sub){
        this.Name=Name
        this.RollNumber=RollNumber
        this.Cgpa=Cgpa
        this.Backlogs=Backlogs
        this.Fav_sub=Fav_sub
    }
    branch(){
        console.log("Student Colege =",college.college );
        console.log("Student Department =",college.Department);
        console.log("Name of the Student = ",this.Name);
        console.log("Student Roll Number = ",this.RollNumber);
        console.log("student Cgpa = ",this.Cgpa);
        console.log("Number of BackLogs =",this.Backlogs);
        console.log("Student Fav Sub = ",this.Fav_sub);    
        
    }

}
let obj=new college()
obj.course("Venu","22M61A0419",7.75,5,"EMTL")
obj.branch()
console.log("-------------");

let s2=new college
s2.course("Nithis","22m61ao419",8.0,2,"DLD",)
s2.branch()
console.log("---------------");

let s3=new college
s3.course("Sai","22m61A0419",9.0,0,"Telugu")
s3.branch()

console.log("----------------------");


console.log("----Example 2----------");

class Patient {
    static hospitalName = "Apollo Hospital";
    static emergencyNumber = 108;

    details(patientName,age,disease,doctorName,roomNumber){
    this.patientName=patientName;
    this.age=age
    this.disease=disease;
    this.doctorName=doctorName;
    this.roomNumber=roomNumber;
    }
    cons() {
      console.log("patient Hospital Name =",Patient.hospitalName);
      console.log("patient Emergency NUmber =",Patient.emergencyNumber);
      console.log("Patient Name =",this.patientName);
      console.log("Patient Age =",this.age);
      console.log("Patient diease =",this.disease);
      console.log("Patient DocterName =",this.doctorName);
      console.log("Patient roomNumber =",this.roomNumber);
        
    }
}

let patient1 = new Patient()
patient1.details("akhil",25,"cancer","Dr Vikranth",10)
patient1.cons()
console.log("-----");
let patient2 = new Patient()
patient2.details("Bhanuprasad",29,"dengue","Dr Vineela",6)
patient2.cons()
console.log("-----");
let patient3 = new Patient()
patient3.details("Anushka",39,"Heartattak","Dr Gangothri",13)
patient3.cons()

console.log("----Example 3----------");

class Voting { 
    static electionName = "General Election"; 
    static minimumAge = 18
    details(voterName, age, voterId, constituency, candidateName) {
        this.voterName = voterName
        this.age = age
        this.voterId = voterId;
        this.constituency = constituency
        this.candidateName = candidateName; }
        cons() { 
            console.log("Election Name =", Voting.electionName); 
             console.log("Minimum Voting Age =", Voting.minimumAge)
             console.log("Voter Name =", this.voterName)
             console.log("Voter Age =", this.age) 
             console.log("Voter ID =", this.voterId); 
             console.log("Constituency =", this.constituency)
             console.log("Candidate Name =", this.candidateName) } 
            } 
            let voter1 = new Voting()
            voter1.details("pradeep", 25, "VOT101", "Khammam", "Ravi");
            voter1.cons()
            console.log("-----")
            let voter2 = new Voting();
            voter2.details("BhanuPravalika", 29, "VOT102", "Hyderabad", "Suresh"); 
            voter2.cons() 
            console.log("-----")
            let voter3 = new Voting() 
            voter3.details("Amulyaa", 19, "VOT103", "Warangal", "Priya"); 
            voter3.cons()




