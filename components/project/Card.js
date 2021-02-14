import Link from 'next/link';
import renderHTML from 'react-render-html';
import Moment from 'moment';
import { API } from '../../config';

const Card = ({ project }) => {
    const showProjectCategories = project =>
        project.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="mark m-2 p-2">{c.name}</a>
            </Link>
        ));

    const showProjectTags = project =>
        project.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="pro-tag mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
      
   <div className="card pb-4 p-2">
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
       
            <section>
                   {showProjectCategories(project)}
        
                    <Link href={`/projects/${project.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{project.title}</h2>
                    </a>
                    </Link>

                    <div className="card-author">
                        <h4> by  <Link href={`/profile/${project.postedBy.username}`}>
                                        <a>{project.postedBy.username}</a>
                        </Link> </h4>
                    
                    </div>          
             </section>
             <section>
                <div>

                {showProjectTags(project)}
                </div>
              
            </section>
            <div>
            <p className="float-right">
                     Added {Moment(project.updatedAt).fromNow()}
                </p>
            </div>

            {/* <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: '150px', width: 'auto' }}
                            src={`${API}/project/photo/${project.slug}`}
                            alt={project.title}
                        />
                        
                    </section>
                </div>
               
                <div className="col-md-8">
                   
                </div>
            </div> */}
        </div>
    
        
    );
};

export default Card;
