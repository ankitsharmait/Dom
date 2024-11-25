// Step1:-How can we access the html element
//  finding html element by id :- document.getElementById("idname");
//  finding html element by class :- document.getElementsByClassName("name");
//  finding html element by tag name :- document.getElementsByTagName("name");
//  finding html element by css selector :- document.querySelector("name");


// const mybody = document.body;

// console.log(mybody); //selecting whole body

//  const box2=document.getElementById('box-2');//selecting second box by it's id name
//  console.log(box2);

//  const boxes=document.getElementsByClassName('box');//selecting box with class name box
//  console.log(boxes); // we get array of box because multiple boxes with class name =box;

//  const pname = document.getElementsByTagName('p');
//  console.log(pname);// geting element by tag name


//  const box = document.querySelector(".box");
//  console.log(box);// we are using document.querySelector(".box"), which only selects the first element that matches the given CSS selector.

//  // if we want to select all boxes having classs name =box then we have to use document.querySelectorAll(".box");
//  const allBoxes = document.querySelectorAll(".box");
//  console.log(allBoxes);

/*********************************************************************************************** */
// Above we have done with the selection process now, we are going to see modification on the html Element

                      /*Modification of Html Element*/
//   1:- changing html content using inner html
  const box1= document.getElementById('box-1');
//   box1.innerHTML="<h1> box-1</h1>"//we can give inner html any type
  box1.innerHTML="hello box";

//    2:- changing html attributes value
 const box2 = document.getElementById('box-2');
 box2.style.backgroundColor='red';  //style Property(JavaScript)-A DOM property to modify inline styles
 
   //we can also change source i,e src
   // document.getElementById('myimage').src="img2.jpg";
/*************************************************************************************************************/

           /*Creating And appending new element using js */
            
           const newpara=document.createElement("p");
           newpara.innerText="Brand new para";
           
        //now we have to append in any existing element
        const container = document.getElementById("container");
        container.append(newpara);


      





