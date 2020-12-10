import { CitationProps } from 'components/Citation';

import valec1 from 'assets/chapter5/valec1.png';
import lampa1 from 'assets/chapter5/lampa1.jpg';
import lampa2 from 'assets/chapter5/lampa2.jpg';
import lampa3 from 'assets/chapter5/lampa3.jpg';
import predmety1 from 'assets/chapter5/predmety1.jpg';
import predmety2 from 'assets/chapter5/predmety2.jpg';
import krabice1 from 'assets/chapter5/krabice1.png';
import krabice2 from 'assets/chapter5/krabice2.png';

export default [
	{
		id: 'valec1',
		title: 'Bubůinkový válec s rybičkami',
		text:
			'MOTION STOJANOVÉ SVÍTIDLO. In: Dekolamp.cz [online]. [cit. 2020-12-09].',
		href:
			'https://www.dekolamp.cz/trio-r5073-47-motion-stojanove-svitidlo-smd-1x4w-2700k.html?kk=a4c6368-176443fa3c3-988ec&gclid=Cj0KCQiA5bz-BRD-ARIsABjT4ngiHRxDzc7inqwO29VeP6NZVj7lB0XLSA14yUxY-U2wCtuVicxk3gUaApXaEALw_wcB&utm_source=kelkoocz&utm_medium=cpc&utm_campaign=kelkooclick&utm_term=Trio+TRIO+R5073-47+Motion+stojanov%C3%A9+sv%C3%ADt',
		src: valec1,
	},
	{
		id: 'lampa1',
		title: 'Tekuté přesýpací hodiny',
		text: 'Foto autorka.',
		src: lampa1,
	},
	{
		id: 'lampa2',
		title: 'Kapání barvy do pěny',
		text: 'Foto autorka.',
		src: lampa2,
	},
	{
		id: 'lampa3',
		title: 'DIY lávová lampa',
		text: 'Foto autorka.',
		src: lampa3,
	},
	{
		id: 'predmety1',
		title: 'Světelné míčky',
		text: 'Foto autorka.',
		src: predmety1,
	},
	{
		id: 'predmety2',
		title: 'Relaxační kouzelná lampa',
		text: 'Foto autorka.',
		src: predmety2,
	},
	{
		id: 'krabice1',
		title: 'DYI světelná krabice',
		text: 'Foto autorka.',
		src: krabice1,
	},
	{
		id: 'krabice2',
		title: 'Dřevěné barevné bloky',
		text:
			'DIY Light Box for Sensory Play. In: The Imagination Tree [online]. 31.3. 2013 [cit. 2020-12-09].',
		href:
			'https://theimaginationtree.com/diy-light-box-for-sensory-play/?showComment=1357570502415',
		src: krabice2,
	},
] as Omit<CitationProps, 'index'>[];
