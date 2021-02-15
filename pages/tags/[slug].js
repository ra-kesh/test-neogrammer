
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import Card from '../../components/project/Card';

const Tag = ({ tag, projects, query }) => {
   

    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="container-fluid ">
                        <header>
                            <div className="div-project-header">
                                <h1 className="display-4 font-weight-bold">Projects by {tag.name}</h1>
                               
                            </div>
                        </header>
                        <div className="row">
                            {projects.map((project, i) => {
                                    return (
                                        <div className="col-lg-4 pro-card" key={i}> 
                                            <Card project= {project} />
                                            <hr />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, projects: data.projects, query };
        }
    });
};

export default Tag;