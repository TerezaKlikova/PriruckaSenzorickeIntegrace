import React, { FC } from 'react';

import Text from 'components/Text';
import Img from 'components/Img';
import { ListItem, NumberedList } from 'components/List';
import Chapter from 'components/Chapter';

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
		<Img src={sensorImg} mx="auto" maxHeight={250} />
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
				něj umět adekvátně odpovědět a taktéž jednotlivé vjemy od sebe rozlišit.{' '}
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
	</Chapter>
);

export default {
	...metadata,
	Content,
};
