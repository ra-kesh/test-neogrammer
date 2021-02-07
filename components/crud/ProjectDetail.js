import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeProject } from '../../actions/project';
import moment from 'moment';

const ProjectDetail = ({username}) => {
    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProjects(data);
            }
        });
    };

    const deleteProject = slug => {
        removeProject (slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadProjects();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteProject(slug);
        }
    };

    const showUpdateButton = project => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${project.slug}`}>
                    <a className="btn btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${project.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        }
    };


    const showAllProjects = () => {
        return projects.map((project, i) => {
            return (
                <div key={i} className="pb-5">
                    <h3>{project.title}</h3>
                    <p className="mark">
                        Devloped by {project.postedBy.name} | Added on {moment(project.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(project.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(project)}
                </div>
            );
        });
    };
    return (
        <React.Fragment>
             <div className="row">
                <div className="col-md-12">
                    {message && <div className="alert alert-warning">{message}</div>}
                    {showAllProjects()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProjectDetail;