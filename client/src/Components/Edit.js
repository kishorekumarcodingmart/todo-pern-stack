import React, { useEffect, useRef, useState } from "react";



const Edit = ({ setRef, val }) => {


  const [description, setDescription] = useState("");

  const handlechange = (e) => {
    setDescription(e.target.value)
  };

  const formHandle = async (e) => {
    e.preventDefault()
    const body = { description: description };
    try {
      await fetch(`http://localhost:7000/todo/${val.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      ref.current.style.display = "none";
      // window.location("/");

    } catch (error) {
      console.log(error)
    }
  }

  const ref = useRef();
  useEffect(() => {
    setRef(ref);
  });

  return (
    <>
      <div id="myModal" className="modal" ref={ref}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              ref.current.style.display = "none";
            }}
          >
            &times;
          </span>
          <p>Enter Description</p>
          <div>
            <form onSubmit={formHandle}>
              <input
                type="text"
                name="description"
                required
                className="inputField"
                onChange={handlechange}
                // value={val.description}
              />

              <input type="submit" value="Change" className="submitBtn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
