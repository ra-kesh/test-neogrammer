import Link from 'next/link';
import { API } from '../../config';

const SmallCard = ({ project }) => {
    return (
        <div className="card">
            <section>
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <img
                            className="img img-fluid"
                            style={{ height: '150px', width: '100%' }}
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
                </section>
                {/* <h6>by <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                </Link></h6>           */}
            </div>
        </div>
    );
};

export default SmallCard;