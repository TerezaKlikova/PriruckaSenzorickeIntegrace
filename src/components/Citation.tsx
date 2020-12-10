import React, { FC } from 'react';

import Link from './Link';
import { ListItem } from './List';

export type CitationProps = {
	id: string;
	index: number;
	title?: string;
	text: string;
	href?: string;
	src?: string;
};

const Citation: FC<CitationProps> = ({ id, text, href }) => (
	<ListItem id={id}>
		{text}
		{href && (
			<>
				{' '}
				Dostupné z:{' '}
				<Link href={href} target="_blank" rel="noreferrer" underline noLink>
					{href}
				</Link>
			</>
		)}
	</ListItem>
);

export default Citation;
