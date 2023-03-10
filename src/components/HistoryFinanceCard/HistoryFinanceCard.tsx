import React from 'react';
import { ContainerHistoryFinanceCard, Tag } from './HistoryFinanceCardCSS';

interface IHistoryFinanceCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({tagColor, title, subtitle, amount}) => {
  return (
    <ContainerHistoryFinanceCard>
        <Tag color={tagColor}/>
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </ContainerHistoryFinanceCard>
  );
}

export default HistoryFinanceCard;