import React from 'react'

const ColorBox = ({ color }) => {
	return (
		<div
			className="color-box"
			style={
				color === '' ? { backgroundColor: '#333' } : { backgroundColor: color }
			}
		>
			<p className="color-box__value">{color === '' ? 'eg: red' : color}</p>
		</div>
	)
}

export default ColorBox
