// import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
// import ContactForm from '../../components/form/ContactForm';
// import { useRouter } from 'next/router';

const UserProfile = ({ user, projects, query }) => {

    const showUserProjects = () => {
        return projects.map((project, i) => {
            return (
                <div className="mt-4 mb-4" key={i}>

                <h6><Link href={`/projects/${project.slug}`}>
                          <div className="card">
                                <div className="row">
                                        <div className="col-lg-2">
                                            <img
                                                src={`${API}/project/photo/${project.slug}`}
                                                alt={project.title}
                                                className="img img-fluid featured-image"
                                                style={{ height: '10vh', width: '100%' }}
                                            />   
                                        </div>
                                        <div className="col-lg-5">
                                             <a className="">{project.title}</a>
                                       </div>
                                </div>  
                               
                            </div>
                        
                    </Link></h6>
                    
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            {/* {head()} */}
            <Layout>
                <div className="container-fluid">
                <header>
                        <div className="div-project-header">
                            <h1 className="display-4 font-weight-bold">NeoGrammer Detail</h1>
                        
                        </div>
                </header>
                <div className="row pro-wrapper">
                        <div className="col-lg-4 text-center card">
                            <div >
                                <img
                                    src={`${API}/user/photo/${user.username}`}
                                    className="img img-fluid img-thumbnail mb-3"
                                    style={{ maxHeight: '250px', maxWidth: '100%' , borderRadius:'50%'}}
                                    alt="user profile"
                                />
                            </div>
                            <div>
                            <h4>Joined {moment(user.createdAt).fromNow()}</h4>
                            </div> 
                        </div>
                        <div className="col-lg-6 div-user-details">
                            <h4>{user.name}</h4>
                            <div>
                            <p className="text-muted">{user.about}</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <br />

                <div className="container pb-5 mt-5">
                    <div className="row pro-wrapper">

                        <div className="col-lg-10">
                           <h2 className="card-title pt-4 pb-4 pl-4 pr-4 ">
                                        List of projects built by {user.name}
                             </h2>
                            <hr/>
                        </div>

                        <div className="col-lg-9">
                            
                            <div >
                            {showUserProjects()}
                            </div>
                        </div>

                       
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