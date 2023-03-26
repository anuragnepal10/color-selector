import React, { useState, useRef } from 'react'
import ColorBox from './ColorBox'
import Input from './Input'

function App() {
	const [color, setColor] = useState('')
	const inputRef = useRef(null)

	const handleColor = () => {
		const newColor = inputRef.current.value
		setColor(newColor)
	}

	return (
		<div className="App">
			<ColorBox color={color} />
			<Input color={color} handleColor={handleColor} inputRef={inputRef} />
		</div>
	)
}

export default App
