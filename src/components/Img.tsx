/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import { CitationProps } from './Citation';
import Link from './Link';
import { Box } from './Styled';

const Img: FC<CitationProps> = ({ src, index, title }) => (
	<Box
		css={css`
			@media print {
				display: inline-block;
				page-break-inside: avoid;
				max-width: 50%;
				&:only-child {
					max-width: 66%;
				}
			}
		`}
	>
		<img
			src={src}
			alt={title}
			css={css`
				display: block;
				margin: 0 auto;
				margin-bottom: 8px;
				max-height: 300px;
				max-width: 100%;
			`}
		/>
		<Link
			fontSize="sm"
			href="#pouzite-zdroje-obrazky"
			noLink
			css={css`
				@media print {
					display: inline-block;
					font-size: 10px;
					line-height: 1;
				}
			`}
		>
			Obr. {index}
			{title && `: ${title}`}
		</Link>
	</Box>
);

export default Img;
