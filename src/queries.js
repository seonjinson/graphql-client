import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query{
    fetchMovies(rating:9, limit:5){
      id
      title
      rating
      medium_cover_image
    }
  }
`;
