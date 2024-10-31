const SimpleForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="space-y-3 pt-5">
        <input required type="text" name="name" />
        <br />
        <input required type="email" name="email" />
        <br />
        <input required type="password" name="password" />
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

export default SimpleForm;
