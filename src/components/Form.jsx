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

  const handlerDelete = (index) => {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }

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
          <li key={index}>
            {item}
            <span className="m-5" onClick={() => handlerDelete(index)}>×</span>
          </li>
        ))}
      </ul>

      <button type="submit" className="btn btn-primary">Invia</button>
    </form>
  );
};

export default Form;
