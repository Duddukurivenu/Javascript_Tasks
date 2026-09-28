// Named functions in objects without input and without Return
// let IPL={
//     Teams:{
//         SRH:"Hyderabad",
//         RCB:"Benguluru",
//         CSK:"Chennai",
//         MI:"Mumbai",
//         DC:"Delhi",
//         Captains:function cap(){
//            let caps={
//                     SRH:"Pat Cummins",
//                     RCB:"Patidar",
//                     CSK:"Ruturaj",
//                     MI:"Hardik Pandya",
//                     DC:"Axar Patel",
//             }
//             console.log(caps);
            
//         }
        
//     }
    
// }
// IPL.Teams.Captains()
// console.log(TollyWood.Movies.Ramcharan);

// Named Functions inside object with Input without Return

// let TollyWood={
//     Movies:{
//         Dhruva:"Ramcharan",
//       Jersy:  "Nani",
//       julayi:  "Alluarjun",
//        Brundavanam :"NTR",
//         Chatrapathi:"Prabhas",
//       Pokiri :"MaheshBabu",
//       hero:function Names(Chiru,Balayya,NAgking,venkyMAMA){
//       let  m={
//           Chiru,
//           Balayya,
//           NAgking,
//           venkyMAMA
//         }
//         console.log(m)
//       }
//     }
    
// }
// TollyWood.Movies.hero("Indra","Akanda","MASS","NV NAK NAchhav")

//NAmed Function Without Input and with Return

// let library={
//     address:{
//         venue:"khamamm",
//         pincode:507204,
//         state:"telangana",
//         distict:"KMM",
//         librayian:function venu(){
//           let  Details={
//             NAme:"Venu",
//             age:21,
//             experience:"10years"

//             }
//             return Details
//         }
//     }
// }
// console.log(library.address.librayian());

//named function with input and with Return

// let ecosystm={
//     Animals:{
//         "Wild Animals" :{
//             Tiger:"NoN vegetarian",
//             Cow:"Grass",
//             peacock:"Nuts",
//             colors: function cl(Elephnt,Horse,goat,lion){
//                 l={
//                     Elephnt:Elephnt,
//                     Horse:Horse,
//                     goat:goat,
//                     lion:lion
//                 }
//                 return console.log(l);
                
                
//             }

//         }
//     }
// }
// ecosystm.Animals["Wild Animals"]["colors"]("MAt BLACk","red","white","Yellow");

//Annomuys function without input and without Return

// let Games ={
//     cricket:{
//         Players:11,
//         venue:"RAjiv Gandhi",
//         Time:"7:30",
//         "players Names": function (){
//           let  Names ={
//                 Abhishek:4,
//                 Ishan:19,
//                 NKR:10,
//                 KLASEEN:45,
//                 HEAD:29,
//                 SALIL:12,
//                 PAT:30

//             }
//         console.log(Names)

           
//         }
            

//     }
// }
// Games.cricket["players Names"]()

//with input without return
// let Hospitals ={
//     Yashoda:"Yeragadd",
//     Apollo:"KPHB",
//     Arka:"Khammam",
//     mamatha:"Warngal",
//     docters:function (Cariologist,Dermatolist,Neurologist,orthopedic){
//     let n={  Cariologist,
//     Dermatolist,
//     Neurologist,
//     orthopedic
// }
//    console.log(n);

//     }
// }
// Hospitals.docters("venu","sai","ram","nithish")

// without input and with return
// let department ={
//     theft:"police Inspector",
//     cybercrime:"Cyber Crime Officer",
//     murder:"Detective ",
//     fraud:"crime Branch officer",
//     officers: function (){
//         return {
//             mandal:"SI",
//             TOWN:"CI",
//             SUBDIVISION:"DSP",
//             DISTRICT:"DSP",
//             ZONE:"IG",
//             STATE:"DGP"
//         }

//     }
// }
// console.log(department.officers());

//WITH RETURN AND INPUT

// let shop ={
//     electronics :{
//         mobile:25000,
//         laptop:55000,
//         headphones:1500
//     },
//     clothing:{
//         shirt:800,
//         jeans:1700,
//         shoes:2500,
//         types:function (sleeve,fullhands,doublepockets ){
//             return{
//                 sleeve,
//                 fullhands,
//                 doublepockets
//             }
//         }
//     }

// }
// console.log(shop.clothing.types(2000,3500,1000));

//Arrow function without input and without return

// let fancyshop ={
//     jewellery:{
//         necklace:{
//             necklece:{
//                 name:"Gold Necklce",
//                 cost:25000,
//                 Material:"Gold",
//                 "ear rings": () =>{
//                     let l={
//                         diamondEarrings:15000,
//                         "jhumka":20000,
//                         huggie:25000,
//                         "Drop Earrings":300000,

//                     }  
//                     console.log(l);
                    
//                 }

//             }
//         }
//     }
// }
// fancyshop.jewellery.necklace.necklece["ear rings"]()

// with input without return

// let person ={
//     Name:"venu",
//     address:{
//         village:"Allapdu",
//         mondal:"Bonakal",
//         district:"Khamamm",
//         state:"Telangana",
//         Education:{
//             School:"KVM ZPSS",
//             INTER:"sMJC",
//             "B.TECH":"SBIT",
//             HOBBIES:(READING,watching,PLAYING)=>{
//                 let k={
//                     READING,
//                     watching,
//                     PLAYING
//                 }
//                 console.log(k);
                

//             }
//         }
//     }
// }
// person.address.Education.HOBBIES("Books","Movies","Cricket")

//WITHOUT INPUT WITH RETURN

// let inno={
//     courses:{
//         FSD:"Fullstack Develeopment",
//         Datscience:"Data Science",
//         DA:"Data Analytics",
//         Fees:()=>{
//             return{
//                 FSD:80000,
//                 "Data Science":100000,
//                 "Data Analytics":47000
//             }

//         }


//     }
// }
// console.log(inno.courses.Fees());

//with input with return

// let government ={
//     village:{
//         wards:"Wards Member",
//         sarpanch:"Main Person",
//         Mondal:{
//             Representative:"zptc",
//             "constitution":(madhira,khammam,wyra,siddept)=>{
//                 return{
//                     madhira,
//                     khammam,
//                     wyra,
//                     siddept
//                 }
                
//             }
//         }
//     }

// }
// console.log(government.village.Mondal["constitution"]("BAtti","Thummala","NAyak","Harishrao"))

//objects inside functions end here....

// // // Deeply Nested Objects
// // Object Creation
// let Telugu_industry = {
//     Hero_1: "Prabhas",
//     H1_Movies: {
//         Movie_1: {
//             "N@me": "Baahubali 2: The Conclusion",
//             Year: 2017,
//             Collection: {
//                 "N@me": "Meldoy",
//                 City: "Vizag",
//                 "Total collection world wide": "1810cr"
//             }
//         },
//         Movie_2: {
//             "N@me": "Kalki 2898 AD",
//             Year: 2024,
//             Collection: "1100cr"
//         },
//         Movie_3: {
//             "N@me": "Salaar: Part 1 Ceasefire",
//             Year: 2023,
//             Collection: "800cr"
//         },
//         Movie_4: {
//             "N@me": "Baahubali: The Beginning",
//             Year: 2015,
//             Collection: "700cr"
//         },
//         Movie_5: {
//             "N@me": "Adipurush",
//             Year: 2023,
//             Collection: "400cr"
//         }
//     },
//     Hero_2: "Allu Arjun",
//     H2_Movies: {
//         Movie_1: {
//             "N@me": "Pushpa 2",
//             Year: 2024,
//             Collection: "1800cr"
//         },
//         Movie_2: {
//             "N@me": "Pushpa 1",
//             Year: 2021,
//             Collection: "400cr"
//         },
//         Movie_3: {
//             "N@me": "Ala Vaikunthapurramuloo",
//             Year: 2020,
//             Collection: "300cr"
//         }
//     },
//     Hero_3: "Jr NTR",
//     H3_Movies: {
//         Movie_1: {
//             "N@me": "RRR",
//             Year: 2022,
//             Collection: {
//                 Theatre: {
//                     "N@me": "Sudarshan 35MM",
//                     city: "Hyderbad",
//                     "Total Collection world wide": "1400cr"
//                 }
//             }
//         },
//         Movie_2: {
//             "N@me": "Devara: Part 1",
//             Year: 2024,
//             Collection: "380cr",
//         }
//     },
//     Hero_4: "Ram Charan",
//     H4_Movies: {
//         Movie_1: {
//             "N@me": "RRR",
//             Year: 2022,
//             Collection: {
//                 "N@me": "Sudarshan 35MM",
//                 city: "Hyderbad",
//                 "Total Collection world wide": "1400cr"
//             }
//         },
//         Movie_2: {
//             "N@me": "Peddi",
//             Year: 2026,
//             Collection: "350cr"
//         },
//         Movie_3: {
//             "N@me": "Rangasthalam",
//             Year: 2018,
//             Collection: "220cr"
//         }


//     }
// }
// console.log(Telugu_industry);
// // CRUD operation
// //retriving or accessing(Dot Notation)
// console.log(Telugu_industry.H1_Movies.Movie_1.Year);
// console.log(Telugu_industry.H3_Movies.Movie_2.Collection);
// console.log(Telugu_industry.H4_Movies.Movie_1.Collection.city);
// //retriving or accessing(Square bracket notation)
// console.log(Telugu_industry.H4_Movies.Movie_1.Collection["Total Collection world wide"]);
// console.log(Telugu_industry.H1_Movies.Movie_2["N@me"]);
// console.log(Telugu_industry.H4_Movies.Movie_1["N@me"]);
// // Updation
// console.log(Telugu_industry.H1_Movies.Movie_1.Collection["Total collection world wide"] = "1900cr");
// console.log(Telugu_industry.H1_Movies.Movie_1.Collection);
// // delete
// delete Telugu_industry.H3_Movies.Movie_1.Collection.city
// delete Telugu_industry.H2_Movies.Movie_1
// console.log(Telugu_industry.H3_Movies.Movie_1.Collection);
// console.log(Telugu_industry.H2_Movies);





