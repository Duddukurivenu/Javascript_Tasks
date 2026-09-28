let TollyWood={
    Movies:{
        Dhruva:{
            Hero:{
                Name:"Ramcharan",
                NumberofMovies:15,
                Filmindustry:"TFI",
                Blockbuster:"4 Movies",
            },
            Heroine:"Rakul",
            movieRealsed:"2017",
            Budget:"30 cr",
            profit:"100 cr"

        },
        Jersy:"Nani",
        julayi:"Alluarjun",
        Brundavanam :"NTR",
        Chatrapathi:"Prabhas",
        Pokiri :"MaheshBabu",
        heros:{
          Chiru,
          Balayya,
          NAgking,
          venkyMAMA
        }
    }
    
}
//retriving
console.log(TollyWood.Movies.Dhruva);
console.log(TollyWood.Movies.Dhruva.Hero);
console.log(TollyWood.Movies.Dhruva.Heroine);
console.log(TollyWood.Movies.Dhruva.movieRealsed)
console.log(TollyWood.Movies.Dhruva.Hero.NumberofMovies);

//Upadating
TollyWood.Movies.Dhruva.movieRealsed="2016"
TollyWood.Movies.Dhruva.movieRealsed.Intheaters="40 days"
TollyWood.Movies.Dhruva.movieRealsed
TollyWood.Movies.Dhruva.Hero.NumberofMovies="16"
console.log(TollyWood.Movies.Dhruva.movieRealsed);
console.log(TollyWood.Movies.Dhruva.movieRealsed.Intheaters);
console.log(TollyWood.Movies.Dhruva.movieRealsed);
console.log(TollyWood.Movies.Dhruva.Hero.NumberofMovies);

//deleting
delete TollyWood.Movies.Dhruva.movieRealsed
delete TollyWood.Movies.Dhruva.movieRealsed.Intheaters
delete TollyWood.Movies.Dhruva.movieRealsed
delete TollyWood.Movies.Dhruva.Hero.NumberofMovies

let IPL={
    Teams:{
        SRH:"Hyderabad",
        RCB:"Benguluru",
        CSK:"Chennai",
        MI:"Mumbai",
        DC:"Delhi",
        Captains:{
                    SRH:{
                        opener:{
                             abhishek:"LeftHand BatsMan",
                             jersy:4,
                             Nationality:"Indian" ,
                             Runs:3456,
                             mathes:124       
                        },
                        Finisher:"Klaseen",
                        Bowler:"BHuvi",
                        Allrounder:"Nithsh Reddy",

                    },
                    RCB:{
                        captain:"Patidar"
                    },
                    CSK:"Ruturaj",
                    MI:"Hardik Pandya",
                    DC:"Axar Patel",
            }
            
        }
        
    }
    
// Retriving
console.log(IPL.Teams.Captains);
console.log(IPL.Teams.Captains.SRH.opener);
console.log(IPL.Teams.RCB);
// updating
IPL.Teams.Captains.RCB.Batsman="Virat Kohli"
console.log(IPL.Teams.Captains.RCB.Batsman);
IPL.Teams.Captains.Punjab="Shreyas Iyer"
IPL.season=20
console.log(IPL);

//deleting
delete IPL.Teams.Captains.RCB.Batsman
console.log(IPL.Teams.Captains.RCB);
delete IPL.Teams.Captains.Punjab
IPL.season
console.log(IPL);



















    
