import React, { FC } from 'react';

import Chapter from 'components/Chapter';
import Citation, { CitationProps } from 'components/Citation';
import { NumberedList } from 'components/List';

import Chapter1Gallery from 'assets/chapter1';
import Chapter2Gallery from 'assets/chapter2';
import Chapter3Gallery from 'assets/chapter3';
import Chapter4Gallery from 'assets/chapter4';
import Chapter5Gallery from 'assets/chapter5';

const MapChapterId = (num: number, sources: Omit<CitationProps, 'index'>[]) =>
	sources.map(s => ({ ...s, id: `chapter-${num}-${s.id}` }));

const MakeBibliography = (...sources: Omit<CitationProps, 'index'>[]) =>
	sources.reduce(
		(acc, next, i) => ({
			...acc,
			[next.id]: { ...next, index: i + 1 },
		}),
		{} as Record<string, CitationProps>,
	);

const BIBLIOGRAPHY = MakeBibliography(
	{
		id: 'vingralkova2016',
		text:
			'VINGRÁLKOVÁ, Eva, 2016. Cvičení a terapie pro děti s autismem, Aspergerovým syndromem, ADD, ADHD, poruchou smyslového zpracování a jinými poruchami učení. Olomouc: Fontána. ISBN 978-80-7336-844-9.',
	},
	{
		id: 'bundy2002',
		text:
			'BUNDY, A.C., E. LANE a E.A. MURRAY, 2002. Sensory integration: Theory and practice. 2. vydání. Philadelphia: F. A. Davis company Philadelphia. ISBN 978-0-8036-0545-9.',
	},
	{
		id: 'bogdashina2017',
		text:
			'BOGDASHINA, Ol‘ga, 2017. Specifika smyslového vnímání u autismu a Aspergerova syndromu. Přeložil Helena ČÍŽKOVÁ. V Praze: Pasparta. ISBN 978-80-88163-06-0.',
	},
	{
		id: 'ayres2005',
		text:
			'Sensory integration and the child. Understanding hidden sensory challenges. 25th Anniversary Edition, 2005. AYRES, Jean. Sensory integration and the child.: Understanding hidden sensory challenges. 25th Anniversary Edition [online]. 2. Los Angeles, California: Western Psychological Services, s. 211 [cit. 2020-11-19]. ISBN 978-0-87424-437-3.',
		href:
			'https://books.google.cz/books?id=-7NeFNFswo0C&printsec=frontcover&hl=cs&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
	},
	{
		id: 'hrcova2018',
		text:
			'HRČOVÁ, KOVÁČOVÁ a MAGOVÁ, 2018. Expresívne terapie vo vedách o človeku 2018: senzorické dysfunkcie u detí s poruchou autistického spektra a ich súvis s problémami v každodennom fungovaní (prehľad výskumov) [online]. Ružomberok: VERBUM [cit. 2020-10-19]. ISBN 978-80-561- 0563-4.',
		href:
			'https://expresivneterapie.files.wordpress.com/2018/08/zbornik_expresivne_2018.pdf',
	},
	{
		id: 'hrcova2020',
		text:
			'HRČOVÁ, Jana. Senzorická integrace a podpora řečových funkcí. In: 3lobit.cz [online]. [cit. 2020-10-19].',
		href: 'https://3lobit.cz/senzoricka-integrace-a-podpora-recovych-funkci/',
	},
	{
		id: 'thorova2012',
		text:
			'THOROVÁ, Kateřina, 2012. Poruchy autistického spektra: dětský autismus, atypický autismus, Aspergerův syndrom, dezintegrační porucha. Vyd. 2. Praha: Portál. ISBN 978-80-262-0215-8.',
	},
	{
		id: 'shelly2002',
		text:
			'BUNDY, Anita C., Shelly J LANE a Elizabeth A. MURRAY, 2002. Sensory Integration: Theory and Practice. 2. vydání. F.A. Davis Company. ISBN 978-0803605459.',
	},
	{
		id: 'kranowitz1998',
		text:
			'Kranowitz, Carol Stock. The Out-of-Sync Child: Recognizing and Coping with Sensory Integration Dysfunction. 1998. New York: The Berkley Publishing Group.',
	},
);

export const GALLERY = MakeBibliography(
	...MapChapterId(1, Chapter1Gallery),
	...MapChapterId(2, Chapter2Gallery),
	...MapChapterId(3, Chapter3Gallery),
	...MapChapterId(4, Chapter4Gallery),
	...MapChapterId(5, Chapter5Gallery),
);

console.log(GALLERY);

const Sources: FC = () => (
	<Chapter id="pouzite-zdroje" variant="main" title="Použité zdroje">
		<Chapter id="pouzite-zdroje-literatura" title="Literatura">
			<NumberedList>
				{Object.values(BIBLIOGRAPHY).map(b => (
					<Citation key={b.id} {...b} />
				))}
			</NumberedList>
		</Chapter>
		<Chapter id="pouzite-zdroje-obrazky" title="Obrázky">
			<NumberedList>
				{Object.values(GALLERY).map(b => (
					<Citation key={b.id} {...b} />
				))}
			</NumberedList>
		</Chapter>
	</Chapter>
);

export default Sources;
