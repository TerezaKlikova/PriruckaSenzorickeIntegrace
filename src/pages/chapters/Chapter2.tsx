import React, { FC } from 'react';

import Text from 'components/Text';
import Img from 'components/Img';
import { ListItem, UnorderedList } from 'components/List';
import Chapter from 'components/Chapter';
import Gallery from 'components/Gallery';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as JumpingRope } from 'assets/jumping-rope.svg';
import houpani3 from 'assets/chapter2/houpani3.png';
import houpani2 from 'assets/chapter2/houpani2.png';
import houpani1 from 'assets/chapter2/houpani1.png';
import most1 from 'assets/chapter2/most1.png';
import prkno1 from 'assets/chapter2/prkno1.png';
import deska1 from 'assets/chapter2/deska1.png';
import deska2 from 'assets/chapter2/deska2.png';
import lezeni1 from 'assets/chapter2/lezeni1.jpg';

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
	activities: MapChapters('vestibularni-vnimani', 'aktivita', [
		'Houpání',
		'Houpací most',
		'Houpací prkno',
		'Skákání',
		'Zavěšení hlavou dolů',
		'Jízda na pojízdné desce',
		'Otáčení na twisteru',
		'Lezení do vyšších míst',
	]),
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
				potřebuje.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[0]}>
			<Text>
				Houpat se mohou děti klasiky na houpačce, ale pokud na ni nemáte místo,
				houpat můžete dítě i dece, nebo na zavěšeném laně. Skvele jsou houpačky
				ploché rovné, na kterých si může stimulovat hmat (přejíždí rukama po
				zemi). Dále se dají využít jako nácvik koordinace pohybu, dítě se houpe
				v houpačce (leží na bříšku) a zároveň si hází balon, nebo kruhy na
				určené místo.
			</Text>
			<Text>
				Pokud nesmíte nemůžete vrtat do stropu, dají se využít stojany.
			</Text>
			<Gallery>
				<Img src={houpani1} />
				<Img src={houpani2} />
				<Img src={houpani3} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[1]}>
			<Text>
				Most můžete využít jak na houpání, tak při otoční jako malu průlezku.
				Trénujete tím rovnovážné cítění, hrubou motoriku a vestibulární systém.
			</Text>
			<Gallery>
				<Img src={most1} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[2]}>
			<Text>
				Určeno pro dětí s vyvinutější motorickými schopnostmi. Prkno se skvělé k
				vývoji rovnováhy, tonusu těla, stability, hrubé motoriky.
			</Text>
			<Gallery>
				<Img src={prkno1} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[3]}>
			<Text>
				Dalším důležitým pohybem pro rozvoj vestibulárního vnímání je skákání.
				Vhodnou a dostupnou pomůckou je gymnastický míč, nebo trampolína. Na
				balonu je dobré, aby dítě skákalo ve stoje, za pomoci držení rodiče.
				Balon bud do rohu místnosti, nebo o hranu pohovku, do které poté může i
				padat. Dobré je skákání doplnit písničkou, nebo říkankou. Dáte může
				skákat do všech směrů, pokud už zvládá skákat samo, nechme ho.
			</Text>
			<Text>
				Pokud nemáte trampolínu, využít můžete i na sebe poskládané polštáře,
				nebo molitany.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[4]}>
			<Text>
				Pokud jste si všimli, že vaše se dítě rádo houpe hlavou dolů, nechte ho.
				Doplňuje si tak vestibulární input, který mu chybí. Houpat je může samo,
				položením na postel, nebo ho můžete vzít za nohy a houpat. Provádějte
				tuto aktivtu, ale pouze po krátkou dobu, aby se nepřekrvila hlava.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[5]}>
			<Text>
				Využít můžete skateboardu, nebo i stěhovací desku na kolečkách. Výhoda
				je, když jde zavázat na provázek. Pro menší a méně obratné děti, které
				se neumí odrážet, je tohle možnost jak se povozit. Lehnout si může dítě
				na břicho, nebo sedět. Připravit pro ně můžete překážkovou dráhu, nebo
				vozit k odměně, či to využít jak místo k dalším činnostem. Některým
				dětem se při předklonu hlavy lépe pracuje, jsou vnímavější (zapojí více
				vestibulární vnímání), můžete jim nachystat puzzle na skládání,
				malování, nebo jiné činnosti.
			</Text>
			<Gallery>
				<Img src={deska1} />
				<Img src={deska2} />
			</Gallery>
			<Text>
				Inspiraci pro další aktivity s deskou naleznete{' '}
				<a
					href="https://www.mymundaneandmiraculouslife.com/scooter-board-sensory-activities/"
					target="_blank"
					rel="noreferrer"
				>
					zde
				</a>
				.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[6]}>
			<Text>
				Stačí pořídit obyčejný twister a dítě se otáčí samo, nebo ho chytíte za
				ruce a otáčíte ho vy.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[7]}>
			<Text>
				Pokud jste si všimli, že dítě rádo leze na nábytek, stoly a celkově
				vyšší prostory, uzpůsobte mu prostředí tak, aby měl potřebu nasycenou,
				ale byl v bezpečí. Využít můžete žebřiny, lezeckou stěnu, poschoďovou
				postel.
			</Text>
			<Text>
				Příklad instalace žebřin v jedné domácnosti: Zde jsou žebřiny spojene i
				s houpačkou, lanem, žebřiny jsou předsunutí.
			</Text>
			<Gallery>
				<Img src={lezeni1} />
			</Gallery>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
