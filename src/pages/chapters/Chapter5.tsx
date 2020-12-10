import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';
import Img from 'components/Img';
import Gallery from 'components/Gallery';
import { ListItem, UnorderedList } from 'components/List';

import { ChapterType } from 'pages/Chapters';

import { MapChapters } from 'utils';

import { ReactComponent as Eye } from 'assets/semi-closed-eye.svg';
import valec1 from 'assets/chapter5/valec1.png';
import lampa1 from 'assets/chapter5/lampa1.jpg';
import lampa2 from 'assets/chapter5/lampa2.jpg';
import lampa3 from 'assets/chapter5/lampa3.jpg';
import predmety1 from 'assets/chapter5/predmety1.jpg';
import predmety2 from 'assets/chapter5/predmety2.jpg';
import krabice1 from 'assets/chapter5/krabice1.png';
import krabice2 from 'assets/chapter5/krabice2.png';

const metadata = {
	id: 'zrakove-vnimani',
	icon: Eye,
	title: 'Zrakové vnímání',
	color: '#2e7d32',
	subchapters: MapChapters('zrakove-vnimani', 'podkapitola', [
		'Hypersenzitivita',
		'Hyposenzitiva',
		'Vyhledávají extra podněty',
	]),
	activities: MapChapters('zrakove-vnimani', 'aktivita', [
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
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					vadí mu velmi ostré světlo (zakrývají si oči) a zároveň tma
				</ListItem>
				<ListItem>zalekne se ostrých záblesků (blesky)</ListItem>
				<ListItem>často sklání zrak do země</ListItem>
				<ListItem>
					neustále sleduje miniaturní částečky, bere do ruky maličká prachová
					smítka
				</ListItem>
				<ListItem>rovněž si často stěžuje na dvojité vidění</ListItem>
				<ListItem>má obtíže s přesunem zraku z objektu na objekt</ListItem>
				<ListItem>
					cítí se zahlceně, když se okolo něj pohybuje moc lidí, nebo věcí a je
					velmi brzy z toho unavené
				</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[1]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					vidí pouze obrysy, i to nejostřejší světlo je pro něj slabé
				</ListItem>
				<ListItem>mnohdy zírá přímo slunce, bez pocitu bolesti</ListItem>
				<ListItem>
					předměty obchází, ale zároveň se jich dotýká prsty, aby poznal i jiným
					smyslem, co je okolo něho
				</ListItem>
				<ListItem>
					taktéž se nesprávně orientuje v prostoru, naráží do věcí, nábytku a
					rychle se pohybující předměty nedokáže zaznamenat (tenisový míček)
				</ListItem>
				<ListItem>
					při práci s jemnou motorikou mu dělájí potíže úkony zahrnujících
					prostorové vztahy – např. dávání tvarů do vkládačky
				</ListItem>
				<ListItem>špatně se orientuje v textu, píše skopce</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.subchapters[2]}>
			<Text>Můžeme poznat dítě podle toho, že:</Text>
			<UnorderedList>
				<ListItem>
					fascinuje ho jasné světelné jevy – odlesky, blikající světélka, lávové
					lampy, titulky běžící na televizi
				</ListItem>
				<ListItem>
					vše potřebuje vidět velmi zblízka – tiskne se k okrajům prostoru
				</ListItem>
				<ListItem>přejíždí po hranách předmětů</ListItem>
				<ListItem>rychle si kmitá prsty před očima</ListItem>
				<ListItem>často sleduje věci koutkem oka a ne napřímo</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter variant="activity" {...metadata} />

		<Chapter {...metadata.activities[0]}>
			<Text>
				Válec produkuje barevné příjemné světlo, vně mohou plavat rybičky, nebo
				bublinky. Je dobrým pomocníkem k nácviku udržení pozornosti, pojmenování
				barev, relaxaci. Vhodné pro děti nestálou emocionalitou, krásně se
				dokáží u světel zklidnit.
			</Text>
			<Gallery>
				<Img src={valec1} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[1]}>
			<Text>
				Pomůcka, kterou si můžete vyrobit doma. Stačí nasypat trochu sodu na dně
				láhve, přidat do dvou třetin láhve olej a poté obarevný ocet. Soda začne
				reagovat s octem v oleji do bublinek. Ocet taktéž můžeme přidávat do
				láhve po troškách kapátkem a trénovat tak jemnou motoriku. Pro další
				aktivity na stimulaci zrakového vnímání můžete využít sklenici naplněnou
				vodou a holící pěnou, do které kapátkem kapete potravinářské barvivo.
			</Text>
			<Text>
				Alternativa ke koupi jsou tyto přesýpací tekuté hodiny (tyto jsou
				koupené na stránce kidtown).
			</Text>
			<Gallery>
				<Img src={lampa1} />
				<Img src={lampa2} />
				<Img src={lampa3} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[2]}>
			<Text>
				Využít můžete baterky, světelné řetězy, světelné míče, obrázkové kotouče
				nebo “kouzelné” lampy (světelné koule co produkují buď relaxační světlo,
				nebo naopak světelné záblesky, podle potřeb dítěte viz. fot). Jde nám
				zejména o relaxační účel, světlo pouštějte dětem v temné místnosti, např
				pod dekou, v bunkru, nebo v uzavřené místnosti.
			</Text>
			<Gallery>
				<Img src={predmety1} />
				<Img src={predmety2} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[3]}>
			<Text>
				Krabice je zespodu podsvícená, tak aby zvýraznila co nejvíce předměty na
				ní položení. Dobré je v místnosti zhasnout a nechat svítit pouze
				krabici, dětem se tak sníží možnost rozrušovat se jinými podněty a mohou
				se soustředit pouze na úkoly na krabici. Na víko krabice můžete vkládat
				barevné průsvitné obrazce (viz spodní obrázek), nebo nasypat mouku a
				kreslit čísla, nebo písmena.
			</Text>
			<Gallery>
				<Img src={krabice1} />
				<Img src={krabice2} />
			</Gallery>
		</Chapter>

		<Chapter {...metadata.activities[4]}>
			<Text>
				Můžete si samu z kousku větvičky, provázku a magnetu vyrobit prut. Stačí
				jenom nachystat papírové, nebo látkové rybičky s magnety. Cílem je plná
				zraková kontrola a motoricka koordinace, aby dítě rybičku chytilo.
			</Text>
		</Chapter>

		<Chapter {...metadata.activities[5]}>
			<Text>
				V případě, že má dítě problém rozpoznat předmět, pokud ho nemá zobrazený
				celý, nebo nerozpozná rozdíly mezi předměty a tvary, nerozpozná
				obličeje. Můžete zkusit tyto hry:
			</Text>
			<UnorderedList>
				<ListItem>
					přiřazování stejných dvojic k sobě (boty, různé přírodniny, ponožky)
				</ListItem>
				<ListItem>skládání zjednodušeného (3-5 dílného) puzzle</ListItem>
				<ListItem>
					přiřazování grafických objektů k sobě (3D na 2D/ stejné obrázky s
					různou barvou)
				</ListItem>
				<ListItem>hledání východu v papírovém bludišti</ListItem>
				<ListItem>pexeso</ListItem>
			</UnorderedList>
		</Chapter>

		<Chapter {...metadata.activities[6]}>
			<Text>
				Navigujeme dítě ve známém prostředí, ono mezitím ukládá věci na místo,
				dle pokynu. Procvičujete sluhcovou pamět, vnímání a diferenciaci hlásek.
			</Text>
		</Chapter>
	</Chapter>
);

export default {
	...metadata,
	Content,
};
