import React, { FC, FormEventHandler, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IData } from "./types";

interface IProps {
  values?: IData;
  onSubmit: (data: IData) => void;
}

export const Form: FC<IProps> = ({ values, onSubmit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    const data = new FormData(e.target as HTMLFormElement);
    const entries = Object.fromEntries(data) as unknown as IData;
    onSubmit(entries);
    e.preventDefault();
  };

  useEffect(() => {
    if (location.pathname.includes("/edit") && !values) {
      navigate("/");
    }
  }, [location.pathname, navigate, values]);

  return (
    <form className="App-form" onSubmit={handleSubmit}>
      <h2>Personal Data</h2>
      <label className="App-form-label">
        name:
        <input
          className="App-form-input"
          name="name"
          defaultValue={values?.name}
          autoFocus
        />
      </label>
      <label className="App-form-label">
        surname:
        <input
          className="App-form-input"
          name="surname"
          defaultValue={values?.surname}
        />
      </label>
      <label className="App-form-label">
        email:
        <input
          className="App-form-input"
          name="email"
          defaultValue={values?.email}
        />
      </label>
      <label className="App-form-label">
        address:
        <input
          className="App-form-input"
          name="address"
          defaultValue={values?.address}
        />
      </label>
      <h2>Contract Data</h2>
      <label className="App-form-label">
        Total value:
        <input
          className="App-form-input"
          name="total"
          defaultValue={values?.total}
          type="number"
          min={0}
          step={100}
        />
      </label>
      <label className="App-form-label">
        discount:
        <select
          className="App-form-select"
          name="discount"
          defaultValue={values?.discount}
        >
          <option />
          <option value={"A"}>Package A (10.3%)</option>
          <option value={"B"}>Package B (14.5%)</option>
          <option value={"C"}>Package C (18.32%)</option>
          <option value={"D"}>Package D (20.12%)</option>
        </select>
      </label>
      <button className="App-form-button" type="submit">
        SUBMIT
      </button>
    </form>
  );
};
