import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';
import { ListItem, UnorderedList } from 'components/List';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as Ear } from 'assets/human-ear.svg';

const metadata = {
	id: 'sluchove-vnimani',
	icon: Ear,
	title: 'Sluchové vnímání',
	color: '#999543',
	subchapters: MapChapters('sluchove-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
	]),
	activities: MapChapters('sluchove-vnimani', 'aktivita', [
		'Světelný bublinkový válec',
		'Lávová lampa',
		'Světelné předměty',
		'Světelná krabice',
		'Hra na rybáře',
		'Rozpoznávání předmětů',
		'Orientace v prostředí',
	]),
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat tyto děti podle toho, že:</Text>
			<UnorderedList>
				<ListItem>tzv. slyšení neslyšitelného</ListItem>
				<ListItem>
					zvuky mají zesílené někdy tak moc, že slyší i frekvence, slyšitelné
					pouze zvířatům
				</ListItem>
				<ListItem>
					často se tak raději straní rozhovorů, jelikož jim přinášejí velký
					diskomfort
				</ListItem>
				<ListItem>
					velmi často si zakrývají uši, bojí se věcí, jež vyluzují hlasité zvuky
					(bouřka, davy, MHD)
				</ListItem>
				<ListItem>
					Ve snaze přehlušit vnější zvukové podněty sami vydávají stereotypní
					zvuky
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					záměrně vyhledává zvuky, tiskne si uši k rádiu, tabletu, nebo televizi
				</ListItem>
				<ListItem>libuje si ve zvuku sirén a hlasité muzice</ListItem>
				<ListItem>
					často se sám snaží sluch stimulovat – vokalizuje, bouchá dveřmi, ťuká
					do předmětů
				</ListItem>
				<ListItem>dělá mu dobře doprava, davy, také má rád vibrace</ListItem>
				<ListItem>
					děti mají potíže s porozuměním, sluchovou pamětí, gramatikou a
					rytmikou
				</ListItem>
				<ListItem>
					mívá obtíže v oblastí artikulace a samotné funkční komunikaci
				</ListItem>
				<ListItem>
					komunikační schopností se lepší po zkušenosti s intenzivním pohybem
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata}>
			<Chapter {...metadata.activities[0]}>
				<Text>
					Vhodný je např. xylofon, u kterého můžete pracovat i se zrakovou a
					hudební pamětí. Můžete vytvořit “noty” podle barviček klaves xylofonu.
					Naučit se jednoduché písničky, nebo jenom tak nechat dítě opakovat
					zvuky. Vhodné jsou také bubínky (ne elektrické), kde můžeme spojit i
					regulaci síly a procvičení rytmiky. Vytvořit si můžete i vlastni
					zvonkohru z příborů a vařečky, opět zde můžeme spojit regulaci síly v
					úhodu, jemnou motoriku a koordinaci oko - ruka.
				</Text>
				<Text>
					Taktéž můžete využít dechové nástroje (flétny, foukací harmonika …)
					upevňuje svalstvo úst a správný výdechový proud.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[1]}>
				<Text>
					Můžete zvuky rozeznávat, určovat komu patří a následně si o zvířátkách
					povídat.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[2]}>
				<Text>
					Pro dětí s dysfunkcí nejen ve sluchovém vnímání, ale ve všech
					smyslech, se využívá terapeutického poslechu modulované hudby dle
					Tomatise, Berarda a Steinbacha (zde je důležité dodržet, aby terapii
					prováděl proškolený terapeut). Hudba je elektronicky upravena, tak by
					vyvolala specifické odpovědi a pomáhá s tvorbou adaptivní odpovědi ve
					smyslovém zpracování.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[3]}>
				<Text>
					Jsou založená také na programu sluchové stimulace. Ta je vytvořena
					kódováním hudby v rámci parametrů Berardovy sluchové integrace.
					Princip poslechu je velmi podobný, 2x denně po dobu 30 min. Výhodou
					je, že není potřeba terapeuta, ale CD jsou předem nechystány.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[4]}>
				<Text>
					Je možné ho zakoupit, ale také vyrobit sami. Například z krabiček od
					sirek, nebo lahviček od léků. Do nich vložíme různé materiály
					(hřebíčky, sul, koření, luštěniny). Nádoby vyrobíme do páru a můžeme
					bud hrát pexeso, nebo loto či hádání osahu nádoby.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[5]} />

			<Chapter {...metadata.activities[6]}>
				<Text>
					Speciální sluchátka, vhodná pro děti hypersenzitivní na zvuky.
					Poskytnou jim tam chvíli klidu a odpočinku, dobré využívat v hlučném
					prostředí, nebo před spaním.
				</Text>
			</Chapter>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
