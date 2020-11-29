import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';

const Home: FC = () => (
	<Chapter variant="main" id="home" title="Příručka senzorické integrace">
		<Text>
			Tato příručka je věnována pečujícím dětí a osobám s autismem, poruchami
			pozornosti a učení, či jinými obtížemi se smyslovým zpracováním. Tak, aby
			se se zvýšilo povědomí o senzorické (smyslové) integraci, co vlastně tento
			pojem znamená a jak velkou roli hraje ve vývoji celé osobnosti.
			Přibližuje, proč některé děti mají problém s hlasitými zvuky, proč si
			ubližují, proč jsou neustále v pohybu a koncentrace je pro ně velkou
			neznámou.
		</Text>
		<Text>
			Najdete zde stručný přehled o významu senzorická integrace, jak se její
			porucha projevuje a taktéž souhrn aktivit a tipů, jak podpořit rozvoj dané
			smyslové oblasti.
		</Text>
		<Text>
			Mějte však na paměti, že tato příručka byla vytvořena jako součást
			diplomové práce (věnující se využití terapie senzorické integrace u dětí s
			autismem) a je tedy pouze informačním a podpůrným materiálem. Rozhodně
			není myšlena jako oficiální zdroj k aplikaci terapie senzorické integrace,
			spíše jako inspirace rodinám, pečujícím a osobám takto potřebným.
		</Text>
	</Chapter>
);

export default Home;
