import React, { FC } from 'react';

import Text from 'components/Text';
import Img from 'components/Img';
import { ListItem, NumberedList } from 'components/List';
import Chapter from 'components/Chapter';
import Gallery from 'components/Gallery';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as Brain } from 'assets/brain.svg';
import sensorImg from 'assets/chapter1/sensor1.gif';

const metadata = {
	id: 'senzoricka-integrace',
	icon: Brain,
	title: 'Senzorická integrace',
	color: '#ad1457',
	subchapters: MapChapters('senzoricka-integrace', 'podkapitola', [
		'Porucha smyslového zpracování',
		'Porucha smyslové modulace',
		'Porucha smyslové diskriminace',
		'Porucha na podkladě motorickém',
	]),
	activities: [],
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Text>
			Senzorická, neboli smyslová integrace, je přirozený proces v lidském
			mozku, za jejíž pomocí dokážeme vnímat a dále zpracovávat vjemy okolo nás.
			Výsledek této integrace je odpověď našeho těla na daný vjem. Například,
			když se o něco spálíme, tak proces v našem mozku je takový, že detekuje
			oheň na naší pokožce, do mozku proudí informace, že nás pálí pokožka a
			odpověď těla je, že uhneme rukou. Tento sled infromací si sami o sobě ani
			neuvědomíme, ale proto, aby se dostavila žádaná reakce (uhnutí ruky před
			ohněm) potřebujeme dobré fungování všech částí procesu.
		</Text>
		<Gallery>
			<Img src={sensorImg} />
		</Gallery>
		<Text>
			K tomu, abychom dobře vnímali příchozí informace potřebujeme smysly. Každý
			známe 5 smyslu - sluch, čich, chuť, zrak a hmat. Nejsou to však jediné,
			které nám pomáhají registrovat svět okolo nás. K těmto pěti musíme ještě
			přičíst vestibulární vnímání a propriocepci.
		</Text>
		<Text>
			Správné senzorické zpracování je důležité pro mnoho každodenních činností,
			jako je pozornost, komunikace, příjem potravy, rovnováha, motorika aj.
			Když zjistíme u někoho obtíže v těchto oblastech, může to být práve
			zapříčeněné poruchou senzorické integrace.
		</Text>

		<Chapter {...metadata.subchapters[0]}>
			<Text>
				Musíme si zpracovávání podnětů z našeho okolí představit jako cestu, na
				které se nachází několik zastávek. Když podnět zaregistrujeme, musíme na
				něj umět adekvátně odpovědět a taktéž jednotlivé vjemy od sebe rozlišit.
			</Text>
			<Text>
				To jak různé vjemy můžeme zaregistrovat rozdělujeme do třech kategoriíc
			</Text>
			<NumberedList>
				<ListItem>Porucha smyslové modulace</ListItem>
				<ListItem>Porucha smyslové diskriminace</ListItem>
				<ListItem>Motorické poruchy na senzorické bázi</ListItem>
			</NumberedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>
				Je to porucha správného reagování na smyslové podněty. Děti s touto
				poruchou maji obtíž adekvátně reagovat na příchozí vjem. Reakce může mít
				trojí podobu.
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Přehnaná reakce na podmět (hypersenzitivita)
			</Text>
			<Text>
				Takové děti se budou odmítat dotknout se některých povrchů. Bude mu
				nepříjemné dotýkat se mastného, slizkého, mokrého. Nepříjemné bud bude
				stříhání vlasů, objetí a některé látky. Může nastat i tzv. sumativní
				efekt. Jednotlivé vjemy se během dne střádají bez odpovědi a náhlá
				přehnaná reakce se objeví na zdánlivé nepodstatném vjemu.
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Nedostatečná reakce na podmět (hyposenzitivita)
			</Text>
			<Text>
				Tento typ dětí si vjemu nevšimnou, neodpoví či reakce je opožděná Tím,
				že podněty vnímají nedostatečně, stávají se apatické, až letargické.
				Malá aktivita tedy není způsobena nedostatečnou motivací, ale chybným
				vnímáním podnětů (dítě se může zdát hluchým – nereaguje na hlasové
				podněty a ani na ně patřičně neodpovídá). Typické je i špatné vnímání
				bolesti a teploty. Často jsou během kojeneckého období považovány za
				hodné a rodiče jejich potíže rychle nerozpoznají.
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Aktivní vyhledávání podnětů
			</Text>
			<Text>
				Jde o cílené vyhledávání podnětů dětmi, samy mají potřebu se jimi
				dosytit, a tak vyhledávají aktivity toho druhu, které jsou jim příjemné
				a stimulují je. Tento druh poruchy se nesoustředí na jeden senzorický
				systém, ale zasáhnout může jakýkoli. Takové děti preferuji hlasitou
				hudbu, zvuky zrak stimulující objekty. Tím, že osoba nezachycuje žádný
				vjem, začne instinktivně podněty sbírat, např. třepotáním ručičkama,
				kolébáním či vydáváním zvuků.
			</Text>
		</Chapter>

		<Chapter {...metadata.subchapters[2]}>
			<Text>
				Tato porucha se projevuje v nedostatečném rozlišováním mezi podněty,
				jejich podobností a intenzitou. Děti nedokáží rozlušit mezi dvěma
				různými vjemy, jejich trváním a intenzitou. Správná funkce rozlišování
				mezi podněty je potřebná pro plánování pohybů, jazykové schopnosti,
				sluchové a zrakovým vnímání a v neposlední řadě schopností se bez
				problémů učit. Obtíže u takových dětí se projevují například jako
				neschopnost rozeznat tvarem mezo gumou a koláčem (bez použití zraku),
				nedojde jim, jak může pálit svíčka či neodhanou výšku schodů. Potřebují
				delší čas na zapnutí zipu u bundy, aniž by měli zrakovou kontrolu nad
				činností. Obtíže se mohou projevovat i v rozlišování tvarově a sluchově
				podobných hlásek.
			</Text>
		</Chapter>

		<Chapter {...metadata.subchapters[3]}>
			<Text>
				U této poruchy je hlavním problémem (rovnováha), přesun, nebo plánování
				série pohybů v reakci na smyslové požadavky. U dítěte se objevují
				problémy s koordinací a kontrolou vlastního těla.
			</Text>
			<Text>
				Dělíme je na dvě podkategorie:{' '}
				<Text as="span" fontStyle="italic">
					Dyspraxie a posturální porucha
				</Text>
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Posturální porucha
			</Text>
			<Text>
				Projevy u takových dětí jsou v zhoršení stabilitě těla, neadekvátním
				svalovým napětím a špatnou funkcí svalů při v pohybu proti gravitaci
				(směr vzhůru, dítě má slabé svalové napětí). Děti mají problém odhadnout
				jak moc je od nich předmět vzdálený, nevydrží dlouho v jedné poloze.
				Projevit se to může při psaní – potřebuje si podložit hlavu rukami, nebo
				lehnout si na lavici. Jsou často unavené, vypadají jako kdyby byly
				ochablé.
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Dyspraxie
			</Text>
			<Text>
				Děti s dyspraxii mají obtíže se začátkem, plánováním, organizováním a
				provádění sekvencí pohybů. Zasahuje do interakce s fyzickým prostředím,
				hrubá a jemná motorika, společně s oromotorikou, působí nekoordinovaně a
				neohrabaně. Dyspraxie se často pojí s poruchou senzorické registrace a
				diskriminace. Vykonávání neznámých aktivit je pro ně obtížné. Běžné
				aktivity jsou pro ně skličující – oblékání, nalévání mléka, nastupování
				do autobusu či jenom strouhání tužky. Mají problém odhadnout směr
				(maminka řekne běž dozadu, dítě začne utíkat dopředu, nebo jiný směrem),
				pohyby podle instrukcí jsou pro ně velmi obtížné.
			</Text>

			<Text fontWeight="bold" fontStyle="italic" mb={0}>
				Poznámka
			</Text>
			<Text>
				U dětí s PAS je výskyt potíží se zpracováním některých smyslových vjemů
				velmi častý. Nemusí se však nutně rovnou jednat o poruchu senzorického
				zpracování. Tuto poruchu může diagnostikovat pouze proškolený odborník
				(ergoterapeut, klinický logoped, fyzioterapeut, speciální pedagog),
				proto je potřeba se s někým takovým poradit, ještě před začátkem
				jakékoli intenzivnější práce s prvky senzorické integrace!
			</Text>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
