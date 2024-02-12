import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    console.dir(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <input
          ref={inputRef}
          style={{
            width: "250px",
            padding: "5px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          onClick={handleClick}
          style={{
            width: "250px",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          Search Movies
        </button>
      </div>
    </>
  );
}
