import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setList([...list, title]);
      setTitle("");
    }
  };

  return (
    <form className="container mt-5" onSubmit={handlerSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button type="submit" className="btn btn-primary">Invia</button>
    </form>
  );
};

export default Form;
