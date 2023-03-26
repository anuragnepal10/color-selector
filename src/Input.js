import React from 'react'

const Input = ({ inputRef, handleColor }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				placeholder="Enter a Color"
				autoFocus
				ref={inputRef}
				onChange={handleColor}
			/>
		</form>
	)
}

export default Input
