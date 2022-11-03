import React, {  useState } from "react";
import Edit from "./Components/Edit";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
  const [ref, setRef] = useState();

  const [data, setData] = useState()
  
  return (
    <section className="AppWrapper">
      <Input />
      <List
        onClick={(val) => {
          ref.current.style.display = "block";
          setData(val)
        }}
      />
      <Edit setRef={setRef} val={data}/>
    </section>
  );
}

export default App;
