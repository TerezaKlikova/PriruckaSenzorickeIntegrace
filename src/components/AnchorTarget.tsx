/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { ComponentProps, FC } from 'react';

import { Flex } from 'components/Styled';

import useHeaderHeight from 'hooks/useHeaderHeight';

type Props = ComponentProps<typeof Flex> & {
	id: string;
};

const AnchorTarget: FC<Props> = props => {
	const topOffset = useHeaderHeight();
	return (
		<Flex
			{...props}
			css={css`
				padding-top: ${topOffset}px;
				margin-top: -${topOffset}px;
			`}
		/>
	);
};

export default AnchorTarget;
