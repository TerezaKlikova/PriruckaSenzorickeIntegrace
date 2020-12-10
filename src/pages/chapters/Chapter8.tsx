import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';
import { ListItem, UnorderedList } from 'components/List';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as Tongue } from 'assets/tongue.svg';

const metadata = {
	id: 'chutove-vnimani',
	icon: Tongue,
	title: 'Chuťové vnímání',
	color: '#d3746a',
	subchapters: MapChapters('chutove-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
	]),
	activities: MapChapters('chutove-vnimani', 'aktivita', [
		'Zvyšování tolerance struktur v ústech',
		'Ochutnávání nových chutí',
		'Křupavé dílo',
		'Kousátka',
	]),
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>každá chuť moc ostrá, nebo sladká</ListItem>
				<ListItem>
					v jídle jsou velmi vybíraví a jí velmi málo - občas se může dostat až
					k poruše příjmu potravy
				</ListItem>
				<ListItem>
					mají posunutý dávivý reflex, v souvislosti s jídlem často zvrací, nebo
					se dáví
				</ListItem>
				<ListItem>častá je rigidita v druzích jídel</ListItem>
				<ListItem>
					mají potíže s různou texturou jídel, odmítají nové chutě, někdy má
					potíže i s barvou jidel
				</ListItem>
				<ListItem>vyhledává rozmixované jídlo i ve starším věku</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					takové dítě je schopno sníst cokoliv (tzv. pica syndrome) jí sklo,
					písek, dřevo aj.
				</ListItem>
				<ListItem>
					často objevuje svět pomocí pusy, vše olizují, strkají do úst
				</ListItem>
				<ListItem>
					vyhovují jim kombinace různých chutí (kyselé a sladké)
				</ListItem>
				<ListItem>sousto vrací zpátky do úst několikrát</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata}>
			<Chapter {...metadata.activities[0]}>
				<Text>
					U dětí hypersenzitivních potřebujeme zvýšit odolnost v dutině ústní.
					Nikdy však nezačínáme přímo v ústech, ale na těle. Nejprve provádíme
					tlakové masáže po těle, začít od nejméně citlivého místa na a
					pokračujeme až k dlaním. Využít můžeme tlak vlastních rukou, nebo
					vibrace z rotavibrátoru. Pokud dítě zvládne tlak na dlaních, můžeme se
					pomalu přesunout k tvářím, čelisti a až poté rtům a dutině ústní!
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[1]}>
				<Text>
					Využít můžeme nanuky vyrobené z různých druhů sirupu, nebo zmraženého
					ovoce. Dítě necháme jejich vlastním tempem ochutnat, osahat, očichat
					vše co jsme mu nachystali.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[2]}>
				<Text>
					Podávejte jídlo, které musí dítě žvýkat. Mrkev, křupky, kousky ovoce
					(můžete ho vytvarovat do zábavného tvaru) žvýkačky. Výběr jídla řiďte
					podle dietních restrikcí, které dítě má a podle úrovně oromotorických
					schopností.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[3]}>
				<Text>
					Kousátek je na trhu spousty, před jejich koupí se ale určitě poraďte s
					odborníkem (logoped, poradknyě v obchodu s kousátky. Kousátka jsou
					vhodné pro potlačení silného tonusu v těle, odnaučení cucání prstů,
					zvýšení tolerance předmětů v dutině ústní. Nebo naopak pro děti, které
					kousat potřebují a koušou různé nejedlé předměty (sklo, dřevo,
					oblečení, kameny). Kousátka jsou rozdělené do tří druhů, právě podle
					specifické potřeby.
				</Text>
			</Chapter>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
