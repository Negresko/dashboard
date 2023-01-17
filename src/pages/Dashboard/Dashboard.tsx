import React from 'react';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import SelectInput from '../../components/SelectInput/SelectInput';
import { ContainerDashbord } from './DashboardCSS';

const Dashboard: React.FC = () => {

    const options = [
        { value: 'Cláudio', label: 'Cláudio' }
    ];

    return (
        <ContainerDashbord>
            <ContentHeader title="Dashboard" lineColor="#FFF">
                <SelectInput options={options} />      
            </ContentHeader>
        </ContainerDashbord>
    );
}

export default Dashboard;