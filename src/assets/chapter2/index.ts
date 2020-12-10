import { CitationProps } from 'components/Citation';

import houpani2 from 'assets/chapter2/houpani2.png';
import houpani1 from 'assets/chapter2/houpani1.webp';
import most1 from 'assets/chapter2/most1.png';
import prkno1 from 'assets/chapter2/prkno1.png';
import deska1 from 'assets/chapter2/deska1.png';
import deska2 from 'assets/chapter2/deska2.png';
import lezeni1 from 'assets/chapter2/lezeni1.jpg';

export default [
	{
		id: 'houpani1',
		title: 'Houpačka',
		text:
			'Master dětská houpačka houpací kruh [online]. In: . [cit. 2020-12-09].',
		href:
			'https://www.mall.cz/houpaci-hnizda-kruhy/master-detska-houpacka-houpaci-kruh-80-cm-100004738395?gclid=Cj0KCQiA5bz-BRD-ARIsABjT4njrt7j-KV00xP-kX5pK9MT9pgh0AQlqfVxvHyFHsWK6dK4T4RT8dC0aAjwLEALw_wcB',
		src: houpani1,
	},
	{
		id: 'houpani2',
		title: 'Závěsné lano',
		text:
			'Dřevěná houpačka rybka - Alla baby. In: Allababy.cz [online]. [cit. 2020-12-09].',
		href:
			'https://www.allababy.cz/detske-houpacky/drevena-houpacka-rybka/?variantId=2228',
		src: houpani2,
	},
	{
		id: 'most1',
		title: 'Montesory most',
		text:
			'KRAVCOVA, Dominika. Montessori duhová houpačka 5in1: ELIS DESIGN. In: Elisdesign.cz [online]. [cit. 2020-12-09].',
		href:
			'https://www.elisdesign.cz/detske-houpacky/montessori-duhova-houpacka-5in1/?variantId=21930',
		src: most1,
	},
	{
		id: 'prkno1',
		title: 'Hpupací prkno',
		text:
			'Houpací prkno - Princess - Houpee. In: Houpee.cz [online]. [cit. 2020-12-09].',
		href: 'https://www.houpee.cz/houpaci-prkno--princess/',
		src: prkno1,
	},
	{
		id: 'deska1',
		title: 'Pojízdná deska',
		text: 'Pojízdná deska Ergo [online]. In: . [cit. 2020-12-09].',
		href: 'https://www.sensa-shop.cz/pojizdna-deska-ergo',
		src: deska1,
	},
	{
		id: 'deska2',
		title: 'Aktivity na pojízdné descne',
		text:
			'Scooter Board Sensory Activities. In: My Mundane and Miraculous Life [online]. 19.2. 2020 [cit. 2020-12-09].',
		href:
			'https://www.mymundaneandmiraculouslife.com/scooter-board-sensory-activities/',
		src: deska2,
	},
	{
		id: 'lezeni1',
		title: 'Multifunkční žebřiny',
		text: 'Foto autorka.',
		src: lezeni1,
	},
] as Omit<CitationProps, 'index'>[];
