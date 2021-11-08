import React from "react";

//functional//////
const Gallery = (props) => {
  //   console.log(props);
  return (
    <div>
      {props.images.map((url) => (
        <img src={url} alt="Copyright Flickr probably" key={url} />
      ))}
    </div>
  );
};

// class Gallery extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.images.map((url) => (
//           <img src={url} />
//         ))}
//       </div>
//     );
//   }
// }
export default Gallery;
