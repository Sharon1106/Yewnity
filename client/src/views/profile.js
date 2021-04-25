import React, { useEffect, useState } from 'react'

// import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "./profile.css"
import UCLAv from '../views/images/uclav.png'
import LAC9 from '../views/images/Lac9.png'
import HM from '../views/images/humane.png'
import FB from '../views/images/fb.png'
import test from '../views/images/test4.png'
// import avatar from '../views/images/avatar.png'
// import { Row } from "../components/Profile";
import { ProfileViewer } from "../components/ProfileViewer";
import { ProfileForm } from "../components/ProfileForm";
import Organization from "../components/Organization";
import Upload from '../components/Upload/Upload'
import ImageUpload from '../components/ImageUpload/ImageUpload'
// import API from "../utils/API";


// <Card>
//     <Card.Img variant="top" src={ LAC9 } />
//     <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//     </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
// </Card>
// <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//     <Card.Title>Card title</Card.Title>
//     <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//     </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//     <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
// </Card>
const Profile = () => {
    const [username, setusername] = useState("Random")
    const [organizations, setorganizations] = useState([
        { img: UCLAv, title: "UCLA Veterans", link:"https://veterans.ucla.edu/",
        subscribed:true, text: "Yewnity is proud to be associated with UCLA Veterans!",},
        {
            img: LAC9, title: "LAC9",link:"https://www.laoncloud9.org/", subscribed:true,text: "LAC9 is a family-friendly organization that encourages social activism and social consciousness in our youth to prepare them to be our next generation of leaders, capable of facilitating change in our communities with compassion and kindness",},
        { img: HM, title: "The Humane Society of the United States ", link:"https://www.humanesociety.org/", subscribed:true,text: "A humane society is a group that aims to stop cruelty to animals. In many countries, the term is used mostly for societies for the prevention of cruelty to animals SPCA", },
        { img: FB, title: "Los Angeles Regional Food Bank.",link:"https://www.lafoodbank.org/",subscribed:true, text: "Since 1973, the Los Angeles Regional Food Bank has distributed more than 1.7 billion pounds of food. The Food Bank collects food from hundreds of resources.  With the help of 30,000 volunteers annually and an agency network of more than 700 partner agencies, we serve more than 900,000 people on a monthly basis",}
    ])
    const [toggleform, setoggleForm] = useState(false)
    const [user,setUser] = useState( JSON.parse(localStorage.getItem("user")))

    useEffect(() => {
    //API CALL (back-end job getUser Info(name atm))
   

    }, [])
    function updateUsername() {
        console.log(username);
        //API CALL BACK-END /UPDATE Username
        //API .updateUsername(username)
    }
    function handlesubscription (i){
        const neworg = [...organizations]
        neworg[i] = {...neworg[i],subscribed:!neworg[i].subscribed}
        setorganizations(neworg)
    }
    return (
        <><script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript">  
    </script>
    
        <div className="brain">
            <div className="main-content">
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                    <div className="container-fluid">

                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">User profile</a>
                        

                        {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <div className="form-group mb-0">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="Search" type="text" />
                                </div>
                            </div>
                        </form> */}

                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </div>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-single-02"></i>
                                        <span>My profile</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-settings-gear-65"></i>
                                        <span>Settings</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-calendar-grid-58"></i>
                                        <span>Activity</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-support-16"></i>
                                        <span>Support</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    {/* NOTE TO MATTHEW: ASSIGN A VALUE TO THIS HREF BELOW --W */}
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{
                    minHeight: "600px", backgroundImage:
                        "url()", backgroundSize: "cover", backgroundPosition: "center top"
                }}>

                    <span className="mask bg-gradient-default opacity-8"></span>

                    <div className="container-fluid d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-7 col-md-10">
                                <h1 className="display-2 text-white">Hello {user?.user?.username || "user"}</h1>
                                <p className="text-white mt-0 mb-5">You are following {organizations.filter(o=>o.subscribed).length} Organizations: {organizations.filter(o=>o.subscribed).map(o=>o.title).join(", ")}</p>
                                <img src={user.user.image} alt="user"/>
                                <p className="text-white mt-0 mb-5"></p>
                                <a onClick={() => setoggleForm(!toggleform)} href="#!" className="btn btn-info">Edit profile </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt--7">
                    <div className="row">
                        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                            <div className="card card-profile shadow">

                                <ProfileViewer user={user.user} setUser={setUser} >




                                </ProfileViewer>
                            </div>
                        </div>

                        {toggleform ?

                            <ProfileForm user={user.user} setUser={setUser} >



                            </ProfileForm>:null
}
                    </div>
                </div>
            </div>


                        <div className="orgSubscriptions" style={{ paddingTop: "px", borderBottom: "1px solid grey", paddingBottom: "50px" }}>
                            {/* <img src={test}/> */}
                            <h3 className="Lion3">Organizations I'm Following</h3>
                            <CardDeck>
                                {organizations?.map((org,i) => (
                                    <Card>
                                        <Card.Img variant="top" src={org.img} />
                                        <Card.Body>
                                            <Card.Title>{org.title}</Card.Title>
                                            <Card.Text>
                                                {org.text}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <button onClick={()=>handlesubscription(i)}className="sub2">{org.subscribed?"UnSubscribe":"Subscribe"}</button>
                                        <a target="_blank" rel="noreferrer" href={org.link}>
                                        <button className="sub2">Visit Organization</button></a>
                                            <small className="text-muted">{org.updated}</small>
                                        </Card.Footer>
                                    </Card>
                                ))}


                            </CardDeck>

                        </div>



                        
        </div>
</>
    )
}

export default Profile
