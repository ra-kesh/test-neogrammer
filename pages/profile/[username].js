import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import ContactForm from '../../components/form/ContactForm';
import { useRouter } from 'next/router';

const UserProfile = ({ user, projects, query }) => {

    const showUserProjects = () => {
        return projects.map((project, i) => {
            return (
                <div className="mt-4 mb-4" key={i}>

                <h6><Link href={`/projects/${project.slug}`}>
                        <a className="lead">{project.title}</a>
                    </Link></h6>
                    
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            {/* {head()} */}
            <Layout>
                <div className="container">
                <div className="row pro-wrapper">
                        <div className="col-lg-4">
                            <div >
                                <img
                                    src={`${API}/user/photo/${user.username}`}
                                    className="img img-fluid img-thumbnail mb-3"
                                    style={{ maxHeight: '250px', maxWidth: '100%' , borderRadius:'50%'}}
                                    alt="user profile"
                                />
                            </div>
                            <div>
                            <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                            </div> 
                        </div>
                        <div className="col-lg-6">
                            <h4>{user.name}</h4>
                            <div>
                            <p className="text-muted">{user.about}</p>
                            </div>
                        </div>
                        {/* <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5>{user.name}</h5>
                                          
                                           


                                        </div>
                                        <div className="col-md-4">
                                            <img
                                                src={`${API}/user/photo/${user.username}`}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ maxHeight: '150px', maxWidth: '100%' }}
                                                alt="user profile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>

                <br />

                <div className="container pb-5">
                    <div className="row pro-wrapper">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 ">
                                        All the projects built by {user.name}
                                    </h5>

                                    {showUserProjects()}
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light">
                                        Message {user.name}
                                    </h5>
                                    <br />
                                    <ContactForm authorEmail={user.email}/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

UserProfile.getInitialProps = ({ query }) => {
    // console.log(query);
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
           
        } else {
           
            return { user: data.user, projects: data.projects, query };
        }
    });
};

export default UserProfile;