import React, { FC } from 'react';

import Text from 'components/Text';
import AnchorTarget from 'components/AnchorTarget';

const UsefulLinks: FC = () => (
	<AnchorTarget id="uzitecne-odkazy" flexDirection="column">
		<Text fontSize="xl" fontWeight="bold" color="primary" my={3}>
			Užitečné odkazy
		</Text>
		<Text height={1600} />
	</AnchorTarget>
);

export default UsefulLinks;
