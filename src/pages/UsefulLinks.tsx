import React, { FC } from 'react';

import Chapter from 'components/Chapter';
import UsefulLink, { UsefulLinkProps } from 'components/UsefulLink';

const USEFUL_LINKS: UsefulLinkProps[] = [
	{
		title: 'Sensa shop',
		href: 'https://www.sensa-shop.cz/',
		description: [
			'Dobře zásobeny internetový obchod se senzoruckými pomůckami, Obsahuje užitečné články o teorii senzorické integrace.',
		],
	},
	{
		title: 'Zátěžová deka',
		href: 'https://www.obalplast.cz/zatezova-deka.htm',
		description: [
			'Finančně přijatelnější možnost, zátěžové deky vyrábějí jako vedlejší produkt, ze zbylých plastových kuliček. ',
		],
	},
	{
		title: 'Obchod s kousátky',
		href: 'https://www.kousak.com/',
		description: [
			'Nefunguje pouze jako obchod, ale také jako poradna. Majitelka vždy velmi ráda poradí ohledně vhodného kousátka, nebo postupu při různých poruchách (porucha příjmu potravy, artikulační obtíže, nauka jak kousat atd.).',
		],
	},
	{
		title: 'Bez sondy',
		href: 'http://bezsondy.cz/',
		description: [
			'Informační web zabývající se dětmi s poruchami příjmu potravy, nebo dětmi se sondou.',
			'Pomáhají rodičům zorientovat se v problematice sondovaných a obtížně krmených dětí.',
		],
	},
	{
		title: 'Klinika No Tube',
		href: 'https://notube.com/',
		description: [
			'Specializovana klinika s programem, jak naučit obtížně krmené děti, nebo děti se sondou, jíst orálně.',
		],
	},
	{
		title: 'Asociace senzorické integrace',
		href: 'https://senzorickaintegrace.com/',
		description: [
			'Užitečné tipy a kontakty na pracoviště terapeutů senzorické integrace.',
		],
	},
	{
		title: 'Neurosenzorické centrum Verhaul Ostrava',
		href: 'https://verheul-centre.com/',
		description: [
			'Centrum zabývající se koherentní rehabilitací, jejímž základem je Snoezelen koncept.',
		],
	},
	{
		title: 'Studio Ilony Hrbáčkové',
		href: 'http://www.seminarehrbackova.cz/',
		description: [
			'Speciální pedagožka a lektorka věnující se terapii senzorické integrace a přetrvávajícím primárním reflexům. Ve studiu ma senzomotorickou místnosti i snoezeln, sídli ve Slavkově u Brna.',
		],
	},
	{
		title: 'Dětské poradenské a terapeutické centrum 7',
		href: 'http://www.7centrum.cz/',
		description: [
			'Poskytuje ucelenou rehabiliace za pomoci terapie SI, neurovyvojové terapie, terapeutického poslechu.',
		],
	},
	{
		title: 'Sensory Integration Education',
		href: 'https://www.sensoryintegration.org.uk/',
		description: [
			'Organizace poskytující vzdělávání v oboru terapie senzorické integrace.',
		],
	},
];

const UsefulLinks: FC = () => (
	<Chapter id="uzitecne-odkazy" variant="main" title="Užitečné odkazy">
		{USEFUL_LINKS.map(l => (
			<UsefulLink key={l.href} {...l} />
		))}
	</Chapter>
);

export default UsefulLinks;
