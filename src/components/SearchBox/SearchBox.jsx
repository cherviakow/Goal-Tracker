/* eslint-disable react/prop-types */
import css from "./SearchBox.module.css";

export default function SearchBox({ handleChangeValue }) {
  return (
    <div className={css.form}>
      <span>Find:</span>
      <input className={css.input} type="text" onChange={handleChangeValue} />
    </div>
  );
}
