import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  title: '',
  director: '',
  metascore: '',
  stars: []
}

const UpdateMovie = props => {
  const [state, setState] = useState(initialState);
  // console.log(props);

  useEffect(() => {
    fetchMovie(props.match.params.id);
  }, [props.match.params.id]);

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setState(res.data))
      .catch(err => console.log(err.response))
  }

  return(
    <div>
    </div>
  )
}

export default UpdateMovie;