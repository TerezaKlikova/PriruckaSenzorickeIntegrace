/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import { Box } from './Styled';
import Text from './Text';

const PrintTitlePage: FC = () => (
	<Box
		css={css`
			@media not print {
				display: none;
			}
			page-break-after: always;
		`}
	>
		<Text fontSize={42} color="primary" lineHeight={1.1} mb={2} mt={330}>
			Příručka senzorické integrace
		</Text>
		<Text fontStyle="italic" height="100%">
			Praktická příručka k uvedení do teorie a praxe problematiky senzorické
			integrace
		</Text>
		<Text color="primary" fontWeight="bold" mt={176}>
			Bc. Tereza Kliková
		</Text>
	</Box>
);

export default PrintTitlePage;
