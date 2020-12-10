import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';
import { ListItem, UnorderedList } from 'components/List';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as Nose } from 'assets/nose-front.svg';

const metadata = {
	id: 'cichove-vnimani',
	icon: Nose,
	title: 'Čichové vnímání',
	color: '#ff8f00',
	subchapters: MapChapters('cichove-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
	]),
	activities: MapChapters('cichove-vnimani', 'aktivita', [
		'Esenciální oleje',
		'Čichové pexeso',
	]),
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>každá vůně je pro něho příliš intenzivní</ListItem>
				<ListItem>vše cítí velmi extrémně, včetně odéru osob</ListItem>
				<ListItem>
					někteří mívají problémy s vyprazdňováním, před pachy utíkají, nosí
					stále stejné (své) oblečení
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					u dětí, které vyhledávají intenzivně pachy, jde někdy až o kompulzivní
					očichávání
				</ListItem>
				<ListItem>
					děti čichají k běžným věcem, jako jsou vlasy, knížky, tužky
				</ListItem>
				<ListItem>
					někdy si z toho udělají i rituál a než s věcí manipulují, musí ji
					nejdříve očichat
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata} />

		<Chapter {...metadata.activities[0]}>
			<Text>
				Aromaterapie je pro mnoho děti, ale i dospělých skvělým prostředkem k
				relaxaci, ale také k aktivizaci smyslů. Je potřeba využívat kvalitní
				oleje, aby měly správný účinek.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[1]}>
			<Text>Dítě hádá známé vůně podle čichu, bez zrakové opory.</Text>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
