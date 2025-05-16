// const Blogs = () => {
//   const blogs = ["Avengers", "Terminator", "John Wick"];

//   return (
//     <div>
//       <ul>
//         {blogs.map((title, index) => (
//           <li key={index}>{title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Blogs;





// import { useState } from "react";

// const Counter = () => {
//     const [count, setcount] = useState(0);

//     return (
//         <div className="count">
//             <p>You clicked {count} times </p> 
//             <button onClick={() => setcount(count +  1)}> click </button>
//             <input type="checkbox" checked />
//         </div>
//     );
// }

const Counter = () => {
    return (
        props.isLoogedIn ? <h2>Welcome {props.name} </h2> : <h2>Please log in</h2>
    )
}









































































export default Counter;