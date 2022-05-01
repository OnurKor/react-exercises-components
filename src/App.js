import Footer from "./Footer";
import Header from "./Header";
import Msg from "./Msg";

//! We can create a Component in React via 2 ways.
//! 1-) Function-based (state of the art )
//! 2-) Class-based (more complex and less effective)

//? React uses JSX.
//? In JSX, we can directly use HTML elements in JS

//! Components can return a combined HTML,CSS,JS code.
//! But, it must return a single containered (like div, section, article, <> etc.) element


function App() {
  return (
    <div>
      {/* <Header/> */}
      <Msg/>
      <Footer/>
    </div>
  );
}
export default App;
