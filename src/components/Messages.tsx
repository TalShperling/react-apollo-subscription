import { useQuery, gql } from '@apollo/client';
import { Book } from '../types/Book';

const QUERY = gql`
  query Books {
      books {
        id
        title
        author
      }
  }
`;

const SUBSCRIPTION = gql`
  subscription BookAdded {
    BookAdded {
      title
      id
      author
    }
  }
`;

function Messages() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ id, title, author }: Book) => (
        <div key={id}>
            <p>
                {id}. {author} - {title}
            </p>
        </div>
    ));
}

export default Messages;