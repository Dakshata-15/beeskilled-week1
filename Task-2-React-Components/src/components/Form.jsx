
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div className="form-container">
      <h3>Contact Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submittedName && <p>Welcome, {submittedName}!</p>}
    </div>
  );
}

export default Form;
