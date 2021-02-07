import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import ProjectCreate from '../../../components/crud/ProjectCreate';
import Link from 'next/link';

const CreateProject = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Add a new Project</h2>
                        </div>
                        <div className="col-md-12">
                            <ProjectCreate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default CreateProject;