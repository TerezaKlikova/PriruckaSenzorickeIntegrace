import React, { FC } from 'react';

import Text from 'components/Text';
import AnchorTarget from 'components/AnchorTarget';

const Sources: FC = () => (
	<AnchorTarget id="pouzite-zdroje" flexDirection="column">
		<Text fontSize="xl" fontWeight="bold" color="primary" my={3}>
			Použité zdroje
		</Text>
		<Text height={1600} />
	</AnchorTarget>
);

export default Sources;
