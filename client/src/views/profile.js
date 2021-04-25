import React, { useEffect, useState } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "./profile.css"
import UCLAv from '../views/images/uclav.png'
import LAC9 from '../views/images/Lac9.png'
import HM from '../views/images/humane.png'
import FB from '../views/images/fb.png'
import { ProfileViewer } from "../components/ProfileViewer";
import { ProfileForm } from "../components/ProfileForm";


const Profile = () => {
    const [username, setusername] = useState("Random")
    const [organizations, setorganizations] = useState([
        { img: UCLAv, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", },
        { img: LAC9, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", },
        { img: HM, title: "UCLA Veterans", text: "Yewnity is proud to be associated with UCLA Veterans!", },
        { img: FB, title: "UCLA Veterans", text: "Test123", }
    ])
    const [toggleform, setoggleForm] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    useEffect(() => {
        //API CALL (back-end job getUser Info(name atm))
    }, [])
    function updateUsername() {
        console.log(username);
        //API CALL BACK-END /UPDATE Username
        //API .updateUsername(username)
    }
    return (
        <><script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript">
        </script>
            <div className="brain">
                <div className="main-content">
                    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                        <div className="container-fluid">
                            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">User profile</a>
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
                                    <img src={user.user.image} alt="user" />
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
                                </ProfileForm> : null
                            }
                        </div>
                    </div>
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
                                    <button className="sub2">Subscribe</button>
                                    <button className="sub2">Visit Organization</button>
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

export default Profile;
