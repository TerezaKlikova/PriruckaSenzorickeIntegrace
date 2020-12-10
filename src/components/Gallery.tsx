import React, { FC } from 'react';

import { Grid } from './Styled';

const Gallery: FC = ({ children }) => (
	<Grid
		gridAutoFlow={['row', 'column']}
		gridGap={3}
		alignItems="center"
		justifyItems="center"
		textAlign="center"
	>
		{children}
	</Grid>
);

export default Gallery;
