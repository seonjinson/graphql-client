import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = ({
  match: {
    params: { movieId },
  },
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId, 10) }}>{({ loading, error, data }) => {
    if (loading) return 'loading';
    if (error) return 'error';
    return (
      <React.Fragment>
        {data.movieDetails.title}<br />
        {data.movieDetails.medium_cover_image}<br />
        {data.movieDetails.description_intro}<br />
      </React.Fragment>
    );
  }}
  </Query>
);

export default Detail;
