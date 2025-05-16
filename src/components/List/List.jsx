/* eslint-disable react/prop-types */
import { useState } from "react";
// import Contact from "../Contact/Contact";
import css from "./List.module.css";

export default function List({ contacts, deleteGoal, doneGoal }) {

  const [doneId, setDoneId] = useState([]);

  const handleDone = (id) => {
    doneGoal(id);
    setDoneId((prev)=>[...prev, id]);
  }


  
//   return (
//     <div className={css.form}>
//       <Contact />

//       {contacts.map(({ id, name, plan }) => (
        
       

//         <div className={css.contact} key={id}
//         style={{borderColor: isD}}>
//           {name} - {plan}
//           <div className={css.buttons}>
//             <button onClick={() => doneGoal(id)}>Done</button>
//             <button onClick={() => deleteGoal(id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


return (
  <div className={css.form}>
    {/* <Contact /> */}

    {contacts.map(({ id, name, plan }) => {
      const isDone = doneId.includes(id);

      return (
        <div
          className={css.contact}
          key={id}
          style={{ borderColor: isDone ? "lightgreen" : "rgb(135, 134, 134)" }}
        >
          {name} - {plan}
          <div className={css.buttons}>
            <button className={css.Btn} onClick={() => handleDone(id)}>Done</button>
            <button className={css.Btn} onClick={() => deleteGoal(id)}>Delete</button>
          </div>
        </div>
      );
    })}
  </div>
);
}