import { CitationProps } from 'components/Citation';

import sensor from 'assets/chapter1/sensor.gif';
import pyramid from 'assets/chapter1/pyramid.png';

export default [
	{
		id: 'sensor',
		title: 'Proces smyslového zpracování',
		text:
			'Sensory Processing: Sensational Kids OT – Sensory Specialists. http://sensationalkidsot.com.au/ [online]. [cit. 2020-12-09].',
		href: 'http://sensationalkidsot.com.au/home/sensory-processing/',
		src: sensor,
	},
	{
		id: 'pyramid',
		title: 'Pyramida učení',
		text:
			'PANTŮČKOVÁ, Šárka. Poruchy učení a chování: Pyramida učení Williams and Shellenberger (1996. In: Https://slideplayer.cz/ [online]. [cit. 2020-12-03].',
		href: 'https://slideplayer.cz/slide/14136040/',
		src: pyramid,
	},
] as Omit<CitationProps, 'index'>[];
