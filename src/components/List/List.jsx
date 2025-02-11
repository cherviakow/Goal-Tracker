/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";
import css from "./List.module.css";

export default function List({ contacts, deleteGoal, doneGoal }) {
  return (
    <div className={css.form}>
      <Contact />

      {contacts.map(({ id, name, plan }) => (
        <div className={css.contact} key={id}>
          {name} - {plan}
          <div className={css.buttons}>
            <button onClick={() => doneGoal(id)}>Done</button>
            <button onClick={() => deleteGoal(id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
