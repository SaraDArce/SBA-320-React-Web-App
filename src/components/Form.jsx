export default function Form({ setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="searchterm" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
