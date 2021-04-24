import React from 'react';
import API from '../../utils/API'

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
      let id=JSON.parse(localStorage.getItem('user')).user._id;
      console.log(id)
      
      API.updateUser(id,{
        image: result.info.url
      } )
        .then(res => {
          console.log(res)
          
        })
    
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