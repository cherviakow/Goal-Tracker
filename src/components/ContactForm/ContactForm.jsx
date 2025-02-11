/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
// import { useState } from "react";

export default function ContactForm({ onAddGoal }) {
  //   const [name, setName] = useState("");
  //   const [goal, setGoal] = useState("");
  const id = nanoid();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(20, "Too long")
      .required("Required"),
    plan: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    plan: "",
  };

  const handleSubmit = (values, action) => {
    console.log(id);

    const newGoal = {
      id: id,
      name: values.name,
      plan: values.plan,
    };

    onAddGoal(newGoal);
    console.log(values);

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <div key={id} className={css.form}>
          <div>Name</div>
          <Field className={css.inputName} name="name" type="text" />
          <ErrorMessage className={css.error} name="name" />
          <div>Plan</div>
          <Field className={css.inputPlan} name="plan" type="text" />
          <ErrorMessage className={css.error} name="plan" />
          <button className={css.button} type="submit">
            Add
          </button>
        </div>
      </Form>
    </Formik>
  );
}
