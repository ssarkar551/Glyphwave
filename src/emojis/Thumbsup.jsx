const ThumbsUp = ({
	width = 24,
	height = 24,
	fill = "currentColor",
	...props
}) => (
	<svg
		width={width}
		height={height}
		fill={fill}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-label="thumbs up"
		role="img"
		{...props}
	>
		<path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm5-6a1 1 0 0 1-1 1h-2v1a2 2 0 0 1-4 0v-1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm2-4a1 1 0 0 1-2 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0 3 3 0 0 1 6 0zM7 11a1 1 0 0 1-2 0 3 3 0 0 1 6 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0z" />
	</svg>
);

export default ThumbsUp;
