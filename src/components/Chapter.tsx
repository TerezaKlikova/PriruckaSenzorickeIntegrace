import React, { FC } from 'react';

import Text from 'components/Text';
import { Flex } from 'components/Styled';

import { NavItem } from 'pages/Chapters';

import useHeaderHeight from 'hooks/useHeaderHeight';

type Props = {
	variant?: 'main' | 'activity';
	color?: string;
} & NavItem;

const Chapter: FC<Props> = ({ variant, id, title, color, children }) => {
	const topOffset = useHeaderHeight();
	return (
		<Flex
			id={variant === 'activity' ? `${id}-aktivity` : id}
			flexDirection="column"
			mb={variant ? 4 : 3}
			pt={topOffset}
			mt={-topOffset}
		>
			<Text fontSize={variant ? 'xl' : 'lg'} color={color} fontWeight="bold">
				{variant === 'activity' ? 'Aktivity' : title}
			</Text>
			{children}
		</Flex>
	);
};

export default Chapter;
