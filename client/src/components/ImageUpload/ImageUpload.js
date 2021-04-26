import React from 'react';
import API from '../../utils/API'

// class ImageUpload extends React.Component {
export function ImageUpload(props) {
  // constructor(props){
  //    super(props);
  //    this.state = {}
  //  }
  function showWidget() {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `dis1xgkzs`,
       uploadPreset: `ml_default`}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      let user = JSON.parse(localStorage.getItem('user'));
      user.user.image = result.info.url;
      props.setUser(user);
      localStorage.setItem('user', JSON.stringify(user))

      let id=JSON.parse(localStorage.getItem('user')).user._id;
      
      API.updateUser(id,{
        image: result.info.url
      } )
        .then(res => {
          
        })
    
    }});
    widget.open()
  }
  // render() {
    return (<div>
           <button onClick={showWidget}> Upload Image </button>
           </div>
    );
  // }
}
export default ImageUpload;