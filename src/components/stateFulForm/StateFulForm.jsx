import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // handle submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Sorry Bro, Password should must be 6 character");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  // handle changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3 pt-5">
        <input onChange={handleNameChange} required type="text" name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          required
          type="email"
          name="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          required
          type="password"
          name="password"
        />
        {error ? <p>{error}</p> : ""}
        <br />
        <input
          required
          className="py-1 px-3 rounded-md border bg-gray-600"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default StateFulForm;
