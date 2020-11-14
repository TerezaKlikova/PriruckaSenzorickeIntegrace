import React from 'react';
import { Global, css } from '@emotion/core';

import { Theme } from '.';

// Fonts
import 'theme/fonts/stylesheet.css';

export const FocusStyle = (theme: Theme) => css`
	transition: box-shadow 0.2s ease-in-out;
	box-shadow: 0 0 6px 1px ${theme.colors.primary};
	outline: none;
`;

export const InvertFocusStyle = css`
	box-shadow: 0 0 6px 1px white;
	outline: none;
`;

const GlobalStyles = () => (
	<Global
		styles={(theme: Theme) => css`
			body {
				margin: 0;
				font-family: ${theme.fontFamily}, -apple-system, BlinkMacSystemFont,
					'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
					'Helvetica Neue', sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				color: ${theme.colors.text};
				background-color: white;
			}

			* {
				font-family: ${theme.fontFamily}, -apple-system, BlinkMacSystemFont,
					'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
					'Helvetica Neue', sans-serif;
			}

			*:focus {
				${FocusStyle(theme)}
			}

			p {
				padding: 0;
				margin: 0;
			}
		`}
	/>
);

export default GlobalStyles;
