import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/project/Card';

const Tag = ({ tag, projects, query }) => {
   

    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="container-fluid ">
                        <header>
                            <div className="div-project-header">
                                <h1 className="display-4 font-weight-bold">{tag.name}</h1>
                               
                            </div>
                        </header>
                        <div className="row">
                        {projects.map((project, i) => (
                                    <div className="col-lg-4 pro-card">
                                        <Card key={i} project={project} />
                                        <hr />
                                    </div>
                                ))}
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