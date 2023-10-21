import { formateDate } from 'helpers/dateFormate';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ transaction }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transaction.map(({ id, price, amount, date }, idx) => {
          return (
            <Tr key={id}>
              <Td>{idx + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{formateDate(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
