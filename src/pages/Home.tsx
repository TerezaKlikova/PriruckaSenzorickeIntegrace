/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC } from 'react';

import Text from 'components/Text';
import Chapter from 'components/Chapter';
import Link from 'components/Link';
import { Box } from 'components/Styled';

import { ReactComponent as CoverImage } from 'assets/cover.svg';

const Home: FC = () => (
	<Chapter
		variant="main"
		id="home"
		title="Příručka senzorické integrace"
		printTitle="Úvod"
	>
		<Box>
			<Box
				textAlign="center"
				width={['100%', 300]}
				css={css`
					float: right;
					@media print {
						display: none;
					}
				`}
			>
				<CoverImage
					css={css`
						display: inline;
						max-width: 300px;
					`}
				/>
			</Box>
			<Text>
				Tato příručka je věnována pečujícím dětí a osobám s autismem, poruchami
				pozornosti a učení, či jinými obtížemi se smyslovým zpracováním. Tak,
				aby se se zvýšilo povědomí o senzorické (smyslové) integraci, co vlastně
				tento pojem znamená a jak velkou roli hraje ve vývoji celé osobnosti.
				Přibližuje, proč některé děti mají problém s hlasitými zvuky, proč si
				ubližují, proč jsou neustále v pohybu a koncentrace je pro ně velkou
				neznámou.
			</Text>
			<Text>
				Najdete zde stručný přehled o významu senzorická integrace, jak se její
				poruchy projevují a taktéž souhrn aktivit a tipů, jak podpořit rozvoj
				dané smyslové oblasti.
			</Text>
			<Text>
				Mějte však na paměti, že tato příručka byla vytvořena jako součást
				diplomové práce (věnující se využití terapie senzorické integrace u dětí
				s autismem) a je tedy pouze informačním a podpůrným materiálem. Rozhodně
				není myšlena jako oficiální zdroj k aplikaci terapie senzorické
				integrace, spíše jako inspirace rodinám, pečujícím a osobám takto
				potřebným.
			</Text>
		</Box>
		<Text>
			Doufám, že bude pro Vás příručka srozumitelným a informativním materiálem,
			který Vás dokáže nasměrovat správným směrem.
		</Text>
		<Text>
			V případě jakýchkoliv dotazů, nebo připomínek, mě můžete kontaktovat na
			email{' '}
			<Link href="mailto:terkaklika@gmail.com" underline noLink>
				terkaklika@gmail.com
			</Link>
			.
		</Text>
		<Text
			css={css`
				@media not print {
					display: none;
				}
			`}
		>
			Aktualizovanou online verzi této příručky můžete najít
			<Link
				href="https://terezaklikova.github.io/PriruckaSenzorickeIntegrace/"
				underline
			>
				zde
			</Link>
			.
		</Text>
	</Chapter>
);

export default Home;
