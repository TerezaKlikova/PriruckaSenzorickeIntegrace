/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import { Grid } from './Styled';

const Gallery: FC = ({ children }) => (
	<Grid
		gridAutoFlow={['row', 'column']}
		gridGap={3}
		alignItems="center"
		justifyItems="center"
		css={css`
			/* @media print {
				display: flex;
				justify-content: center;
			} */
		`}
	>
		{children}
	</Grid>
);

export default Gallery;
