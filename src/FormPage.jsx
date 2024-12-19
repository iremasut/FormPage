import React, { useState } from "react";
import "./FormPage.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const FormPage = () => {
  const [formData, setFormData] = useState({
    purpose: "client",
    label: "",
    key: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="purpose">Purpose:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="purpose"
                value="client"
                checked={formData.purpose === "client"}
                onChange={handleChange}
              />
              Client
            </label>
            <label>
              <input
                type="radio"
                name="purpose"
                value="group"
                checked={formData.purpose === "group"}
                onChange={handleChange}
              />
              Group
            </label>
            <label>
              <input
                type="radio"
                name="purpose"
                value="agent"
                checked={formData.purpose === "agent"}
                onChange={handleChange}
              />
              Agent
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            id="label"
            name="label"
            placeholder="Please write label to here."
            value={formData.label}
            onChange={handleChange}
          />
          <small>Input the label name here.</small>
        </div>

        <div className="form-group">
          <label htmlFor="key">Key:</label>
          <input
            type="text"
            id="key"
            name="key"
            placeholder="Please write key to here."
            value={formData.key}
            onChange={handleChange}
          />
          <small>Input the key value here.</small>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <div className="status-group">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === "active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="passive"
                checked={formData.status === "passive"}
                onChange={handleChange}
              />
              Passive
            </label>
          </div>
        </div>

        <button type="submit" className="save-button">

          <FontAwesomeIcon icon= {faSave} size="xl" style={{ marginRight: "16px" }}/> Save
        </button>
      </form>
    </div>
  );
};

export default FormPage;
