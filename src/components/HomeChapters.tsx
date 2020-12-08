/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import { Box, Flex, Grid } from 'components/Styled';
import Link from 'components/Link';
import Text from 'components/Text';

import { ChapterType } from 'pages/Chapters';

type Props = {
	children: ChapterType[];
};
const HomeChapters: FC<Props> = ({ children }) => (
	<Grid
		gridTemplateColumns="repeat(auto-fill, minMax(250px, 1fr))"
		gridGap={3}
		my={3}
		css={css`
			@media print {
				display: none;
			}
		`}
	>
		{children.map(c => (
			<Box key={c.id} position="relative" height={0} pb="100%">
				<Link
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
					href={`#${c.id}`}
					bg={c.color}
				>
					<Flex px={4} py={3} flexDirection="column" maxHeight="100%">
						<Box as={c.icon} flex={1} minWidth={0} />
						<Text
							color="white"
							fontSize="xl"
							fontWeight="bold"
							textAlign="center"
							flexShrink={0}
							mt={2}
						>
							{c.title}
						</Text>
					</Flex>
				</Link>
			</Box>
		))}
	</Grid>
);

export default HomeChapters;
