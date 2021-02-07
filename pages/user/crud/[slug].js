import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import ProjectUpdate from '../../../components/crud/ProjectUpdate';
import Link from 'next/link';

const Project = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update blog</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectUpdate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Project;