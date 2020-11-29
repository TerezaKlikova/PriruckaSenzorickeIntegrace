import React, { FC } from 'react';

import Text from 'components/Text';
import Img from 'components/Img';
import { ListItem, UnorderedList } from 'components/List';
import Chapter from 'components/Chapter';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as JumpingRope } from 'assets/jumping-rope.svg';

const metadata = {
	id: 'vestibularni-vnimani',
	icon: JumpingRope,
	title: 'Vestibulární vnímání',
	color: '#4527a0',
	subchapters: MapChapters('vestibularni-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
		'Vyhledávají extra podněty',
		'Slabá pohybová diskriminace',
	]),
	activities: [],
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Text>
			Vestibulární systém zajišťuje informace o gravitaci, rovnováze a pohybu, o
			poloze naší hlavy a těla ve vztahu k povrchu země. Pomáhá nám generovat
			svalový tonus, pomáhající pohybovat se hladce a efektivně. Říká nám,
			jestli jsme to my kdo, jsme v pohybu, či věci okolo nás. Je důležitý ve
			vývoji řeči, zejména pro rozvoj, zachycení a porozumění slyšenému. Proto
			mnohé dětí, které mají potíže ve vestibulárním vnímání, se v řeči
			opožďují.
		</Text>

		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>budou reagovat přecitlivěle na běžný pohyb</ListItem>
				<ListItem>
					vyhýbají se běhání, jízdě na kole, sáňkování a tančení
				</ListItem>
				<ListItem>
					bude se vyhýbat houpačkám, klouzačkám a kolotočům a jsou celkově velmi
					opatrné
				</ListItem>
				<ListItem>nechtějí předklánět hlavu, měnit její pozici</ListItem>
				<ListItem>má problémy při jízdě v autě</ListItem>
				<ListItem>jsou velmi nejisté na schodech</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					má problém přizpůsobit polohu těla příslušné aktivitě, takže jsou
					neobratné a mají zvláštní postavení těla
				</ListItem>
				<ListItem>
					nevšímají si rizik výšek a jsou schopné skočit z velké výšky
				</ListItem>
				<ListItem>nevšímají se, že věc se dala do pohybu</ListItem>
				<ListItem>
					nemají motivaci se aktivně hýbat, nedají ruce před sebe, když padá
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[2]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					mají velmi rády pohyb všeho druhu, točí se dokolečka, nebo se houpou,
					aniž by je postihla závrať nebo nevolnost
				</ListItem>
				<ListItem>
					často se kývou dopředu a dozadu, nebo chodí dokolečka a zároveň dělá
					kolébavé pohyby
				</ListItem>
				<ListItem>
					miluje trampolíny, skákání z výšek a zavěšení vzhůru nohama
				</ListItem>
				<ListItem>
					mívají autostimulační projevy, jako třepotání rukou a kmitání prstů u
					rukou
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[3]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>často padají ze židle, při stání i při chůzi</ListItem>
				<ListItem>
					jsou dezorientované při změně směru a nedokáží rozpoznat, kdy se mu
					udělá špatně (pozvrací se po dlouhém houpání)
				</ListItem>
				<ListItem>
					mají nízké svalové napětí - tělo působí jako „měkké“ a slabé
				</ListItem>
				<ListItem>
					nevydrží dlouho ve vzpřímené pozici, často už během cvičení/hodiny
					končí položené s hlavou na stole
				</ListItem>
				<ListItem>často jsou brzy unavené</ListItem>
				<ListItem>
					mají problém s koordinací pohybů obou polovin těla, s hrubou a jemnou
					motorikou
				</ListItem>
				<ListItem>nemají určenou dominantní ruku</ListItem>
				<ListItem>
					mají potíže s naplánováním pohybů, neví jak mají nový pohyb udělat
					(překročení kamene, přeskočení kaluže)
				</ListItem>
				<ListItem>
					přeskočily fázi lezení, rovnou se z plazení postavily a začaly chodit
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata}>
			<Text>
				Je potřeba sledovat negativní reakce při aktivitách, které
				zprostředkovávají vjemy a stimulují systém. Okamžité však musíme ukončit
				aktivitu, když se dostaví některé z daných projevů:
			</Text>

			<UnorderedList>
				<ListItem>Nepravidelné dýchání</ListItem>
				<ListItem>Změna barvy v obličeji</ListItem>
				<ListItem>Pocení</ListItem>
				<ListItem>Panika</ListItem>
				<ListItem>Záchvat úzkosti</ListItem>
			</UnorderedList>

			<Text>
				Všechny činnosti na rozvoj vestibulárního systému, jsou založeny na
				pohybu těla, respektive hlavy. Tak, aby se rovnovážné vnímání ve
				vnitřním uchu mělo možnost při svém deficitu, se rozvíjet tak, jak
				potřebuje.{' '}
			</Text>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
