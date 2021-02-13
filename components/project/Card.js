import Link from 'next/link';
import renderHTML from 'react-render-html';
import Moment from 'moment';
import { API } from '../../config';

const Card = ({ project }) => {
    const showProjectCategories = project =>
        project.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showProjectTags = project =>
        project.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
      
   <div className="card pb-4">
            {/* <header>
                <Link href={`/projects/${project.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{project.title}</h2>
                    </a>
                </Link>
            </header> */}
          
            
            <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '150px', width: 'auto' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
            </section>
            <section>
                {showProjectCategories(project)}
               
            </section>
            <section>
                <p className="mark ml-1 pt-2 pb-2">
                    Devloped by  <Link href={`/profile/${project.postedBy.username}`}>
                                            <a>{project.postedBy.username}</a>
                                        </Link> | Added {Moment(project.updatedAt).fromNow()}
                </p>
            </section>
            <div className="row">
                <div className="col-md-4">
                    {/* <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '150px', width: 'auto' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
                        
                    </section> */}
                </div>
                <section>
                        <Link href={`/projects/${project.slug}`}>
                        <a>
                            <h2 className="pt-3 pb-3 font-weight-bold">{project.title}</h2>
                        </a>
                        </Link>
                        {/* <div className="pb-3">{renderHTML(project.excerpt)}</div>
                        <Link href={`/projects/${project.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link> */}
                        <div>

                        {showProjectTags(project)}
                        </div>
                    </section>
                {/* <div className="col-md-8">
                   
                </div> */}
            </div>
        </div>
    
        
    );
};

export default Card;
