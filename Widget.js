import React from 'react';

const Widget = (props)=> <input onChange={props.update} value={props.value} />

export default Widget;