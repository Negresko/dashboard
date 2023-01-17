import React, { useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader/ContentHeader';
import SelectInput from '../../components/SelectInput/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard/HistoryFinanceCard';

import { useParams } from 'react-router-dom';

import { ContainerList, ContentList, FiltersList } from './ListCSS';

const List: React.FC = () => {

  const { type } = useParams();

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const months = [
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' }
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 }
  ];

  return (
    <ContainerList>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <FiltersList>
        <button className="tag-filter tag-filter-recurrent">Recorrentes</button>
        <button className="tag-filter tag-filter-eventual">Eventuais</button>
      </FiltersList>

      <ContentList>
        <HistoryFinanceCard tagColor='#FFF' title='Conta de Luz' subtitle='27/07/2020' amount='RS 130,00' />
      </ContentList>
    </ContainerList>
  );
}

export default List;