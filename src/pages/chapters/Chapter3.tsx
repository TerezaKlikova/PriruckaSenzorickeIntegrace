import React, { FC } from 'react';

import Text from 'components/Text';
import Img from 'components/Img';
import { ListItem, UnorderedList } from 'components/List';
import Chapter from 'components/Chapter';
import Gallery from 'components/Gallery';

import { ChapterType } from 'pages/Chapters';
import { GALLERY } from 'pages/Sources';

import { MapChapters } from 'utils';

import { ReactComponent as MuscleUp } from 'assets/muscle-up.svg';

const metadata = {
	id: 'proprioceptivni-vnimani',
	icon: MuscleUp,
	title: 'Proprioceptivní vnímání',
	color: '#688aaf',
	subchapters: MapChapters('proprioceptivni-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
	]),
	activities: MapChapters('proprioceptivni-vnimani', 'aktivita', [
		'Zátěžové deky/nákrčníky/polštáře',
		'Prolézání tunelem',
		'Hra s lanem',
		'Kopání a bouchání do míče/krabice/papírové tašky',
		'Obkreslování těla',
		'Vibrace',
		'Tlučení kladivem',
		'Hra s lahvemi',
	]),
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Text>
			Jiným slovem polohocit, či pohybocit. Je to vnímání,které dám dává skrze
			šlachy a svaly informace o našem pohybu, kde se nacházejí různé části těla
			aniž bychom se něj museli dívat. Propriocepce se podílí na uvědomování si
			vlastního těla a jeho pohybů. Je nezbytná pro všechny motorické dovedností
			(řeč, chůzi, manipulace s předměty) koordinaci a motorické plánování. Tím,
			že cítíme hranice svého těla, se cítíme v bezpečí.
		</Text>

		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>projevuje se zaujímáním zvláštních pozic</ListItem>
				<ListItem>nešikovným zacházením s drobnými předměty</ListItem>
				<ListItem>
					když se potřebuje na něco podívat natočí se celým tělem (nejen očima)
				</ListItem>
				<ListItem>
					vědomě se vyhýbá novým výzvám – nechce jezdit na kole, vylézt na
					žebřík
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					má nízký svalový tonus, působí ochable a často se opírá o nábytek,
					stěny
				</ListItem>
				<ListItem>neuvědomuje si polohu svého těla v prostoru</ListItem>
				<ListItem>neuvědomuje si vlastní pocity (hlad, žízeň)</ListItem>
				<ListItem>naráží do objektů a lidí, klopýtá nebo se kolébá</ListItem>
				<ListItem>
					má slabou jemnou motoriku, úchop má ochablý, padají mu věci z rukou
				</ListItem>
				<ListItem>
					má potíže s řečí, jedením a jiným orálně – motorickými pohyby
				</ListItem>
				<ListItem>
					strká si věci do pusy (kouše rukávy, tužky, někdy i sklo a jiné velmi
					tvrdé materiály)
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata}>
			<Text>
				U takových dětí je potřeba, aby maximálně zapojily své svaly, pohyb
				těla, nebo na tělo byl vyvíjen tlak. Tak aby doopravdy cítily celé své
				tělo.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[0]}>
			<Text>
				Deky plněné sypkým materiálem, jsou prošvané tak aby při přikrytí dítěte
				objala celé tělo. Dají se koupit přímo hotové, ušité podle velikosti a
				hmotnosti vašeho dítěte, nebo mužete využít těžší peřiny. Vhodný pro
				dětí, které mají problém s usínáním, jsou neklidné, potřebují cítit váhu
				na svém těle. Polštář je vhodný pro dětí, které mají problém
				&ldquo;sedět&ldquo;, vrtí se na židli a neumí se soustředit na úkoly.
				Vyrábí se v mnoha podobách (delfín, pejsek…).
			</Text>
			<Text>
				Nikdy však zátěžovky nenechávejte na dětech položené dlouho, je to pro
				ně fyzicky náročné.
			</Text>
			<Gallery>
				<Img {...GALLERY['chapter-3-zatezove1']} />
				<Img {...GALLERY['chapter-3-zatezove2']} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[1]}>
			<Text>
				Zapojení celého těla, důležitý je zde prvek plazení v ohraničeném
				prostoru. Je si tak jasně vědomo hranic svého těla. Tunely můžete využít
				látkové, tunely na hřištích nebo sešít z pytlů velký tunel a nechat ho
				prolézt otvory.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[2]}>
			<Text>
				Aby dítě dobře cítilo své svaly a šlachy, je dobré ho nechat viset na
				laně, nebo se s lanem přetahovat. Ucítí tak zcela svou sílu a zároveň z
				toho můžete udělat hru na přetahovanou. Pokud nemá dítě partnera na
				přetahování, můžete lano zavázat za nohu stolu. Aby mu lano neklouzalo,
				můžete mu na něm udělat uzlíky a zkombinovat aktivitu s pojízdnou deskou
				(zároveň stimulace vestibulárního vnímání). Lano můžete také dát na zem,
				aby po něm dítě chodilo, nebo ho přeskakovalo.
			</Text>
			<Gallery>
				<Img {...GALLERY['chapter-3-lano1']} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[3]}>
			<Text>
				Aktivita na regulaci a registraci vlastní síly. Dítě vizuálně hned vidí,
				jakou sílu musí vyvinout pro to, aby se míč dostal na určené místo, nebo
				taška roztrhla.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[4]}>
			<Text>
				Aktivita na poznání hranic svého těla, určení kde v prostoru se
				nacházejí na končetiny. Využít můžeme velkou roli papíru a obkreslení
				tužkou, následně si obkreslné častí vybarvit a pojmenovat. Nebo tělo
				můžeme ohraničit hračkami, těstovinami, čímkoli, aby tak bylo jasné, že
				tam dítě leželo.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[5]}>
			<Text>
				Menší děti můžeme posadit na sušičku, aby cítily vibrace. Nebo použít
				elektrický kartáček a přejíždět po těla. Pokud má vaše dítě problémy v
				oblasti oromotoriky (oslabené svaltvo úst) můžete vibrace použít i tam.
				U citlivějších dětí začínejte vždy od dlaní a pak až využijte vibrace v
				ústech, aby si na to zvyklo. Využít můžete jak elektrických kartáčků,
				tak speciálních logovibrátorů. Dítě si tak lépe uvědomí jednotlivé
				doteky, jak na končetinách, tak v ústech.
			</Text>
			<Gallery>
				<Img {...GALLERY['chapter-3-vibrace1']} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[6]}>
			<Text>
				Dítě může zatlouct dřevěné kolíky do země, nebo se dají koupit
				zatloukací dětské sady. Opět jde o regulaci a registraci vlastní síly.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[7]}>
			<Text>
				Použijte ne docela naplněné plastové láhve (naplnit je můžete vodou,
				pískem, kuličkami, mýdlovou vodu), dítě má láhve přenášet, nosit v
				tašce, kutálet po zemi atd.
			</Text>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
