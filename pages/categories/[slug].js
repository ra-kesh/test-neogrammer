import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/project/Card';

const Category = ({ category, projects }) => {
    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="container-fluid ">
                        <header>
                            <div className="div-project-header">
                                <h1 className="display-4 font-weight-bold">Projects for {category.name}</h1>
                               
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

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { category: data.category, projects: data.projects };
        }
    });
};

export default Category;