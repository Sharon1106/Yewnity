import React from 'react';
class ImageUpload extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
   }
  showWidget = () => {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `dis1xgkzs`,
       uploadPreset: `ml_default`}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      console.log(result.info.url); 
    }});
    widget.open()
  }
  render() {
    return (<div>
           <button onClick={this.showWidget}> Upload Image </button>
           </div>
    );
  }
}
export default ImageUpload;