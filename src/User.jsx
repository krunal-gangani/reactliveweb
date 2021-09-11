import React from "react";
import { useParams , useLocation ,useHistory } from "react-router";

// const User = ({match}) => {   //old time

//    return (<><h1>User {match.params.name} page</h1></>)

// }

// with uing useparams

//old time ->video 54
const User = ( ) => {

  const {name,sirname} = useParams();

//    for use Location 
 
const location = useLocation();

   console.log(location);

//    for useHistory

const history = useHistory();
  
console.log(history);

  return (
    <>
      <h1>User {name} {sirname} page</h1>
      <p>my current location is {location.pathname} </p>

     {location.pathname === '/user/krunal/gangani' ? <button onClick={()=>alert(`you are awesome`)}> ClickMe </button> : null}  {/*only aa path mate j button ave*/}
    {location.pathname === '/user/krunal/gangani' ? <button onClick={()=> history.goBack() }> Go Back </button> : null} {/*last(pa6al na) url par visit kari shakase*/}
     {location.pathname === '/user/krunal/gangani' ? <button onClick={()=> history.push('/') }> home(about) </button> : null}  {/*Home page par push kari shakase*/}

    </>
  );
};

export default User;
