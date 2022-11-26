import React from "react";

export default function InputTodo({ value, setValue, onSubmit }) {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="flex pt-2">
      <input
        type="text"
        name="name"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow-sm"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <input
        type="submit"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400"
        text="x"
      />
    </form>
  );
}
