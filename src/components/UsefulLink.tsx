import React, { FC } from 'react';

import Link from './Link';
import { ListItem, UnorderedList } from './List';

export type UsefulLinkProps = {
	title: string;
	href: string;
	description: string[];
};

const UsefulLink: FC<UsefulLinkProps> = ({ title, href, description }) => (
	<>
		<Link
			href={href}
			target="_blank"
			rel="noreferrer"
			underline
			fontSize="xl"
			mt={3}
		>
			{title}
		</Link>
		<UnorderedList>
			{description.map((d, i) => (
				<ListItem key={i}>{d}</ListItem>
			))}
		</UnorderedList>
	</>
);

export default UsefulLink;
