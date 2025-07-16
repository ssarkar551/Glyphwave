const Fire = ({ width = 24, height = 24, fill = "currentColor", ...props }) => (
	<svg
		width={width}
		height={height}
		fill={fill}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-label="fire"
		role="img"
		{...props}
	>
		<path d="M13.5 2s.5 2.5 0 4c-.5 1.5-3 3-3 5s1.5 3 2.5 3 2-1 2-2 1 1.5 1 3.5-2 4.5-5 4.5-6-3-6-7 3.5-7.5 8-11z" />
	</svg>
);

export default Fire;
