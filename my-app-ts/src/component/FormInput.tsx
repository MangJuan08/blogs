import React from "react";
import { FormPerson } from "../FormPerson";

interface Person {
  formP: {
    name: string;
    age: number;
    arrayNumber: number[];
    funzioni: {
      setName: any;
      setAge: any;
      setArrayNumbers: any;
    };
  },
  handleSubmit: (e:any) => void
}

const FormInput = ({ formP, handleSubmit }: Person) => {
  console.log(formP.funzioni);
  return (
    <div>
      <p>{formP.name}</p>
      <p>{formP.age}</p>
      <form onSubmit={handleSubmit}>
        <input
          value={formP.name}
          onChange={(e) => formP.funzioni.setName(e.target.value)}
          type="text"
          placeholder="Enter a term"
          className="input"
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
