
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState , useEffect } from 'react';
import { singleProject , listRelated } from '../../actions/project';
import { API } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/project/SmallCard';
import DisqusThread from '../../components/DisqusThread';

const SingleProject = ({ project , query }) => {

    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ project }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const showProjectCategories = project =>
        project.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className=" mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showProjectTags = project =>
        project.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className=" mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    const showRelatedProject = () => {
        return related.map((project, i) => (
            <div className="col-lg-12 p-3" key={i}>
                <article>
                    <SmallCard project={project} />
                </article>
            </div>
        ));
    };
    const showComments = () => {
        return (
            <div>
                <DisqusThread id={project.id} title={project.title} path={`/project/${project.slug}`} />
            </div>
        );
    };
    return (
        <React.Fragment>
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid ">
                            <header>
                                <div className="div-project-header">
                                    <h1 className="display-4 font-weight-bold">Project Details</h1>
                                
                                </div>
                            </header>
                            <div className="row pro-wrapper">
                           
                                <div className="col-lg-6">
                                        <div>
                                            <img
                                                src={`${API}/project/photo/${project.slug}`}
                                                alt={project.title}
                                                className="img img-fluid featured-image"
                                                style={{ height: '50vh', width: '100%' }}
                                            />   
                                        </div>
                                    

                                        <section>
                                        <div className="lead pro-desc">{renderHTML(project.body)}</div>
                                    </section>
                                    
                                    </div>
                                    <div className="col-lg-3 ">

                                    <div>


                                        <p className=" mt-3 ">
                                            Built by :
                                            <h4>  <Link href={`/profile/${project.postedBy.username}`}>
                                                <a>{project.postedBy.username}</a>
                                            </Link></h4>       
                                        </p>
                                        </div>
                                        <div className="pb-3">

                                            <p className=" mt-3 ">
                                                Built for :
                                                <h4>{showProjectCategories(project)}</h4>       
                                            </p>
                                            
                                            <p className=" mt-3 ">
                                                Built using :
                                                <h4>{showProjectTags(project)}</h4>       
                                            </p>

                                        </div>
                                    
                                    <div className="container">
                                            <h4 className="text-center pt-5">Similar Projects</h4>
                                            <hr />
                                            <div className="row">{showRelatedProject()} ,</div>

                                        </div>
                                    </div>
                            

                            </div>
                           
                            <div className="container pb-5">
                                     {showComments()}
                            </div>
                            {/* <section> 
                                <div className="row" style={{ marginTop: '-30px' }}>
                                    <img
                                        src={`${API}/project/photo/${project.slug}`}
                                        alt={project.title}
                                        className="img img-fluid featured-image"
                                    />
                                </div>
                            </section> */}
                            {/* <section>
                                <p className="lead mt-3 mark">
                                Devloped by
                                        <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                                        </Link>| Added {moment(project.updatedAt).fromNow()}
                                </p>

                                <div className="pb-3">
                                    {showProjectCategories(project)}
                                    {showProjectTags(project)}
                                    <br />
                                    <br />
                                </div>
                            </section> */}
                        </div>
                        {/* <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(project.body)}</div>
                            </section>
                        </div> */}

                       
                    </article>
                      {/* <div className="container">
                            <h4 className="text-center pt-5 pb-5 h2">Similar Projects</h4>
                            <hr />
                            <div className="row">{showRelatedProject()}</div>

                        </div> */}

                        {/* <div className="container pb-5">
                            {showComments()}
                        </div> */}
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleProject.getInitialProps = ({ query }) => {
    return singleProject(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           
            return { project: data };
        }
    });
};

export default (SingleProject);