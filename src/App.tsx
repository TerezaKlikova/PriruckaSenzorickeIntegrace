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
import Chapter5 from 'pages/chapters/Chapter5';
import Chapter6 from 'pages/chapters/Chapter6';
import Chapter7 from 'pages/chapters/Chapter7';
import Chapter8 from 'pages/chapters/Chapter8';

import { GlobalStyles, ThemeProvider } from 'theme';

const CHAPTERS: ChapterType[] = [
	Chapter1,
	Chapter2,
	Chapter3,
	Chapter4,
	Chapter5,
	Chapter6,
	Chapter7,
	Chapter8,
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
