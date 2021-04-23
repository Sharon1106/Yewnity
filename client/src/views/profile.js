import React, { useEffect, useState } from 'react'

import "./profile.css"
import UCLAv from '../views/images/uclav.png'
import LAC9 from '../views/images/Lac9.png'
import HM from '../views/images/humane.png'
import avatar from '../views/images/avatar.png'
import { Row } from "../components/Profile";
import {ProfileViewer} from "../components/ProfileViewer";
import {ProfileForm} from "../components/ProfileForm";
{/* <Card>
<Card.Img variant="top" src={} />
<Card.Body>
<Card.Title>UCLA Veterans</Card.Title>
<Card.Text>
Yewnity is proud to be associated with UCLA Veterans!
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
))} */}
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
        { img: UCLAv, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", updated: "Last updated 3 mins ago" },
        {
            img: HM, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", updated: "Last updated 3 mins ago"
        },
        { img: HM, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", updated: "Last updated 3 mins ago" },
        { img: HM, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", updated: "Last updated 3 mins ago" }
    ])
    useEffect(() => {
        //API CALL (back-end job getUser Info(name atm))
    }, [])
    function updateUsername() {
        console.log(username);
        //API CALL BACK-END /UPDATE Username
        //API .updateUsername(username)
    }
    return (
        <div className="brain">
            <div className="main-content">
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                    <div className="container-fluid">

                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">User profile</a>

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
                                <h1 className="display-2 text-white">Hello User</h1>
                                <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                                <a href="#!" className="btn btn-info">Edit profile</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt--7">
                    <div className="row">
                        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                            <div className="card card-profile shadow">

            <ProfileViewer>




            </ProfileViewer>
                            </div>
                        </div>


                     <ProfileForm> 
                      
                      
                      
                    </ProfileForm>  
                    </div>
                </div>
            </div>

            <div className="controller" style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey",
                paddingBottom: "30px"
            }}>

            </div>
            {/* <div className="postHistory" style={{ justifyContent: "center", borderBottom: "1px solid grey", paddingBottom: "50px" }}>
                <h2>Recent Posts</h2>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={UCLAv} />
                        <Card.Body>
                            <Card.Title>UCLA Veterans</Card.Title>
                            <Card.Text>
                                Yewnity is proud to be partner with UCLA Veterans. UCLA Veterans has been serving veterans for over 70 years! Whether it's our medical school faculty and residents providing care to 3,000 individual patients a year at the VA, our on-campus supportive services for student veterans, state-of-the-art cosmetic and reconstructive surgery for warriors wounded while serving overseas, or groundbreaking research revolutionizing the way the U.S. military does business, UCLA serves those who serve in myriad ways. If you have any questions about the information, research, resources, and support that UCLA provides to veterans, please contact 310.206.6915 or email us at veteran@saonet.ucla.edu
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={LAC9} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div className="orgSubscriptions" style={{ paddingTop: "30px", borderBottom: "1px solid grey", paddingBottom: "50px" }}>
                <h3>Organizations I'm Following</h3>
                <CardDeck>
                    {organizations?.map(org => (
                        <Card>
                            <Card.Img variant="top" src={org.img} />
                            <Card.Body>
                                <Card.Title>{org.title}</Card.Title>
                                <Card.Text>
                                    {org.text}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{org.updated}</small>
                            </Card.Footer>
                        </Card>
                    ))}


                </CardDeck>

            </div> */}
        </div>

    )
}

export default Profile
