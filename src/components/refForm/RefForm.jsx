import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  //   handle submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3 pt-5">
        <input required type="text" name="name" ref={nameRef} />
        <br />
        <input required type="email" name="email" ref={emailRef} />
        <br />
        <input required type="password" name="password" ref={passwordRef} />
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

export default RefForm;
