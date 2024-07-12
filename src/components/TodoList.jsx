import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSumbit = () => {
    const newItem = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };
    setItems([...items, newItem]);
    setInput("");
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <div className="input-group mb-3 w-75">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          placeholder="Enter a new to do..."
        />
        <button
          className="btn btn-success "
          type="button"
          onClick={handleSumbit}
        >
          Add
        </button>
      </div>
      <>
        {items.map((item, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center border rounded w-50"
          >
            <p
              onClick={() => handleComplete(item.id)}
              className={`align-self-center ${
                item.isCompleted ? "text-decoration-line-through" : ""
              }`}
            >
              {item.text}
            </p>
            <button onClick={() => handleDelete(item.id)} className="btn">
              ❌
            </button>
          </div>
        ))}
      </>
    </div>
  );
};

export default TodoList;
