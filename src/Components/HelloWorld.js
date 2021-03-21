import React from 'react'

// function HelloWorld(props){
//   return (
//     <h1>
//       Hey there, it's  {props.name}!
//     </h1>
//   );
// }

class HelloWorld extends React.Component {
  render() {
    return(
      <h1>
        Hey there, it's  {this.props.name}!
      </h1>
    )
  }
}
export default HelloWorld;
