
//Hierachical Example 1 
class Hospital {
    hospitalDetails() {

        console.log("Hospital:","Mamatha Super speciality")
        console.log("Location:", "Khammam")
    }
}

class Doctor extends Hospital {
    doctorDetails() {
        console.log("I am a Doctor")
        console.log("I treat patients")
    }
}

class Nurse extends Hospital {
    nurseDetails() {
        console.log("I am a Nurse")
        console.log("I take care of patients")
    }
}

let d1 = new Doctor()
d1.hospitalDetails()
d1.doctorDetails()

console.log("----------------")

let n1 = new Nurse()
n1.hospitalDetails()
n1.nurseDetails()

console.log("----------------")


//Example 2 without Constructor 

class Company {

    companyName = "TCS"

    companyDetails() {
        console.log("Company =", this.companyName)
    }
}

class Developer extends Company {

    developerWork() {
        console.log("Developer writes code")
    }
}

class Tester extends Company {

    testerWork() {
        console.log("Tester tests the application")
    }
}

let d2 = new Developer()
d2.companyDetails()
d2.developerWork()
console.log("----------------")
let t1 = new Tester()
t1.companyDetails()
t1.testerWork()
console.log("----------------")
//Hierachical Example 1 with Constructor 
class Account{
    constructor(UserName,Followers){
        this.UserName=UserName
        this.Followers=Followers
    }
    AccountDet(){
        console.log("UserName = ",this.UserName);
        console.log("Number of Followers = ",this.Followers)
            
    }
}
class Instagram extends Account{
    constructor(UserName,Followers,ChatBox){
        super(UserName,Followers)
        this.ChatBox=ChatBox
    }
    instadetails(){
        super.AccountDet()
        console.log("In InstaGram We can chat =",this.ChatBox)
        
    }
}
class youtube extends Account{
    constructor(UserName,Followers,Videos){
        super(UserName,Followers)
        this.Videos=Videos
    }
    youtubeDet(){
        super.AccountDet()
        console.log("Youtube Has ",this.Videos,"Feature")
        
    }
}
let ex1 =new Account("Venu",234)
ex1.AccountDet()
console.log("----------------")
let child1=new Instagram("NameisNani","34M","Hii How Are You ?")
child1.instadetails()
console.log("----------------")
let child2 =new youtube("Telusuko","100M","Python Full Course")
child2.youtubeDet()


//Hierachical Example 2 with Constructor

class PoliticalParty {

    constructor(partyName,Symbol) {
        this.partyName = partyName
        this.Symbol=Symbol
    }

    partyDetails() {
        console.log("Party Name =", this.partyName)
        console.log("Party Symbol =",this.Symbol)
        
    }
}

class MLA extends PoliticalParty {

    constructor(partyName,Symbol, constituency) {
        super(partyName,Symbol)
        this.constituency = constituency
    
    }

    mlaDetails() {
        super.partyDetails()
        console.log("Constituency =", this.constituency)
    }
}

class MP extends PoliticalParty {

    constructor(partyName,Symbol, constituency) {
        super(partyName,Symbol)
        this.constituency = constituency
    }

    mpDetails() {
        super.partyDetails()
        console.log("Parliament Constituency =", this.constituency)
    }
}
console.log("----------------")
let mla1 = new MLA("ABC Party","Car", "Khammam")
mla1.mlaDetails()

console.log("----------------")

let mp1 = new MP("ABC Party","Car", "Warangal")
mp1.mpDetails()
console.log("----------------")

class CricketTeam {
    constructor(teamName, captain) {
        this.teamName = teamName
        this.captain = captain
    }

    teamDetails() {
        console.log("Team Name =", this.teamName)
        console.log("Captain =", this.captain)
    }
}

class Batsman extends CricketTeam {

    constructor(teamName, captain, runs) {
        super(teamName, captain)
        this.runs = runs
    }

    batsmanDetails() {
        super.teamDetails()
        console.log("Total Runs  Scored By Batamen =", this.runs)
    }
}

class Bowler extends CricketTeam {

    constructor(teamName, captain, wickets) {
        super(teamName, captain)
        this.wickets = wickets
    }

    bowlerDetails() {
        super.teamDetails()
        console.log("Total Wickets By Bowler =", this.wickets)
    }
}

let b1 = new Batsman("India", "Rohit Sharma", 12000)
b1.batsmanDetails()
console.log("----------------")

let b2 = new Bowler("India", "Rohit Sharma", 350)
b2.bowlerDetails()
console.log("----------------")