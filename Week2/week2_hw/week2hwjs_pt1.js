var body = document.querySelector('body'); //the body is called up to make it in the HTML document 

var people =[
    {first:"Jason", last:"Vorhees", credit:"Friday the 13th"},
    {first:"Freddy", last:"Krueger", credit:"A Nightmare on Elm Street" },
    {first:"Roger", last:"Rabbit", credit:"Who Framed Roger Rabbit" },
    {first:"Kevin", last:"McCallister", credit:"Home Alone" },
    {first:"Godzilla", last:"King of The Monsters", credit:"Godzilla" },
    {first:"Buzz", last:"Lightyear", credit:"Toy Story" },
    {first:"Marion", last:"Cobretti", credit:"Cobra" }
]//the array in which the values of the first, last and credit are put in 

for(i in people)//for the values of people, it will be called in a for loop
{
    
    var tempDiv= document.createElement('div');//temporary div variable. as the name implies it will have a div tag by using the createelement document 
    for(value in people[i])//inner for loop with the values of the variable people are placed in
    {
        var node= document.createTextNode(people[i][value]); //a text node is created based on what's inside the var people 
        var p=document.createElement('p'); //p tags or paragraph tags are later on created with the variable p
        p.appendChild(node); //the paragrpah afterwards references node
        tempDiv.appendChild(p); //append child makes a reference towards the paragraph variable within the temporary div
    }
    
    body.appendChild(tempDiv); //the body is called upon and it references the temp div
    tempDiv.setAttribute("id", i);//an id attribute is made with the array
    tempDiv.setAttribute("class", "border"); //a set of border classes are made with the class and border attribute via the tempdiv
}




