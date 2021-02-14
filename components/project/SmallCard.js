
import Link from 'next/link';
import renderHTML from 'react-render-html';
import Moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ project }) => {
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
      
   <div className="card p-2 pb-3">
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
                    {showProjectTags(project)}
            </section>
            <section>
                <p className="float-right m-0 mt-3">
                     Added {Moment(project.updatedAt).fromNow()}
                </p>
            </section>
        </div>
       
        
    );
};

export default SmallCard;


// import Link from 'next/link';
// import renderHTML from 'react-render-html';
// import moment from 'moment';
// import { API } from '../../config';

// const SmallCard = ({ project }) => {
//     return (
//         <div className="card">
//             <section>
//                 <Link href={`/projects/${project.slug}`}>
//                     <a>
//                         <img
//                             className="img img-fluid"
//                             style={{ height: '250px', width: '100%' }}
//                             src={`${API}/project/photo/${project.slug}`}
//                             alt={project.title}
//                         />
//                     </a>
//                 </Link>
//             </section>

//             <div className="card-body">
//                 <section>
//                     <Link href={`/projects/${project.slug}`}>
//                         <a>
//                             <h5 className="card-title">{project.title}</h5>
//                         </a>
//                     </Link>
//                     {/* <p className="card-text">{renderHTML(project.excerpt)}</p> */}
//                 </section>
//             </div>

//             <div className="card-body">
//                 Posted {moment(project.updatedAt).fromNow()} by{' '}
//                 <Link href={`/`}>
//                     <a className="float-right"> <Link href={`/profile/${project.postedBy.username}`}>
//                                             <a>{project.postedBy.username}</a>
//                                         </Link></a>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default SmallCard;