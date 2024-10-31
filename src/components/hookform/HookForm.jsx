import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("");
  //   const [email, handleEmailChange] = useInputState("");
  //   const [password, handlePasswordChange] = useInputState("");

  const nameState = useInputState("");
  const emailState = useInputState("");
  const passwordState = useInputState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    console.log(nameState.value, emailState.value, passwordState.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3 pt-5">
        <input {...nameState} required type="text" name="name" />
        <br />
        <input {...emailState} required type="email" name="email" />
        <br />
        <input {...passwordState} required type="password" name="password" />
        <br />
        <input
          required
          className="py-1 px-3 rounded-md border bg-gray-600"
          type="submit"
          value="Submit"
        />
      </form>
      {/* <form onSubmit={handleFormSubmit} className="space-y-3 pt-5">
        <input
          value={name}
          onChange={handleNameChange}
          required
          type="text"
          name="name"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          required
          type="email"
          name="email"
        />
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          required
          type="password"
          name="password"
        />
        <br />
        <input
          required
          className="py-1 px-3 rounded-md border bg-gray-600"
          type="submit"
          value="Submit"
        />
      </form> */}
    </div>
  );
};

export default HookForm;
