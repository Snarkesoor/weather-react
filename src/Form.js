import "./Form.css";

export default function Form() {
  return (
    <div className="col-3">
      <form className="d-flex">
        <input
          className="form-control me-2"
          id="search-city-form"
          type="search"
          placeholder="Search city"
          aria-label="Search"
        />
      </form>
    </div>
  );
}
