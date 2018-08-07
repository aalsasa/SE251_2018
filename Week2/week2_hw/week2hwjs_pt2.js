var body = document.getElementsByTagName('body'); 
console.log(body)
var people =[
    {first:"Jason", last:"Vorhees", credit:"Friday the 13th"},
    {first:"Freddy", last:"Krueger", credit:"A Nightmare on Elm Street" },
    {first:"Roger", last:"Rabbit", credit:"Who Framed Roger Rabbit" },
    {first:"Kevin", last:"McCallister", credit:"Home Alone" },
    {first:"Godzilla", last:"King of The Monsters", credit:"Godzilla" },
    {first:"Buzz", last:"Lightyear", credit:"Toy Story" },
    {first:"Marion", last:"Cobretti", credit:"Cobra" }
]//an array of different values is set up with first, last and credit 
var str ="";//string variable is applied to replace everything else that was in the first part of the assignment 
for(i in people)//main for in 
{
    //str+= "<div id= '" + i + "' class = 'border'>";
    str+=`<div id='${i}' class='border'>`;//this is used to make an id and dv tag as well as apply the class and border that is in the html 

    for(value in people[i])//second for in now with the values inside the array applied 
    {
        str +="<p>";//string is popped up first with a p tag
        str +=people[i][value];//values of what's inside the array is places so it can be called upon
        str +="</p>";//finishing p tag
       
    }
    str+="</div>"//div is finally closed up 
     
}

body[0].innerHTML = str;//the innner bodyhtml is referenced straight up 



//Copyright Ahmed Alsasa donut steel 
