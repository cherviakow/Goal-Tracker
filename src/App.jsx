import ContactForm from "./components/ContactForm/ContactForm";
import List from "./components/List/List"
import SearchBox from "./components/SearchBox/SearchBox"
import './App.css'
import { useState } from "react";


function App() {

  const [inputValue, setInputValue] = useState("");
  const [goal, setGoal] = useState([
  { id: "id-1", name: "Rosie Simpson", plan: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", plan: "443-89-12" },
  { id: "id-3", name: "Eden Clements", plan: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", plan: "227-91-26" },
  ]);
  
  const addGoal = (newGoal) => {
    setGoal((prevGoal) => [...prevGoal, newGoal]);
  } 

  const doneGoal = (id) => {
    setGoal((prevGoal) => prevGoal.filter(goal => goal.id !==id));
  }

  const deleteGoal = (id) => {
setGoal((prevGoal) => prevGoal.filter(goal => goal.id !==id ));
  }

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  }

  const filterList = goal.filter(
    contact => contact.name.toLocaleLowerCase()
    .includes(inputValue.toLocaleLowerCase()) || 
    contact.plan.includes(inputValue)
  );
 
  

  return (
    <>
     <div>
      <h1>Goal tracker</h1>
      <ContactForm onAddGoal={addGoal}/>
      <SearchBox handleChangeValue={handleChangeValue}/>

      <List contacts={filterList} deleteGoal={deleteGoal} doneGoal={doneGoal}/>



     </div>
    
    </>
  )
}

export default App
