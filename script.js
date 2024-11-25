// Step1:-How can we access the html element
//  finding html element by id :- document.getElementById("idname");
//  finding html element by class :- document.getElementsByClassName("name");
//  finding html element by tag name :- document.getElementsByTagName("name");
//  finding html element by css selector :- document.querySelector("name");


const mybody = document.body;

console.log(mybody); //selecting whole body

 const box2=document.getElementById('box-2');//selecting second box by it's id name
 console.log(box2);

 const boxes=document.getElementsByClassName('box');//selecting box with class name box
 console.log(boxes); // we get array of box because multiple boxes with class name =box;

 const pname = document.getElementsByTagName('p');
 console.log(pname);// geting element by tag name


 const box = document.querySelector(".box");
 console.log(box);// we are using document.querySelector(".box"), which only selects the first element that matches the given CSS selector.

 // if we want to select all boxes having classs name =box then we have to use document.querySelectorAll(".box");
 const allBoxes = document.querySelectorAll(".box");
 console.log(allBoxes);

/*********************************************************************************************** */




