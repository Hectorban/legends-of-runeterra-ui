import React, { FC } from 'react'

interface Props {
	x: number
	y: number
	width: number
	height: number
	fill: string
}

const ManaPylon:FC<Props> = ({fill, x, y, width, height}: Props) => {
	const path = `M${(x+width)-4.7},${y + height}
		v-${height/2} l-${(width/3)} -${height > 0 ? 9 : 0} l-${(width/3)} ${height > 0 ? 9 : 0} v${height/2} Z`;
	return (
		<path d={path} fill={fill}/>
	)
}

export default ManaPylon
