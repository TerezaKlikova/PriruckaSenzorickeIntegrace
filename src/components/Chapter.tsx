import React, { FC } from 'react';

import { Flex } from 'components/Styled';
import Text from 'components/Text';
import AnchorTarget from 'components/AnchorTarget';

import { ChapterType } from 'pages/Chapters';

const Chapter: FC<ChapterType> = ({ id, title, content }) => (
	<AnchorTarget id={id} flexDirection="column">
		<Text my={3} fontWeight="bold" fontSize="xl">
			{title}
		</Text>
		{content}
		<Flex height={600} />
	</AnchorTarget>
);

export default Chapter;
