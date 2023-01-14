import React from 'react';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import { ContainerDashbord } from './DashboardCSS';

const Dashboard: React.FC = () => {
    return (
        <ContainerDashbord>
            <ContentHeader />           
        </ContainerDashbord>
    );
}

export default Dashboard;