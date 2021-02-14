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
                            style={{ height: '200px', width: '100%' }}
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
                            <h4 className="card-title">{project.title}</h4>
                        </a>
                    </Link>
                </section>
            </div>

            <div className="card-body">
                By <h6><Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                   </Link></h6> 
                
            </div>
        </div>
    );
};

export default SmallCard;