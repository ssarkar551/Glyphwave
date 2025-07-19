const Disappointed = ({ width = 64, height = 32, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 64 32"
		aria-label="disappinted-face"
		role="img"
		{...props}
	>
		<path d="M8 11V9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm7 1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm8 0A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9zm-4 5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1 4 4 0 0 1 4-4h2a4 4 0 0 1 4 4zm-2.269-1A2 2 0 0 0 13 15h-2a2 2 0 0 0-1.731 1z" />
	</svg>
);

export default Disappointed;
