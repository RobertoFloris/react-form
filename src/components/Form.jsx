import { useState } from "react"

const Form = () => {

  const [title, setTitle] = useState("")

  const handlerSubmit = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="title"
          value={title}
          onChange={handlerSubmit} />
      </div>


      <button type="submit" className="btn btn-primary">Invia</button>
    </form>
  )
}

export default Form