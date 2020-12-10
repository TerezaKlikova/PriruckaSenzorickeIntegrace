/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import CoverImage from 'assets/cover.svg';

import { Box } from './Styled';
import Text from './Text';

const PrintTitlePage: FC = () => (
	<Box
		pt={400}
		width="100%"
		css={css`
			@media not print {
				display: none;
			}
			page-break-after: always;
			background: url(${CoverImage});
			background-size: contain;
			background-position: center top;
			background-repeat: no-repeat;
		`}
	>
		<Box p={4} pl={0} width="80%" bg="rgba(255,255,255,0.75)">
			<Text
				fontSize={36}
				color="primary"
				fontWeight="bold"
				lineHeight={1.1}
				mb={2}
			>
				Příručka senzorické integrace
			</Text>
			<Text fontStyle="italic" height="100%">
				Praktická příručka k uvedení do teorie a praxe problematiky senzorické
				integrace
			</Text>
		</Box>
		<Text pl={0} color="primary" fontWeight="bold" pt={60}>
			Bc. Tereza Kliková
		</Text>
	</Box>
);

export default PrintTitlePage;
