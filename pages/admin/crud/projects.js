import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import ProjectDetail from '../../../components/crud/ProjectDetail';
import Link from 'next/link';

const Project = () => {
   
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Projects</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectDetail />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Project;