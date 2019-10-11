import React, { useState } from 'react';

const initialState = {
  title: '',
  director: '',
  metascore: '',
  stars: []
}

const UpdateMovie = props => {
  const [state, setState] = useState(initialState);
  
  return(
    <div>
    </div>
  )
}

export default UpdateMovie;