import React from 'react';

import { Flex } from 'components/Styled';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import HomeChapters from 'components/HomeChapters';

import Chapters, { ChapterType } from 'pages/Chapters';
import Home from 'pages/Home';
import UsefulLinks from 'pages/UsefulLinks';
import Sources from 'pages/Sources';

import { GlobalStyles, ThemeProvider } from 'theme';

import { ReactComponent as Brain } from 'assets/brain.svg';
import { ReactComponent as JumpingRope } from 'assets/jumping-rope.svg';
import { ReactComponent as MuscleUp } from 'assets/muscle-up.svg';
import { ReactComponent as Hand } from 'assets/hand.svg';
import { ReactComponent as Eye } from 'assets/semi-closed-eye.svg';
import { ReactComponent as Ear } from 'assets/human-ear.svg';
import { ReactComponent as Nose } from 'assets/nose-front.svg';
import { ReactComponent as Tongue } from 'assets/tongue.svg';

const CHAPTERS: ChapterType[] = [
	{
		id: 'senzoricka-integrace',
		icon: Brain,
		title: 'Senzorická integrace',
		color: '#ad1457',
		subchapters: [
			{ id: 'foo', title: 'foo' },
			{ id: 'goo', title: 'goo' },
		],
		activities: [],
		content: <div>Senzorická integrace</div>,
	},
	{
		id: 'vestibularni-vnimani',
		icon: JumpingRope,
		title: 'Vestibulární vnímání',
		color: '#4527a0',
		subchapters: [],
		activities: [],
		content: <div>Vestibulární vnímání</div>,
	},
	{
		id: 'proprioceptivni-vnimani',
		icon: MuscleUp,
		title: 'Proprioceptivní vnímání',
		color: '#1565c0',
		subchapters: [],
		activities: [],
		content: <div>Proprioceptivní vnímání</div>,
	},
	{
		id: 'hmatove-vnimani',
		icon: Hand,
		title: 'Hmatové vnímání',
		color: '#00838f',
		subchapters: [],
		activities: [],
		content: <div>Hmatové vnímání</div>,
	},
	{
		id: 'zrakove-vnimani',
		icon: Eye,
		title: 'Zrakové vnímání',
		color: '#2e7d32',
		subchapters: [],
		activities: [],
		content: <div>Zrakové vnímání</div>,
	},
	{
		id: 'sluchove-vnimani',
		icon: Ear,
		title: 'Sluchové vnímání',
		color: '#9e9d24',
		subchapters: [],
		activities: [],
		content: <div>Sluchové vnímání</div>,
	},
	{
		id: 'cichove-vnimani',
		icon: Nose,
		title: 'Čichové vnímání',
		color: '#ff8f00',
		subchapters: [],
		activities: [],
		content: <div>Čichové vnímání</div>,
	},
	{
		id: 'chutove-vnimani',
		icon: Tongue,
		title: 'Chuťové vnímání',
		color: '#d84315',
		subchapters: [],
		activities: [],
		content: <div>Chuťové vnímání</div>,
	},
];

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Flex as="main" flexDirection="column" minHeight="100vh">
				<Header
					items={[
						{ title: 'Stáhnout PDF', href: 'stahnout-pdf' },
						{ title: 'Užitečné odkazy', href: 'uzitecne-odkazy' },
						{ title: 'Použité zdroje', href: 'pouzite-zdroje' },
					]}
				/>
				<Wrapper>
					<Home />
					<HomeChapters>{CHAPTERS}</HomeChapters>
					<Chapters>{CHAPTERS}</Chapters>
					<UsefulLinks />
					<Sources />
				</Wrapper>
			</Flex>
		</ThemeProvider>
	);
}

export default App;
