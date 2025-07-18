const Eyes = ({ width = 64, height = 32, ...props }) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 64 32"
		xmlns="http://www.w3.org/2000/svg"
		aria-label="eyes"
		role="img"
		{...props}
	>
		<ellipse cx="20" cy="16" rx="14" ry="10" fill="#FFF" />
		<ellipse cx="44" cy="16" rx="14" ry="10" fill="#FFF" />
		<circle cx="20" cy="16" r="5" fill="#000" />
		<circle cx="44" cy="16" r="5" fill="#000" />
	</svg>
);

export default Eyes;
