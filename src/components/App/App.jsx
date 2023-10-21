import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import data from '../../data/article.json';
import dataStat from '../../data/data.json';
import forbes from '../../data/forbes.json';
import transaction from '../../data/transactions.json';

export const App = () => {
  return (
    console.log(data) || (
      <Section>
        <Container>
          <Heading marginBottom="50px" textAlign="center">
            Task 1
          </Heading>
          <BlogCard
            poster={data.poster}
            tag={data.tag}
            title={data.title}
            description={data.description}
            userName={data.name}
            avatar={data.avatar}
            postedAt={data.postedAt}
          />
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Task 2
          </Heading>
          <Statistics title="Main Statistics" stats={dataStat} />
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Task 3
          </Heading>
          <ForbesList list={forbes} />
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Task 4
          </Heading>
          <CryptoHistory  transaction={transaction}/>
        </Container>
      </Section>
    )
  );
};
