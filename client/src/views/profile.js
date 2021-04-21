import React, { useEffect, useState } from 'react'
import profilepic from '../images/User-Example.jpeg'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "./profile.css"
import UCLAv from '../views/images/uclav.png'
import LAC9 from '../views/images/Lac9.png'
import HM from '../views/images/humane.png'
import avatar from '../views/images/avatar.png'
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

                        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <div className="form-group mb-0">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="Search" type="text" />
                                </div>
                            </div>
                        </form>

                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" />
                                        </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                                        </div>
                                    </div>
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

                <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: 
                "url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg)", backgroundSize: "cover", backgroundPosition: "center top"}}>

                    <span className="mask bg-gradient-default opacity-8"></span>

                    <div className="container-fluid d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-7 col-md-10">
                                <h1 className="display-2 text-white">Hello Jesse</h1>
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
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a href="#">
                                                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                                        <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pt-md-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Friends</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Photos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3>
                                            Jessica Jones<span className="font-weight-light">, 27</span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                                        <div>
                                            <i className="ni education_hat mr-2"></i>University of Computer Science
                </div>
                                        <hr className="my-4" />
                                        <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                                        <a href="#">Show more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 order-xl-1">
                            <div className="card bg-secondary shadow">
                                <div className="card-header bg-white border-0">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h3 className="mb-0">My account</h3>
                                        </div>
                                        <div className="col-4 text-right">
                                            <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <h6 className="heading-small text-muted mb-4">User information</h6>
                                        <div className="pl-lg-4">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-username">Username</label>
                                                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value="lucky.jesse" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-email">Email address</label>
                                                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-first-name">First name</label>
                                                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value="Lucky" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-last-name">Last name</label>
                                                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value="Jesse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-4" />

                                        <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                        <div className="pl-lg-4">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-address">Address</label>
                                                        <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-city">City</label>
                                                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York" />
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
                                                        <label className="form-control-label" for="input-country">Postal code</label>
                                                        <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-4" />

                                        <h6 className="heading-small text-muted mb-4">About me</h6>
                                        <div className="pl-lg-4">
                                            <div className="form-group focused">
                                                <label>About Me</label>
                                                <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
                <div>
                    <img style={{ width: "300px", height: "250px", borderRadius: "80px" }}
                        src={avatar}
                    />
                </div>
                <div>
                    <h4>Username:</h4>
                    <input></input>
                    <div className="profile" style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <input value={username}
                            onChange={(e) => setusername(e.target.value)}>

                        </input>
                        <button onClick={updateUsername}>Change Username</button>
                        <h1>TEST</h1>Welcome to Yewnity Profile Page here you can see!
                        <h6>Something goes here</h6>
                        <h6>Something goes here</h6>

                    </div>

                </div>
            </div>
            <div className="postHistory" style={{ justifyContent: "center", borderBottom: "1px solid grey", paddingBottom: "50px" }}>
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

            </div>
        </div>

    )
}

export default Profile
