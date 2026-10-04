class IPL {
    static LeagueName = "Indian Premier League";
    static Country = "India";

    constructor(teamName, captain, coach, homeGround, trophies, matches) {
        this.TeamName = teamName
        this.Captain = captain
        this.Coach = coach
        this.HomeGround = homeGround
        this.Trophies = trophies
        this.Matches = matches
    }

    details() {
        console.log("League Name =", IPL.LeagueName)
        console.log("Country =", IPL.Country)
        console.log("Team Name =", this.TeamName)
        console.log("Captain =", this.Captain)
        console.log("Coach =", this.Coach)
        console.log("Home Ground =", this.HomeGround)
        console.log("Trophies =", this.Trophies)
        console.log("Matches =", this.Matches)
    }
}

console.log("------------------------")


let team0=new IPL("Royal Challengers Benguluru","Rajat Patidar","Dinesh karthik","Chinnaswamy",2,280)

team0.details()

let team1 = new IPL("Sunrisers Hyderabad","Pat Cummins","Daniel Vettori","Rajiv Gandhi Stadium",1,250
);

team1.details()

console.log("------------------------")

let team2 = new IPL("Chennai super Kings","ruturaj Gaikwad","stephen Fleming","Chidambaram Stadium",5,260);

team2.details();

console.log("--------class2 Example--------")
class Police{
    static State="Telangana"
    static Department="Police"
    constructor(Name,Age,Designation,Station,Years_of_Experience,Badge_Number){
        this.Name=Name
        this.Designation=Designation
        this.Station=Station
        this.Age=Age
        this.Years_of_Experience=Years_of_Experience
        this.Badge_Number =Badge_Number
    }
    DetailsDisplay(){
        console.log("State = "+Police.State)
        console.log("Department of = "+Police.Department)
        console.log("Name of The Police = "+this.Name)
        console.log("Age of The person = "+this.Age )
        console.log("Designation = "+this.Designation)
        console.log("Name of The Sation = "+this.Station)
        console.log("Name of The Police = "+this.Years_of_Experience)
        console.log("Badge Number = "+this.Badge_Number)
    }
}
console.log("---details")
let t1=new Police("Vishnu",40,"DSp","Hyderabad","12 years","TG100")
t1.DetailsDisplay()
console.log("--------")

console.log("---details2---")

let t2=new Police("Uday",30,"CI","Madhira","5 years","TG120")
t2.DetailsDisplay()

console.log("--------")

console.log("---details3---")
let t3=new Police("Akhila",35,"SI","Khammam","12 years","TG123")
t3.DetailsDisplay()

console.log("--------------------------------------------------------");

class Patient {
    static HospitalName = "Apollo Hospital"
    static EmergencyNumber = 108
    constructor(patientName,age,disease,doctorName,roomNumber,adimission_Date){
    this.PatientName=patientName
    this.Age=age
    this.Disease=disease
    this.DoctorName=doctorName
    this.RoomNumber=roomNumber;
    this.adimission_Date=adimission_Date
    }
    cons() {
      console.log("patient Hospital Name =",Patient.HospitalName)
      console.log("patient Emergency NUmber =",Patient.EmergencyNumber)
      console.log("Patient Name =",this.PatientName)
      console.log("Patient Age =",this.Age)
      console.log("Patient diease =",this.Disease)
      console.log("Patient DocterName =",this.DoctorName)
      console.log("Patient roomNumber =",this.RoomNumber);
      console.log("Admission Date of Patient = "+this.adimission_Date)
      
        
    }
}
console.log("------------------------------")
let patient1 = new Patient("akhil",25,"cancer","Dr Vikranth",10,"20-09-2026")
patient1.cons()
console.log("------------------------------")
let patient2 = new Patient("Bhanuprasad",29,"dengue","Dr Vineela","12-09-2026")
patient2.cons()
console.log("-------------------------")
let patient3 = new Patient("Anushka",39,"Heartattak","Dr Gangothri",13,"28-08-2026")
patient3.cons()





