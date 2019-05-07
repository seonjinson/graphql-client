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

// It is not Graphql query, use apollo
export const MOVIE_DETAILS = gql`
query getMovieDetails($movieId: Int!){
  movieDetails(id: $movieId) {
    id
    title
    description_intro
    medium_cover_image
  }
}
`;
