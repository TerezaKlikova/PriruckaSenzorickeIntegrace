import { CitationProps } from 'components/Citation';

import zatezove1 from 'assets/chapter3/zatezove1.png';
import zatezove2 from 'assets/chapter3/zatezove2.png';
import lano1 from 'assets/chapter3/lano1.png';
import vibrace1 from 'assets/chapter3/vibrace1.png';

export default [
	{
		id: 'zatezove1',
		title: 'Zátěžová deka',
		text:
			'Zátěžová deka: - doplňkový program firmy OBALPLAST Smrčí s.r.o. In: Obalplast.cz [online]. [cit. 2020-12-09].',
		href: 'https://www.obalplast.cz/zatezova-deka.htm',
		src: zatezove1,
	},
	{
		id: 'zatezove2',
		title: 'Záťežový nákrčník',
		text:
			'Aromaterapeutické zátěžové koťátko. In: Sensa Shop [online]. [cit. 2020-12-09].',
		href: 'https://www.sensa-shop.cz/aromaterapeuticke-zatezove-kotatko/',
		src: zatezove2,
	},
	{
		id: 'lano1',
		title: 'Přitahování se na laně na pojízdné desce',
		text:
			'SCOOTER BOARD ROPE PULL. In: Therapy Fun Zone [online]. [cit. 2020-12-09].',
		href: 'https://therapyfunzone.net/blog/scooter-board-rope-pull/',
		src: lano1,
	},
	{
		id: 'vibrace1',
		title: 'Logovibrátor',
		text:
			'Z-VIBE: LOGOPEDICKÁ VIBRAČNÍ POMŮCKA. In: Kousak.com [online]. [cit. 2020-12-09].',
		href:
			'https://www.kousak.com/z-vibe-logopedicka-vibracni-pomucka--logovibrator-/',
		src: vibrace1,
	},
] as Omit<CitationProps, 'index'>[];
