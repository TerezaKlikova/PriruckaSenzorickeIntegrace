import React, {
	FC,
	Fragment,
	ReactNode,
	SVGProps,
	useLayoutEffect,
	useState,
} from 'react';
import Color from 'color';

import { Box, Flex, Grid } from 'components/Styled';
import Text from 'components/Text';
import Link from 'components/Link';
import { ListItem, UnorderedList } from 'components/List';

import useHeaderHeight from 'hooks/useHeaderHeight';

export type NavItem = {
	id: string;
	title: string;
};

export type ChapterType = NavItem & {
	icon: FC<SVGProps<SVGSVGElement>>;
	color: string;
	subchapters: NavItem[];
	activities: NavItem[];
	Content?: FC;
};

type Props = {
	children: ChapterType[];
};

const Chapters: FC<Props> = ({ children }) => {
	// Header height
	const topOffset = useHeaderHeight();

	// Current chapter
	const [current, setCurrent] = useState(0);

	useLayoutEffect(() => {
		const scrollHandler = () => {
			children.some((c, i) => {
				const elem = document.getElementById(c.id)?.getBoundingClientRect();
				const elemY = elem?.y ?? 0;
				const elemBottom = elem?.bottom ?? 0;

				if (elemY <= topOffset && elemBottom > topOffset * 5) {
					setCurrent(i);
					return true;
				}
				return false;
			});
		};
		scrollHandler();

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, [children, setCurrent, topOffset]);

	// Mobile chapter menu offset
	const [mobileChaptersOffset, setMobileChaptersOffset] = useState(0);
	useLayoutEffect(() => {
		setMobileChaptersOffset(
			document.getElementById('mobile-chapters')?.getBoundingClientRect()
				?.height ?? 0,
		);
	}, [setMobileChaptersOffset]);

	return (
		<Flex my={3} position="relative">
			{/* Desktop */}
			<Box mr={4} display={['none', 'block']} flexShrink={0}>
				<Flex position="sticky" top={topOffset} pt={3} flexDirection="column">
					{children.map((c, i) => (
						<Fragment key={c.id}>
							<Link href={`#${c.id}`}>
								<Flex
									alignItems="center"
									bg={
										current === i
											? c.color
											: Color(c.color).fade(0.5).rgb().string()
									}
									px={3}
									py={2}
								>
									<Box as={c.icon} width={20} flexShrink={0} />
									<Text
										ml={2}
										color="white"
										fontSize={'lg'}
										fontWeight={current === i ? 'bold' : undefined}
									>
										{c.title}
									</Text>
								</Flex>
							</Link>
							{current === i && (
								<UnorderedList mx={3}>
									<ListItem>
										<Link href={`#${c.id}`} p={2}>
											Co je {c.title}?
										</Link>
										<UnorderedList ml={3}>
											{c.subchapters.map(sub => (
												<ListItem key={sub.id}>
													<Link href={`#${sub.id}`} p={2}>
														{sub.title}
													</Link>
												</ListItem>
											))}
										</UnorderedList>
									</ListItem>
									{c.activities.length > 0 && (
										<ListItem>
											<Link href={`#${c.id}-aktivity`} p={2}>
												Aktivity na {c.title}
											</Link>
											<UnorderedList ml={3}>
												{c.activities.map(sub => (
													<ListItem key={sub.id}>
														<Link href={`#${sub.id}`} p={2}>
															{sub.title}
														</Link>
													</ListItem>
												))}
											</UnorderedList>
										</ListItem>
									)}
								</UnorderedList>
							)}
						</Fragment>
					))}
				</Flex>
			</Box>

			{/* Mobile */}
			<Box
				display={['block', 'none']}
				position="absolute"
				top={mobileChaptersOffset * 4}
				bottom={mobileChaptersOffset}
				left={0}
				right={0}
			>
				<Box height="100%" />
				<Grid
					id="mobile-chapters"
					position="sticky"
					bottom={0}
					gridAutoFlow="column"
					gridAutoColumns="1fr"
					gridGap={1}
				>
					{children.map((c, i) => (
						<Link
							key={c.id}
							href={`#${c.id}`}
							p={2}
							bg={
								current === i
									? c.color
									: Color(c.color).fade(0.5).rgb().string()
							}
						>
							<Flex maxHeight={30} flexDirection="column">
								<Box as={c.icon} minHeight={0} />
							</Flex>
						</Link>
					))}
				</Grid>
			</Box>

			<Flex flexDirection="column" flexGrow={1}>
				{children.map(({ id, Content }) =>
					Content ? <Content key={id} /> : <Text>{id}</Text>,
				)}
			</Flex>
		</Flex>
	);
};

export default Chapters;
