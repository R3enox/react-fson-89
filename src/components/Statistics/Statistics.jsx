import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({ title, stats }) => {
  // stats[0].icon = <FaRegThumbsUp />;
  // stats[1].icon = <MdPeople />;
  // stats[2].icon = <MdOutlineProductionQuantityLimits />;
  // stats[3].icon = <GiTreeDoor />;

  const icons = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];

  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }, idx) => {
          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={icons[idx]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
