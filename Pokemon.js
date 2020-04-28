var question=document.getElementById("q");
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var d=document.getElementById("d");
var p=document.getElementById("sc");

var game=document.getElementsByClassName("game");
var start=document.getElementsByClassName("start");
var score=document.getElementsByClassName("score");

var set=[
    {
        pic:"https://img.pokemondb.net/artwork/poliwhirl.jpg",
        question:"This is a Water type Pokémon introduced in Generation 1. It is known as the Tadpole Pokémon",
        a:"Squirtle",
        b:"Poliwrath",
        c:"Poliwhirl",
        d:"Gyarados",
        ans:"c"
    },
    {
        pic:"https://img.pokemondb.net/artwork/drowzee.jpg",
        question:"This is a pyshic type Pokémon introduced in Generation 1",
        a:"Hypnos",
        b:"Drowzee",
        c:"Kadabra",
        d:"Mr.Mime",
        ans:"b"
    },
    {
        pic:"https://img.pokemondb.net/artwork/metapod.jpg",
        question:"The shell covering this Pokémon's body is as hard as an iron slab. It evolves into Butterfree",
        a:"Catepie",
        b:"Metapod",
        c:"Kakuna",
        d:"Beedrill",
        ans:"b"
    },
    {
        pic:"https://img.pokemondb.net/artwork/bellsprout.jpg",
        question:"It is a grass type Pokémon that evovles into Weepinbell.",
        a:"Bellsprout",
        b:"Bulbasaur",
        c:"Bloom",
        d:"Vulpix",
        ans:"a"
    },
    {
        pic:"https://img.pokemondb.net/artwork/geodude.jpg",
        question:"The longer this Pokémon lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
        a:"Rhyperion",
        b:"Geodude",
        c:"Golem",
        d:"Blastoise",
        ans:"b"
    },
    {
        pic:"https://img.pokemondb.net/artwork/bellossom.jpg",
        question:"When this Pokémon gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around",
        a:"Stauyu",
        b:"Chikorita",
        c:"Bellossom",
        d:"Butterfree",
        ans:"c"
    },
    {
        pic:"https://img.pokemondb.net/artwork/psyduck.jpg",
        question:"This Pokémon is consatntly severe headaches and its most poweful attack is Consusion Wave",
        a:"Hitmonlee",
        b:"Psyduck",
        c:"Squirtle",
        d:"Pikachu",
        ans:"b"
    },
    {
        pic:"https://img.pokemondb.net/artwork/poliwag.jpg",
        question:"This is a water type Pokémon whose spiral innards are visible right through the skin",
        a:"Goldeen",
        b:"Poliwhirl",
        c:"Staryu",
        d:"Poliwag",
        ans:"d"
    },
    {
        pic:"https://img.pokemondb.net/artwork/vileplume.jpg",
        question:"It has toxic pollen that triggers atrocious allergy attacks",
        a:"Gloom",
        b:"Oddish",
        c:"Bloom",
        d:"Vileplume",
        ans:"d"
    },
    {
        pic:"https://img.pokemondb.net/artwork/articuno.jpg",
        question:"A legendary pokemon that is said to appear to doomed people who are lost in icy mountains",
        a:"Articuno",
        b:"Froslasa",
        c:"Glaceon",
        d:"Vulpix",
        ans:"a"
    }
];

var time;
function changeQuestion(val)
 {
     $(a).css("backgroundColor","#2bbbad");
     $(b).css("backgroundColor","#2bbbad");
     $(c).css("backgroundColor","#2bbbad");
     $(d).css("backgroundColor","#2bbbad");
     $(skip).css("backgroundColor","#2bbbad");
    document.getElementById("pic").src=set[val].pic;
    question.textContent=set[val].question;
    a.textContent=set[val].a;
    b.textContent=set[val].b;
    c.textContent=set[val].c;
    d.textContent=set[val].d;
 }

 function gameOver(marks)
 {
    //remove game
    game[0].style.display="none";
    //add count to score span
    p.textContent=marks;

    //display score
    score[0].style.display="block";

    clearInterval(time);
 }

var f=0,i=0,count=0;

function choice(ch)
 {  //if skipped,do nothing

    //correct choice
     if (set[i].ans===ch)
     {
        //color of correct id to green
        
        $('#'+ch).css("backgroundColor", "green");
        console.log("correct answer"+ch);
        //increase score 
        count++;
     }

     //wrong choice
    else
     {

        //color of chosen to red
        $('#'+ch).css("backgroundColor", "red");
        console.log("wrong choice");

        //color of correct id to green
        $('#'+set[i].ans).css("backgroundColor", "green");
        console.log("the right answer "+set[i].ans);
    }
     i++;
     
     if(i==9)
        {
           gameOver(count);
        }  
    else
        {
            time=setInterval(()=>changeQuestion(i),2000);
        }
        
        
           
 } //end of choice  

function startGame()
 {
     //hide class start
        start[0].style.display="none";
     //show class game
       game[0].style.display="block";
     //intialize questions
        changeQuestion(0);
        document.getElementById("pic").src=set[0].pic;
 }
 
 //initailly hide normal content
game[0].style.display="none";
score[0].style.display="none";

 
