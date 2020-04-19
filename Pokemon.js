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
        question:"This is a pyshic type pokemon introduced in Generation 1",
        a:"Hypnos",
        b:"Drowsy",
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


function changeQuestion(val)
 {
    document.getElementById("pic").src=set[val].pic;
    question.textContent=set[val].question;
    a.textContent=set[val].a;
    b.textContent=set[val].b;
    c.textContent=set[val].c;
    d.textContent=set[val].d;
 }
 function gameOver(marks)
 {
     //temporary alert
    alert("score is "+marks);
    //remove game
    game[0].style.display="none";
    //add count to score span
    p.textContent=marks;
    //display score
    score[0].style.display="block";
 }
var f=0,i=0,count=0;
function choice(ch)
 {
     if (set[i].ans===ch)
     {
        i++;
        count++;
     }
        if(i==5)
        {
            gameOver(count);
        }
            
        else
           changeQuestion(i);
 }   

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

 