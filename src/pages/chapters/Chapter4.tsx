import React, { FC } from 'react';

import Text from 'components/Text';
import { ListItem, UnorderedList } from 'components/List';
import Chapter from 'components/Chapter';
import Img from 'components/Img';
import Gallery from 'components/Gallery';
import Link from 'components/Link';

import { ChapterType } from 'pages/Chapters';
import { GALLERY } from 'pages/Sources';

import { MapChapters } from 'utils';

import { ReactComponent as Hand } from 'assets/hand.svg';

const metadata = {
	id: 'hmatove-vnimani',
	icon: Hand,
	title: 'Hmatové vnímání',
	color: '#548b8e',
	subchapters: MapChapters('proprioceptivni-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
		'Vyhledávají extra podněty',
		'Slabá taktilní diskriminace',
	]),
	activities: MapChapters('proprioceptivni-vnimani', 'aktivita', [
		'Miska s poklady',
		'Patlání se v těstu',
		'Hry s ledem',
		'Hry s pískem',
		'Kinetický písek',
		'Roztírání krému, mýdla, peelingu',
		'Hry s pěnou',
		'Hmatové pytlíky',
		'Balony',
		'Senzorické balony',
		'Pohyb v přírodě',
		'Plastelína, play doh, play foam',
		'Hry s vodou',
		'Sensory bag',
		'Taktilní chodník',
		'Mačkání konečků prstů',
		'Senzorická taktilní tabule',
		'Kutálení míčem po těle',
	]),
} as ChapterType;

const Content: FC = () => (
	<Chapter variant="main" {...metadata}>
		<Chapter {...metadata.subchapters[0]}>
			<Text>Můžeme poznat tyto děti podle toho, že:</Text>
			<UnorderedList>
				<ListItem>jsou extrémně přecitlivělé na různé hmatové podněty</ListItem>
				<ListItem>
					nerady se objímají, mají hrůzu z doteků, odtahují se při hrozbě
					kontaktu
				</ListItem>
				<ListItem>
					často dětem bývá nepříjemný určitý druh materiálu oblečení tak moc, že
					ho odmítají nosit
				</ListItem>
				<ListItem>
					pro některé je dotyk zdrojem nezvladatelných intenzivních vjemů, kdy i
					sebemenší vyvolá ataku
				</ListItem>
				<ListItem>
					umytí vlasů a stříhání nehtů, je pro ně extrémně nepříjemné
				</ListItem>
				<ListItem>
					preferují dlouhé rukávy a kalhoty a když fouká odmítají jít ven
				</ListItem>
				<ListItem>
					jsou vybíravé v jídle – nechtějí jíst určité potraviny, určité
					struktury (rýži, zeleninu, polévku, omáčky) můžou preferovat určitou
					teplotu potravin
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat tyto děti podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					mají menší citlivost na hmatové podněty, chovají se jako by necítily
					bolest
				</ListItem>
				<ListItem>neuvědomují si, že je něco příliš horké/studené</ListItem>
				<ListItem>nezaznamenají řeznou, či bodnou ránu</ListItem>
				<ListItem>
					fyzicky ubližují sobě, jiným lidem i zvířatům, neuvědomují si svou
					bolesti bolest jiných
				</ListItem>
				<ListItem>nevšimnou si, když něco upustí</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[2]}>
			<Text>Můžeme poznat tyto děti podle toho, že:</Text>
			<UnorderedList>
				<ListItem>neustále se dotýkají věcí a lidí</ListItem>
				<ListItem>
					mají rády, když se zašpiní, u takové aktivity vydrží dlouho (hrabání v
					hlíně, písku…)
				</ListItem>
				<ListItem>
					škrábou se, koušou se, běhají naboso, mačkají intenzivně různé věci
				</ListItem>
				<ListItem>vyhledává tlak, zalézají si pod těžké objekty</ListItem>
				<ListItem>
					aktivně nalézají určité materiály – plyš, vlnu, výrazné hladké
					povrchy, poté po nich dlouho přejíždí prsty
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[3]}>
			<Text>Můžeme poznat tyto děti podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					vypadají, jako by neměly pod kontrolou vlastní dotek
				</ListItem>
				<ListItem>
					nedotýkají se věcí, nebo je nezvedají tak, jako ostatní
				</ListItem>
				<ListItem>
					nevšímá si malých detailů a textur, musí k tomu zapojit zrak, aby byl
					schopen věci rozlišit
				</ListItem>
				<ListItem>
					aby dokázal rozlišit, kterou části těla hýbe, musí se na ni dívat
				</ListItem>
				<ListItem>
					raději stojí, než sedí, aby mělo vše vizuálně pod kontrolou
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata}>
			<Text>
				Aktivity jsou určené pro všechny děti. Ať už je Vaše dítě
				hyposenzitivní, nebo hypersenzitivní, podněty potřebuje. Pouze musíte
				upravit, jakým způsobem mu aktivitu nabízíte. Pokud se štítí různých
				povrchů, nebo má problém povrchy vůbec zaregistrovat, vnímejte jejich
				reakce a podle nich se řiďte. Aktivita by měla být zábava jak pro dítě,
				tak pro vás. Jde zejména o prožití pozitivního zážitku s hmatovým
				vnímáním.
			</Text>

			<Chapter {...metadata.activities[0]}>
				<Text>
					Přírodní materiály jsou nejlepší pro rozvoj hmatu. Rýže, čočka, mouka,
					cizrna a další sypké luštěniny jsou skvělým pomocníkem. Můžete do
					misek dát kaminky, mušle, kaštany, lego a zahrat si loto, nebo
					vytahovat předměty poslepu a hadat, co jsou zač. Nebo jenom nasypat
					plnou mísu rýže, písku, mouky a nechat je si užívat příjemného pocitu.
					Nádoba by měla být co nejvyšší, aby ruka byla ponořena co nejlépe až
					po lokty.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-miska1']} />
					<Img {...GALLERY['chapter-4-miska2']} />
					<Img {...GALLERY['chapter-4-miska3']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[1]}>
				<Text>
					Skvělá aktivita i pro dětí s potřebou silného stisku. Nechte je míchat
					těsto holýma rukama a zažít zkušeností s novými substancemi. Navíc
					budou mít děti pocit, že jsou užitečné a sami jsou schopné si upéct
					,třeba sušenky.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-testo1']} />
					<Img {...GALLERY['chapter-4-testo2']} />
					<Img {...GALLERY['chapter-4-testo3']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[2]}>
				<Text>
					Je důležité, aby děti poznaly co nejvíc druhů povrchu a to včetně
					teplot. Zmrazte jim do misky různé drobné předměty, použijte i
					potravinářské barvivo a nechte je pozorovat a vytahovat hračky z ledu.
					Barvením ledu tak rozvíjíte nejen hmat, ale i zrak.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-led1']} />
					<Img {...GALLERY['chapter-4-led2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[3]}>
				<Text>
					Nasypte si písek na podnos, nebo do krabice, přineste kartáče,
					hřebeny, masážní hřebeny a nechte je přehrabovat se v písku. Pro děti,
					které se potřebují seznámit se strukturou písku nenásilnou metodou, je
					to skvělý začátek. Pro děti, které právě chtějí nacítit strukturu,
					pomůcky nepotřebují, nechte je se prohrabovat holýma rukama, přihodit
					můžete i drobné předměty. Jedlá alternativa je krupice, anebo
					rozdrcené kukuřičné lupínky.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-duny1']} />
					<Img {...GALLERY['chapter-4-duny2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[4]}>
				<Text>
					Doma si můžete vyrobit také váš vlastní kinetický písek, který lze
					uchovávat ve větší plastové krabici. Lze z něj stavět a hrát si s
					použitím mnoha různých nástrojů, tisknout do něj tvary, nebo jen tak
					míchat jako těsto. Je pevnější než klasický písek a pro děti mnohdy
					zajímavější.
				</Text>
				<Text>
					Recep na výrobu písku můžete nalézt{' '}
					<Link
						href="https://abecedazahrady.dama.cz/clanek/vyrobte-detem-vlastni-kineticky-pisek-je-to-jednoduche-a-usetrite-tady-jsou-3-vyzkousene-recepty"
						target="_blank"
						rel="noreferrer"
						underline
					>
						zde
					</Link>
					.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-pisek1']} />
					<Img {...GALLERY['chapter-4-pisek2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[5]}>
				<Text>
					Dětem, kterým krém na kuži vadí, doporučuju začít s natíráním nejprve
					vany, hraček nebo umyvadla, aby si na strukturu substance zvykly. A až
					poté můžete začít od dlaní nahoru k pažím, ramenům a dolním
					končetinám. Pro děti hyposenzitivní můžete využít peeling, nebo hustší
					krémy a vy, nebo dítě, roztírejte krém celými dlaněmi.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[6]}>
				<Text>
					Koupání můžete oživit přidáním pěny (gelu) na holení, nebo mýdlové
					pěny. Nanášet ji můžete na tělo dítěte, na stěny, foukat do ní (skvěla
					motivace na procvičení mimického svalstva). Pěnu můžete využít i mimo
					vanu, například v lavoru, přidat můžete nádobí a napodobovat tak jeho
					umývání. Přidáním barvy aktivitu oživíte.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-pena1']} />
					<Img {...GALLERY['chapter-4-pena2']} />
					<Img {...GALLERY['chapter-4-pena3']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[7]}>
				<Text>
					Pytlíky můžeme naplnit různým materiálem - luštěniny, mouka, cukr,
					rýže nebo kamínky. Jako obal můžeme využít balonky, či látkové
					pytlíčky. Hmatové pytlíky můžeme využít jako poznávání různých
					struktur (aniž by museli na ně citlivější děti sahat), anebo jako
					pexeso, či přiřazovat jednotlivé pytlíčky k obsahu. Dávajte však pozor
					na prokousnutí pytlíčku dětmi a pozření jeho obsahu.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-pytliky1']} />
					<Img {...GALLERY['chapter-4-pytliky2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[8]}>
				<Text>
					Balony jsou skvělá věc pro děti, které rády mačkají, dokážou si tak
					krásně doplnit potřebné senzorické vjemy. Navíc zmáčknutím balonku
					přesně vidí, jakou sílu vynaložily (užitečně u dětí s problémy odhadu
					vlastní síly). Využít můžete balonky různého provedení, hladké, s
					třásněmi nebo s gelovými kuličkami. Koupit se daji obyčejné v
					obchodech jako je Kik, Nanu Nana nebo Tiger. Pokud má dítě zvýšenou
					potřebu kousat, zvolte spíš čistě zdravotně nezávadné balonky, přece
					jenom balonky z běžného obchodu nejsou určené ke kousání.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-balony1']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[9]}>
				<Text>
					Balónky určené přímo na stimulaci taktilního systému v různých
					provedeních povrchů. Využít je můžete nejen na mačkání v ruce, ale
					jako masážní míčky na celé tělo. Stimulace by měla být jemná,
					nenásilná, pokud si myslíte, že vaše dítě vyžaduje větší tlak, raději
					se poraďte s terapeutem. Dobré výrobky má firma Tullo.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-balonky1']} />
					<Img {...GALLERY['chapter-4-balonky2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[10]}>
				<Text>
					Co nejvíc se snažte o pohyb s dítětem venku, pokud to jde, procházejte
					se naboso, nebo s bearefoot botách. Je důležité, aby děti cítily
					přirozený tlak na pokožce nohou, stimuluje to nejen hmat, ale
					podporujete i rovnováhu chůze. Procházejte se na trávě, kamínkách,
					hlíně, nechte dítě volně běhat po zahradě (samozřejmě v rámci
					bezpečnosti). Když mu poskytnete trochu volnosti, podporujte tím i
					zdravou sebedůvěru v sebe samého.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[11]}>
				<Text>
					Plastelína je výborná na mačkání, bouchání, válení válečků. Můžete
					stavět podle předlohy, popisu nebo jen prostě mačkat. Pokud nemá dítě
					rádo mastný pocit z klasice plastelíny, anebo ji konzumuje,
					alternativou je play doh, která je jedlá. Je vyrobená z kukuřičného
					škrobu a můžete si ho vyrobit i sami.
				</Text>
				<Text>
					<Text as="span" fontStyle="italic">
						Návod:
					</Text>{' '}
					Mouka - 1 hrnek, Sůl - 1/2 hrnku, Voda- 1/2 hrnku, Potravinářské
					barvivo podle potřeby. Vše zamícháme a uskladňujeme v uzavíratelné
					nádobě.
				</Text>
				<Text>
					<Text as="span" fontStyle="italic">
						Play foam
					</Text>{' '}
					je speciální hmota tvořena malými polystyrenovými kuličkami a lepivou
					substancí. Je vhodná po hyposenzitivní děti, pro které je samotná
					plastelina málo citelná. Dají se z ní také vyrábět různé věci, děti ji
					mají spíše rády na válení kuliček a trhání.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-foam1']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[12]}>
				<Text>
					Zpřístupněte vodu dítěti i mimo pravidelné koupání a chození na bazén.
					Napusťte lavor plný vody, dejte tam různé předměty (kamínky, mušle,
					těžší předměty, knoflíky, velké korále) a nechte je jím vylovit. Můžou
					zapojit i nohy a prohrabávat se předměty ve vodě nožkama. Pokud chceme
					zlepšit taktilní diskriminaci, napusťte dvě nádoby, jednu s teplou a
					druhou se studenou vodou. Začněte vždy s teplou vodou a nechte dítě
					střídat teploty, jinými teplotami si tak uvědomí lepe jejich rozdíl.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[13]}>
				<Text>
					Tzn. senzorický pytlík, je plastový průhledný pytel, do kterého se
					leje gel, nebo hustý olej a různé předměty. Můžete tam dát knoflíky,
					kuličky, plastová písmena, perle a prsty poté posouvat jednotlivé
					předměty na příslušné místo. Rozvíjí se tak krom hmatového vnímání i
					jemná motorika. Můžete přidat i hydrogenové perle (když jsou zavřené v
					pytlíku, není jejich toxicita problém).
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-bag1']} />
					<Img {...GALLERY['chapter-4-bag2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[14]}>
				<Text>
					K rozvoji hmatového vnímání dolních končetin je vhodný taktilní
					chodník. Dá se buď koupit, anebo si ho můžete vyrobit sami z
					přírodních materiálu. S dětmi hyposenzitivními po nich choďte boso,
					děti citlivější mohou mít zpočátku ponožky na zmírnění tlaku.
				</Text>
				<Text>
					K dispozici jsou ploché taktilní disky, nebo půlkulaté nafouklé ježky.
					Ty jsou multifunkční a trénují zároveň i stabilitu (jdou obrátit
					naopak) a taktilní prožitek je silnější.
				</Text>
				<Text>
					Vlastní výroba má výhodu, že můžete povrch přizpůsobit podle potřeb
					dítěte, navíc může být i levnější než kupované.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-chodnik1']} />
					<Img {...GALLERY['chapter-4-chodnik2']} />
					<Img {...GALLERY['chapter-4-chodnik3']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[15]}>
				<Text>
					Pro děti s hyposenzitivním vnímáním, je dobré jim taktilní zážitek
					maximálně zesílit. Proto jim můžeme přicvaknout na konečky prstů
					kolíčky na prádlo, vždy jeden po druhém a poté je nechat si s kolíčky
					hrát. Mohou s nimi klepat o sebe, nebo o nábytek, stahovat a smršťovat
					prsty do dlaně atd. Jde nám zejména o zesílený hmatový zážitek.
				</Text>
			</Chapter>

			<Chapter {...metadata.activities[16]}>
				<Text>
					Velmi dobrá pomůcka k rozvoji senzorické diskriminace horních
					končetin. Můžete si ji koupit, ale na trhu jsou zatím pouze velmi
					drahé varianty, které si šikovnejší lidé dokáží vyrobit sami. Na desku
					můžete dát různé materiály, důležité je,aby byla textura rozdílná.
					Poté necháme dítě objevovat a zkoumat různé textury.
				</Text>
				<Gallery>
					<Img {...GALLERY['chapter-4-tabule1']} />
					<Img {...GALLERY['chapter-4-tabule2']} />
				</Gallery>
			</Chapter>

			<Chapter {...metadata.activities[17]}>
				<Text>
					Využít můžeme velký gymnastický míč i menší míče. Kutálíme vleže jemně
					po dolních i horních končetinách, někde tlak můžeme zvýšit. Vždy se
					řídíme tím, jak je to dítěti příjemné.
				</Text>
			</Chapter>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
