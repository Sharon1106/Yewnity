import React from "react";
// import profilepic from '../images/User-Example.jpeg'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "../../views/profile.css"
import UCLAv from '../ProfileViewer/images/uclav.png'
import LAC9 from '../ProfileViewer/images/Lac9.png'
import HM from '../ProfileViewer/images/humane.png'
import avatar from '../ProfileViewer/images/avatar.png'
import {Row} from "../Profile";
import API from "../../utils/API";
import State, { useState } from "react";




//------------------------anything inside of a form, create the component here!--------------------------//

//this is an input component that can be used on forms

export function ProfileForm (props) {
    // const [user, setUser] = useState({
    //     email: "",
    //     username: "",
        
    //   })
    
    // API.getUser({
    //     username: user.username,
        
    // })
    function updateName (){
        
    } 

    function resetName(){
        props.setUser(JSON.parse(localStorage.getItem("user")))
    }
    return (





  <div className="col-xl-8 order-xl-1">
  <div className="card bg-secondary shadow">
      <div className="card-header bg-white border-0">
          <div className="row align-items-center">
              <div className="col-8">
                  <h3 className="mb-0">My account</h3>
              </div>
              <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">Update</a>
                  <a href="#!" onClick={resetName}className="btn btn-sm btn-primary">Reset</a>
              </div>
          </div>
      </div>
{/* ------------------this is the form to update the users information---------------------------------- */}
          
      <div className="card-body">
          <form>
              <h6 className="heading-small  mb-4">User information</h6>
              <div className="pl-lg-4">
                  <Row>
                      <div className="col-lg-6">
                          <div className="form-group focused">
                              <label className="form-control-label" for="input-username">Username</label>
                              <input type="text" id="input-username" onChange={(e)=>props.setUser({user:{...props.user,username:e.target.value}})} value={props.user?.username} className="form-control form-control-alternative" placeholder="Username" />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="form-group">
                              <label className="form-control-label" for="input-email">Email address</label>
                              <input type="email" id="input-email" onChange={(e)=>props.setUser({user:{...props.user,email:e.target.value}})} value={props.user?.email} className="form-control form-control-alternative" placeholder="lion@example.com" />
                          </div>
                      </div>
                  </Row>
                  <Row>
                      <div className="col-lg-6">
                          <div className="form-group focused">
                              <label className="form-control-label" for="input-first-name">Organization Name</label>
                              <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" />
                          </div>
                      </div>
                  </Row>
              </div>
              <hr className="my-4" />

              <h6 className="heading-small text-muted mb-4">Contact information</h6>
              <div className="pl-lg-4">
                 <Row>
                      <div className="col-md-12">
                          <div className="form-group focused">
                              <label className="form-control-label" for="input-address">Address</label>
                              <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" type="text" />
                          </div>
                      </div>
                  </Row>
                 <Row>
                      <div className="col-lg-4">
                          <div className="form-group focused">
                              <label className="form-control-label" for="input-city">City</label>
                              <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="form-group focused">
                              <label className="form-control-label" for="input-country">Country</label>
                              <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States" />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="form-group">
                              <label className="form-control-label" for="input-country">Zip code</label>
                              <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                          </div>
                      </div>
                      </Row>
              </div>
              
              <hr className="my-4" />

              <h6 className="heading-small text-muted mb-4">About me</h6>
              <div className="pl-lg-4">
                  <div className="form-group focused">
                      <label>About Me</label>
                      <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>

);
}