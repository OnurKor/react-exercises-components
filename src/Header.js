//*******************************************************************************************/
//* In JSX, Styling can be performed in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet.

//! NOTES:
//* For styling, property-value(object) structure is used.
//* camelCase is used for property name,
//* className is used for class definitions
//* 3rd parties libraries like Material UI, Styled Component, Sass, Bootstrap etc.
//* can also be used for styling

const pStyle = {
    fontFamily: "Tahoma",
    color: "yellow",
  };

function Header() {
    return (
        <div style={{backgroundColor: "purple", color: "white", textAlign: "center"}}>
            <h1>CLARUSWAY</h1>
            <p style={pStyle}> Reinvent Yourself</p>
        </div>
    );

}
export default Header;