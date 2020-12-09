import React from 'react';

import { Flex } from 'components/Styled';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import HomeChapters from 'components/HomeChapters';
import PrintTitlePage from 'components/PrintTitlePage';

import Chapters, { ChapterType } from 'pages/Chapters';
import Home from 'pages/Home';
import UsefulLinks from 'pages/UsefulLinks';
import Sources from 'pages/Sources';
import Chapter1 from 'pages/chapters/Chapter1';
import Chapter2 from 'pages/chapters/Chapter2';
import Chapter3 from 'pages/chapters/Chapter3';
import Chapter4 from 'pages/chapters/Chapter4';

import { GlobalStyles, ThemeProvider } from 'theme';

import { ReactComponent as Eye } from 'assets/semi-closed-eye.svg';
import { ReactComponent as Ear } from 'assets/human-ear.svg';
import { ReactComponent as Nose } from 'assets/nose-front.svg';
import { ReactComponent as Tongue } from 'assets/tongue.svg';

const CHAPTERS: ChapterType[] = [
	Chapter1,
	Chapter2,
	Chapter3,
	Chapter4,
	{
		id: 'zrakove-vnimani',
		icon: Eye,
		title: 'Zrakové vnímání',
		color: '#2e7d32',
		subchapters: [],
		activities: [],
	},
	{
		id: 'sluchove-vnimani',
		icon: Ear,
		title: 'Sluchové vnímání',
		color: '#9e9d24',
		subchapters: [],
		activities: [],
	},
	{
		id: 'cichove-vnimani',
		icon: Nose,
		title: 'Čichové vnímání',
		color: '#ff8f00',
		subchapters: [],
		activities: [],
	},
	{
		id: 'chutove-vnimani',
		icon: Tongue,
		title: 'Chuťové vnímání',
		color: '#d84315',
		subchapters: [],
		activities: [],
	},
];

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Flex as="main" flexDirection="column" minHeight="100vh">
				<PrintTitlePage />
				<Header
					items={[
						{ title: 'Stáhnout PDF', onClick: print },
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
