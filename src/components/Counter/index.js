import React, { PropTypes } from 'react';

function Counter({ count, onClick }){
	return(
		<div>
			<p>{count}</p>
			<button onClick={onClick}>Increment</button>
		</div>
	);
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired 
};

export default Counter;