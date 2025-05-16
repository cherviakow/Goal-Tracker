/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "./List.module.css";

export default function List({ contacts, deleteGoal, doneGoal }) {
  const [doneId, setDoneId] = useState([]);

  const handleDone = (id) => {
    doneGoal(id);
    setDoneId((prev) => [...prev, id]);
  };

  return (
    <div className={css.form}>
      {contacts.map(({ id, name, plan }) => {
        const isDone = doneId.includes(id);

        return (
          <div
            className={css.contact}
            key={id}
            style={{
              backgroundColor: isDone
                ? "rgba(82, 186, 90, 0.705)"
                : "aliceblue",
            }}
          >
            {name} - {plan}
            <div className={css.buttons}>
              <button className={css.BtnDone} onClick={() => handleDone(id)}>
                Done
              </button>
              <button className={css.BtnDelete} onClick={() => deleteGoal(id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
