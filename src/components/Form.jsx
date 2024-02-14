import { useState, useEffect, useRef } from "react";

export default function Form(props) {
  // const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

//   function handleClick() {
//     console.dir(inputRef.current);
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <div
//         id="form"
//         style={{
//           width: "100%",
//           padding: "12px 20px",
//           margin: "8px 0",
//           boxsizing: "border-box",
//           display: "flex",
//           justifyContent: "center",
//           // marginTop: "50px",
//         }}
//       >
//         <input
//           ref={inputRef}
//           style={{
//             width: "250px",
//             padding: "5px",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "10px",
//         }}
//       >
//         <button
//           onClick={handleClick}
//           style={{
//             width: "250px",
//             padding: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Search Movies
//         </button>
//       </div>
//     </>
//   );
// }
