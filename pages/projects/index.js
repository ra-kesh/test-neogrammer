// import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listProjectsWithCategoriesAndTags } from '../../actions/project';
import Card from '../../components/project/Card';

const Projects = ({projects, categories, tags, totalProjects, projectsLimit, projectSkip, router }) => {

    const [limit, setLimit] = useState(projectsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalProjects);
    const [loadedProjects, setLoadedProjects] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listProjectsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedProjects([...loadedProjects, ...data.projects]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load more
                </button>
            )
        );
    };

    const showAllProjects = () => {
        return projects.map((project, i) => {
            return (
                <article key={i}> 
                    <Card project= {project} />
                    <hr />
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    };

    const showAllTags = () => {
        return tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    };

    const showLoadedProjects = () => {
        return loadedProjects.map((project, i) => (
            <article key={i}>
                <Card project={project} />
            </article>
        ));
    };

    return (
        <Layout>
            <main>
                <div className="container-fluid">
                    <header>
                        <div className="col-md-12 pt-3">
                            <h1 className="display-4 font-weight-bold text-center">Projects by NeoGrammers</h1>
                        </div>
                        <section>
                            <div className="pb-5 text-center">
                                {showAllCategories()}
                                <br />
                                {showAllTags()}
                            </div>
                        </section>
                    </header>
                </div>
                <div className="container-fluid">{showAllProjects()}</div>
                    <div className="container-fluid">{showLoadedProjects()}</div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
            </main>
        </Layout>
    );
};

Projects.getInitialProps = () => {
    let skip = 0;
    let limit = 10;

    return listProjectsWithCategoriesAndTags(skip,limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
               projects: data.projects,
                categories: data.categories,
                tags: data.tags,
                totalProjects: data.size,
                projectsLimit: limit,
                projectSkip: skip
            };
        }
    });
};

export default Projects;


