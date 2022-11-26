import React from "react";

export default function InputTodo({ value, setValue, onSubmit }) {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          style={{ flex: "10", padding: "5px" }}
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="btn" style={{ flex: 1 }}>
          추가
        </button>
      </form>
    </div>
  );
}
