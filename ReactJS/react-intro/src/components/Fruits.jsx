import { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    "apple",
    "banana",
    "cherry",
    "avocado",
  ]);

  const [newFruit, setNewFruit] = useState("");

  const addFruitHandler = () => {
    if (newFruit.length > 0) {
      // console.log("newFruit", newFruit);
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  const onChangeHandler = (value) => setNewFruit(value);

  return (
    <>
      <h2>Fruits</h2>
      <input
        type="text"
        placeholder="Add new fruit"
        value={newFruit}
        onChange={(e) => onChangeHandler(e.target.value)}
      />

      <button onClick={addFruitHandler}>Add Fruit</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};
export default Fruits;
