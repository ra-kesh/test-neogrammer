import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ project }) => {
    return (
        <div className="card">
            <section>
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <img
                            className="img img-fluid"
                            style={{ height: '250px', width: '100%' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
                    </a>
                </Link>
            </section>

            <div className="card-body">
                <section>
                    <Link href={`/projects/${project.slug}`}>
                        <a>
                            <h5 className="card-title">{project.title}</h5>
                        </a>
                    </Link>
                    <p className="card-text">{renderHTML(project.excerpt)}</p>
                </section>
            </div>

            <div className="card-body">
                Posted {moment(project.updatedAt).fromNow()} by{' '}
                <Link href={`/`}>
                    <a className="float-right"> <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                                        </Link></a>
                </Link>
            </div>
        </div>
    );
};

export default SmallCard;