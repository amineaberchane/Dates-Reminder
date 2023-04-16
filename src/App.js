import {Container} from "react-bootstrap";
import person from "./data";
import CountAppointment from "./components/CountAppointment";
import ListAppointment from "./components/ListAppointment";
import ActionAppointment from "./components/ActionAppointment";
import React, { useState } from "react";


function App() {
  const [personData, setPersonData] = useState(person);

  const removeData = () =>{
    setPersonData([])
  }

  const viewListdata =()=>{
    setPersonData(person)
  }
  return (
    <div className={"font bg-body"}>
      <Container className="py-5">
        <CountAppointment person={personData}/>

        <ListAppointment person={personData}/>

       <ActionAppointment  viewData={viewListdata} deleteData={removeData}/>
      </Container>
    </div>
  );
}

export default App;
