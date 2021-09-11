// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//  <h1>hello world!!</h1>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//*** ==>6.

// const React = require('react');
// const ReactDOM = require('react-dom');

// import React from "react";
// import ReactDOM from "react-dom";

// to render(show content)
// ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById('root'));

// pure react in babelcompiler

// "use strict";
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World!!"), document.getElementById('root'));

// pure javascript
// overwrite thy jase

// var h1 = document.createElement('h1');
// h1.innerHTML = "my name is krunal gangani";
// document.getElementById('root').appendChild(h1);//h1 child add thy jse

// *** ==>7.

// for render multiple element in ReactDOM.render() method

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>thapa technical</h1>
//     <p>plz subscribe our chennal on youtube</p>
//     <h2>i will teach you complete react js</h2>
//   </div>,
//   document.getElementById("root")
// );

// in V16.x.x version of reactapp ,it accepts array of an elements bcz it is possible for render() to return an array of elements
// upr nu over write thy jaase

// ReactDOM.render([
//   <h1>thapa technical</h1>,
//   <p>plz subscribe our chennal on youtube to all</p>,
//   <h2>i will teach you complete react js</h2>
// ]
//   ,document.getElementById('root'));

//***==>8. React.Fragment ->extra div tad add karvo padto te have ny karvo pade and we have React 16.2 and up_versions that introduced react synctactical sugar syntax -> <> same code of piece </>

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.Fragment>
//     <h1>thapa technical</h1>
//     <p>plz subscribe our chennal on youtube</p>
//     <h2>i will teach you complete react js</h2>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <h1>thapa technical</h1>
//     <p>plz subscribe our chennal on youtube</p>
//     <h2>i will teach you complete react js</h2>
//   </>,
//   document.getElementById("root")
// );

// ***9.==> challenge1 ->

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <h1>my Favorite Netflix series</h1>
//     <p>here are the top 5 Favorite Netflix series</p>
//     <ol>
//       <li>Dark</li>
//       <li>My holo love</li>
//       <li>Money Heist</li>
//       <li>Mr Robot</li>
//       <li>My First-2 Love</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// ***10.=>Javascrip expression in JSX -> we can use javascript expression in curly brace{} but only expression

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "krunal gangani"

// ReactDOM.render(
//   <>
//     <h1>My name is {fname} </h1>
//     <p>My lucky number is {4+5}</p>
//   </>,
//   document.getElementById("root")
// );

// ***11.==> ES6 template literals in JSX

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "krunal gangani";
// const lname = "pravinbhai";

// ReactDOM.render(
//   <>
//     <h1>
//       My name is {fname} {lname}{" "}
//     </h1>
//     <h1>My name is {fname + " " + lname} </h1>
//     <h1>My name is {`${fname} ${lname}`} </h1>
//     <h1> {`My name is ${fname} and father's name is ${lname}`} </h1>
//     <p>My lucky number is {4 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

// ***12.==> challenge 2

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "krunal gangani";
// const lname = "pravinbhai";

// const CurrentDate = new Date().toLocaleDateString();
// const CurrenTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1> {`My name is ${fname} and father's name is ${lname}`} </h1>
//     <p>Current date and time are {Date(Date.now)}</p>
//     <p>Current date is {CurrentDate}</p>
//     <p>Current time is {CurrenTime}</p>
//   </>,
//   document.getElementById("root")
// );

//*** 13.==> JSX attribute

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "krunal gangani";

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.thapatechnical.com";

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">My first name is {fname} </h1>
//     <img src="https://picsum.photos/200/300" alt="err"/>
//     <h1>aa rite pan lakhi shakay html code ni andar curlybraces no use kari ne</h1>
//     <img src={img1} alt="err"/>
//     <img src={img2} alt="err"/>
//     <a href={link} target="_blank" rel="noreferrer">
//     <img src={img3} alt="err"/>
//     </a>
//   </>,
//   document.getElementById("root")
// );

//*** 14.==> importing index.css file in our index.js file
// class is already in reserve keyword in react so we use in reactjs className instead of class

// ***15.==>google fonts in react ->index.html ma font ni link head tag ma lakhi levi and index.css ma te element or universal-operator ma font-family mukvi

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const fname = "krunal gangani";

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.thapatechnical.com";

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true" className="heading">My first name is {fname} </h1>
//     <div className="img_div">
//     <img src={img1} alt="err"/>
//     <img src={img2} alt="err"/>
//     <a href={link} target="_blank" rel="noreferrer">
//     <img src={img3} alt="err"/>
//     </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// ***16.==>inline css

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const fname = "krunal gangani";
// const lname = "pravinbhai";

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.thapatechnical.com";

// const heading = {
//   color: "#fa9191",
//   textTransform: "capitalize",
//   textAlign: "center",
//   fontWeight : 'bold',
//   textShadow: '0px 2px 4px #ffe9cf',
//   margin: '70px 0px',
//   fontFamily: '"Lobster", cursive'
// };

// ReactDOM.render(
//   <>
//   {/* this is called inline css */}
//     <h1
//       style={{
//         color: "#fa9191",
//         textTransform: "capitalize",
//         textAlign: "center",
//         fontWeight : 'bold',
//         textShadow: '0px 2px 4px #ffe9cf',
//         margin: '70px 0px',
//         fontFamily: '"Lobster", cursive'
//       }}
//     >
//       My first name is {fname}
//     </h1>
//     {/* this is also called inline css for better look of code we can use direcly its variable */}
//     <h1 style={heading}>My fathe name is {lname}</h1>
//     <div className="img_div">
//       <img src={img1} alt="err" />
//       <img src={img2} alt="err" />
//       <a href={link} target="_blank" rel="noreferrer">
//         <img src={img3} alt="err" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// ***17. ==>challenge

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'

// let CurrentDate = new Date();
// let CurrentTime = CurrentDate.toLocaleTimeString();
// let CurrentHour = CurrentDate.getHours();

// let cssStyle = {};
// let greeting = "";

// if (CurrentHour >= 1 && CurrentHour < 12) {
//   greeting = "Good morning";
//   cssStyle.color = "green";
// } else if (CurrentHour >= 12 && CurrentHour < 19) {
//   greeting = "Good afternoon";
//   cssStyle.color = "Orange";
// } else {
//   greeting = "Good night";
//   cssStyle.color = "Black";
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>
//         Hello Sir , Time is {CurrentTime} and hour is {CurrentHour} ,so{" "}
//         <span style={cssStyle}> {greeting} </span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// ***18. ==>react components

// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// ReactDOM.render(
//   <>
//     <h1>My name is krunal gangani pravinbhai</h1>
//     <p>this is my codding world</p>
//     <p>i have many friends</p>
//     <ol>
//       <li>manav</li>
//       <li>ravi</li>
//       <li>trupesh</li>
//       <li>kushal</li>
//     </ol>

//     {/* we can creat component of this jsx elements for better reusable codes */}

//     <Heading />
//     <Para />
//     <List />

//   </>,
//   document.getElementById("root")
//   );

// **18.1 ==>or we can add these component in one App1.jsx file and just call it like other components

// import React from "react";
// import ReactDOM from "react-dom";

// import App1 from "./App1";

// ReactDOM.render(<App1 />, document.getElementById("root"));

// ***19.==>rewrite our miniproject(video 17) with components

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App2 from "./App2";

// ReactDOM.render(<App2 />, document.getElementById("root"));

// ***20.==>import export in react

// import React from "react";
// import ReactDOM from "react-dom";

// import youtuber from "./App3";
// // bydefault default component j import thase jema koy pan name rakhi shakay and ek karta vadhare componenet import karti vakhte coma no use karvo
// import thapachennal, { favprog, myName, mySurname } from "./App3";
// import * as kuchbhi from "./App3"; //wild card (* as obj) pan use kari shakay

// ReactDOM.render(
//   <>
//     <ol>
//       <li>vinod</li>
//       <li>bahadur</li>
//       <li>thapa</li>
//       <li>{youtuber}</li>
//       <li>{thapachennal}</li>
//       <li>{favprog}</li>
//       <li>{myName()}</li>
//       <li>{mySurname()}</li>
//       {/* aa rite as obj element dot operator thi access kari shakay */}
//       <li>{kuchbhi.default}</li>
//       <li>{kuchbhi.favprog}</li>
//       <li>{kuchbhi.myName()}</li>
//       <li>{kuchbhi.mySurname()}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// ***21.==>challenge(simple calculator app in react)

// import React from "react";
// import ReactDOM from "react-dom";
// import * as calci from './App4_calsi';

// ReactDOM.render(
//   <>
//     <ol>
//       <li>addition of two number is {calci.add(40,6)}</li>
//       <li>subtraction of two number is {calci.sub(40,6)}</li>
//       <li>multiplication of two number is {calci.mul(40,6)}</li>
//       <li>division of two number is {calci.div(40,6)}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// ***21.1==>rewrite this code for better look of index.js file

// import React from "react";
// import ReactDOM from "react-dom";
// import App5 from "./App5";

// ReactDOM.render(<App5 />, document.getElementById("root"));

// ***22==>props in React --> with the  help of props we can creat our own attribute

// import React from "react";
// import ReactDOM from "react-dom";

// // here parameter props will behave like object and Card is our own custom component which has its own custom attributs(props.etc)

// function Card(props) {
//   return (
//     <>
//       <div className="cards">
//         <div className="card">
//           <img src={props.imgsrc} alt="myPic" className="card__img" />
//           <div className="card__info">
//             <span className="card__category">{props.title}</span>
//             <h3 className="card__titel">{props.sname}</h3>
//             <a href={props.link} target="_blank" rel="noreferrer">
//               <button>Watch Now</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ReactDOM.render(
//   <>
//     <Card
//       imgsrc="https://www.tjtoday.org/wp-content/uploads/2018/02/c245fb206fecea20e4f18e26dc8fa74aae6f80b5.jpg"
//       title="A Netflix Original Series"
//       sname="DARK"
//       link="https://www.netflix.com/in/title/80100172"
//     />
//     <Card
//       imgsrc="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/11/Pictures/_afa6f3e2-471c-11e6-90e0-482a513bad8b.png"
//       title="A Netflix Original Series"
//       sname="STRANGER THINGS"
//       link="https://www.netflix.com/in/title/80057281"
//     />
//     <Card
//       imgsrc="https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
//       title="A Netflix Original Series"
//       sname="EXTRA CURRICULAR"
//       link="https://www.netflix.com/in/title/80990668"
//     />
//     <Card
//       imgsrc="https://images.hindustantimes.com/img/2021/08/31/550x309/money_heist_1630404155391_1630404163247.jpg"
//       title="A Netflix Original Series"
//       sname="MONEY HEIST"
//       link="https://www.netflix.com/in/title/80192098"
//     />
//     <Card
//       imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3DCeyaA9MUVVRIsWlhI2S7A249L41En5CA&usqp=CAU"
//       title="A Netflix Original Series"
//       sname="SEX EDUCATION"
//       link="https://www.netflix.com/in/title/80197526"
//     />
//   </>,
//   document.getElementById("root")
// );

// ***=> 23 -> Arrays in react and better look for above code

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// import Card from "./App6_Cards";
// import Sdata from "./Sdata";

// ReactDOM.render(
//   <>
//     <h1 className="heading_style"> List of my top 5 netflix Series </h1>

//     <Card
//       imgsrc={Sdata[0].imgsrc}
//       title={Sdata[0].title}
//       sname={Sdata[0].sname}
//       link={Sdata[0].link}
//     />
//     <Card
//       imgsrc={Sdata[1].imgsrc}
//       title={Sdata[1].title}
//       sname={Sdata[1].sname}
//       link={Sdata[1].link}
//     />
//     <Card
//       imgsrc={Sdata[2].imgsrc}
//       title={Sdata[2].title}
//       sname={Sdata[2].sname}
//       link={Sdata[2].link}
//     />
//     <Card
//       imgsrc={Sdata[3].imgsrc}
//       title={Sdata[3].title}
//       sname={Sdata[3].sname}
//       link={Sdata[3].link}
//     />
//     <Card
//       imgsrc={Sdata[4].imgsrc}
//       title={Sdata[4].title}
//       sname={Sdata[4].sname}
//       link={Sdata[4].link}
//     />
//   </>,
//   document.getElementById("root")
// );

//***==> mapping(loop ni jem curren element thi call thase) and fat arrow function

// const array = ['vinod' , 'bahadur' , 'thapa'];

// const newArr = array.map(function (cValue,index,arr){

//   console.log(arr); //current whole array console ma avse like loop tran var avse
//    return index + ' --> ' + cValue;

// })

// console.log(newArr);

// const studentdata = [

// {id : 1 ,name : 'vinod' , degree : 'MCS' },
// {id : 2 ,name : 'thapa' , degree : 'B_tech' },
// {id : 3 ,name : 'kaushik' , degree : 'MSC' }

// ]

// console.log(studentdata);
// console.log(studentdata[0]);
// console.log(studentdata[0].name);
// console.log(studentdata[0].degree);
// console.log(studentdata[2].id);

// const newdata = studentdata.map( (cValue) => {

//     return `my name is ${cValue.name} for id -> ${cValue.id} `;

// } )

// console.log(newdata);

// ***fat arrow function

// function myName(name){} //simple function
// const myName = (name) => {} //fate arrow function

// ***=> 24 -> completing netflix app and mapping - fat arrow function

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// import Card from "./App6_Cards";
// import Sdata from "./Sdata";

// function ncard(cValue) {
//   //aa cValue ni andar badha data avi gya se as object

//   console.log(cValue); //badha data console ma avse as object

//   return (
//     <Card
//key={cValue.key}
//       imgsrc={cValue.imgsrc}
//       title={cValue.title}
//       sname={cValue.sname}
//       link={cValue.link}
//     />
//   );
// }

// ReactDOM.render(
//   <>
//     <h1 className="heading_style"> List of my top 5 netflix Series </h1>

//     {Sdata.map( ncard )}

//   </>,
//   document.getElementById("root")
// );

//ncard is fuction calling jene define karvu pdse upr

// **==>24.1 -->badha child ma key(key j prefer karvu - keys pan ny chale) namni unique property(id) hovi j joi

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// import Card from "./App6_Cards";
// import Sdata from "./Sdata";

// ReactDOM.render(
//   <>
//     <h1 className="heading_style"> List of my top 5 netflix Series </h1>

//     {/* {Sdata.map(function ncard(cValue) {
//       return (
//         <Card
//           key={cValue.key}
//           imgsrc={cValue.imgsrc}
//           title={cValue.title}
//           sname={cValue.sname}
//           link={cValue.link}
//         />
//       );
//     })} */}

//     {Sdata.map((cValue) => {
//       return (
//         <Card
//           key={cValue.id}
//           imgsrc={cValue.imgsrc}
//           title={cValue.title}
//           sname={cValue.sname}
//           link={cValue.link}
//         />
//       );
//     })}
//   </>,
//   document.getElementById("root")
// );

// ***=> 24.2

// import React from "react";
// import ReactDOM from "react-dom";

// import App7 from "./App7_netflix";

// ReactDOM.render(<App7 />, document.getElementById("root"));

// *** ==> 25 -> React devloper tools-->inspect(clt + shift + i) ma components ma jetla component haase te dekhadse

// *** ==> 26 ->if else statements in react js
// *** ==> 27 -> ternary statements in react JS

// import React from "react";
// import ReactDOM from "react-dom";

// import App8 from './App8';

// ReactDOM.render(<App8 />, document.getElementById("root"));

// *** ==> 28 -> slotmachin game in react js

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App9 from './App9';

// ReactDOM.render(<App9 />, document.getElementById("root"));

// *** ==> 29 -> Hooks(useState()) in react js

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App10 from './App10';

// ReactDOM.render(<App10 />, document.getElementById("root"));

// *** ==> 30 -> Hooks(useState()) chellenge

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App11 from './App11';

// ReactDOM.render(<App11 />, document.getElementById("root"));

// *** ==> 31 ->digital clock ->chellenge

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App12 from './App12';

// ReactDOM.render(<App12 />, document.getElementById("root"));

// *** ==> 32 ->handling events

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App13 from './App13';

// ReactDOM.render(<App13 />, document.getElementById("root"));

// *** ==> 33 ->forms in React

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App14 from './App14';

// ReactDOM.render(<App14 />, document.getElementById("root"));

// *** ==> 33 ->forms in React

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App15 from './App15';

// ReactDOM.render(<App15 />, document.getElementById("root"));

// *** ==> 34 ->forms in React

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App16 from './App16';

// ReactDOM.render(<App16 />, document.getElementById("root"));

// *** ==> 35 ->react login form challenge

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App17 from './App17';

// ReactDOM.render(<App17 />, document.getElementById("root"));

// ***==>spread and rest operator

// 1

// const FUN = (...arr) =>{

//     console.log(arr);//as an array
//     console.log(...arr);// as an value
//     console.log(arr.length);//array ni length

//   let total = 0;

//   for(let i of arr)
//   total += i;

//   console.log(total);

// }

// // FUN(1,2,3,4,5,6,7,8,9,10)

// // 2

// const fun = (a, b, c, ...arr) => {
//     console.log(arr); //as an array
//     console.log(...arr); // as an value
//     console.log(arr.length); //array ni length
//     console.log(`a = ${a}  b =  ${b}  c = ${c}`);

//     let total = a + b + c;

//     for (let i of arr) total += i;

//     console.log(total);
//   };

// // 2

//   fun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let data = ['krunal','kaushik','milan'];
// let DATA = ['rajnish','isha','gopi'];
// let we = [...data , ...DATA];
// console.log(we);//banne array concat  thy jaase

// let [bro1,bro2,...remaining] = we; //array desstructuring
// console.log(bro1);
// console.log(bro2);
// console.log(remaining);

// const person = {name : 'fred' , age :87};

// console.log(Object.entries(person));  //array of array avse->arry ma convert thy n avse

// //4_rest --same as spread but for object(...others)

// const {first,second,...others} = { first :1 ,second :2 ,third : 3 ,fourth :4 ,fifth : 5} ;

// console.log(others); //third ,fourth,fifth ae other ma avi jase
// console.log(first);//first ni value apse

// //5_spread -->for object

// const pr = {name : 'fred' , age :87 ,degree : "mtag"};

// const pr1 = {...pr};//pr ae pr1 ma copy thy jase
// console.log(pr1);
// console.log(pr);  //print thy jase

// *** ==> 36 ->react login form challenge

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App18 from './App18';

// ReactDOM.render(<App18 />, document.getElementById("root"));

// *** ==> 37 ->todo list chellenge(project)

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App19 from './App19';

// ReactDOM.render(<App19 />, document.getElementById("root"));

// *** ==> 38 ->chellenge-increment decrement with material icons

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App20 from './App20';

// ReactDOM.render(<App20 />, document.getElementById("root"));

// *** ==> 39 ->chellenge-increment decrement with material icons and material ui core

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// import App21 from './App21';

// ReactDOM.render(<App21 />, document.getElementById("root"));

// *** ==> 40 ->npm(node package manager) and digital clock

// import React from "react";
// import ReactDOM from "react-dom";

// import App22 from "./App22";
// import './index.css';

// ReactDOM.render(<App22 />, document.getElementById("root"));

// *** ==> 41 ->npm(node package manager) and digital clock

// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";
// import ToDoList1 from "./ToDoList1";

// ReactDOM.render(<ToDoList1 />, document.getElementById("root"));

// *** ==> 42 ->bootstrap in reactjs(npm install bootstrap@4.5.0) with bootstrap class(bootsrap class suggessions) ->(intellisense for css class names in HTML <-extension)

// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";
// import App23 from "./App23";

// ReactDOM.render(<App23 />, document.getElementById("root"));

// *** ==> 43 ->Accordian in reactjs->project

// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";
// import App24 from "./App24";

// ReactDOM.render(<App24 />, document.getElementById("root"));

// *** ==> 44 ->Accordian in reactjs

// import React from "react";
// import ReactDOM from "react-dom";

// import App25 from "./App25";

// ReactDOM.render(<App25 />, document.getElementById("root"));

// *** ==> 45 ->google keep note project

// import React from "react";
// import ReactDOM from "react-dom";

// import App26 from "./App26";
// import './index.css';

// ReactDOM.render(<App26 />, document.getElementById("root"));

// *** ==> 46 ->create contexapi and usecontecx Hook
// import React from "react";
// import ReactDOM from "react-dom";

// import App27 from "./App27";

// ReactDOM.render(<App27 />, document.getElementById("root"));

// *** ==> 47 ->useEffect Hook
// import React from "react";
// import ReactDOM from "react-dom";

// import App28 from "./App28";

// ReactDOM.render(<App28 />, document.getElementById("root"));

// *** ==> 48 ->chellenge for title(document.title)

// import React from "react";
// import ReactDOM from "react-dom";

// import App29 from "./App29";

// ReactDOM.render(<App29 />, document.getElementById("root"));

// *** ==> 49 ->chellenge netflix data for table

// import React from "react";
// import ReactDOM from "react-dom";

// import App30 from "./App30";

// ReactDOM.render(<App30 />, document.getElementById("root"));

// *** ==> 50 ->getpokemonjson data using axios and useEffect

// import React from "react";
// import ReactDOM from "react-dom";

// import App31 from "./App31";

// ReactDOM.render(<App31 />, document.getElementById("root"));

// *** ==> 51 -> React router

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import App32 from "./App32";

// ReactDOM.render(
//   <BrowserRouter>
//     <App32 />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// *** ==> 52 ->navbar in reactjs

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import './index.css'
// import App33 from "./App33";

// ReactDOM.render(
//   <BrowserRouter>
//     <App33 />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// *** ==> 53 ->react render

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import './index.css';
// import App34 from "./App34";

// ReactDOM.render(
//   <BrowserRouter>
//     <App34 />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// *** ==> 54 ->react use params,use Location hooks

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import './index.css';
// import App35 from "./App35";

// ReactDOM.render(
//   <BrowserRouter>
//     <App35 />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// *** ==> 55 ->react live search

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import './index.css';
// import App36 from "./App36";

// ReactDOM.render(
//   <BrowserRouter>
//     <App36 />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// *** ==> 56 ->react final project responsive website

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './dynamic_Responsive_website/App';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);
