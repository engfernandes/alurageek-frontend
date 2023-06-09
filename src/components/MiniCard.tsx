import theme from '@/Theme';
import useProductStore from '@/stores/product';
import { Card, CardBody, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

interface MiniCardProps {
	display?: any;
	src: any;
	alt: string;
	title: string;
	value: number;
	link: string;
	handleClick: any;
}

function MiniCard({
	display,
	src,
	alt,
	title,
	value,
	link,
	handleClick,
}: MiniCardProps) {
	const slug = useProductStore((state) => state.slug);

	return (
		<Card
			background='transparent'
			borderRadius='none'
			boxShadow='none'
			display={display}
			height='249px'
			width={{ base: '156px', md: '164px' }}
		>
			<CardBody
				display='flex'
				flexDirection='column'
				gap='8px'
				padding='none'
				width={{ base: '156px', md: '164px' }}
			>
				<Image src={src} alt={alt} width={156} height={174} objectFit='cover' />
				<Flex flexDirection='column' gap='8px'>
					<Text fontSize='14px'>{title}</Text>
					<Text fontSize='14px' fontWeight={700}>
						R$ {value.toFixed(2)}
					</Text>
					<Link
						as={NextLink}
						color={theme.colors.blue}
						fontSize='16px'
						fontWeight={700}
						href={`${slug}`}
						onClick={handleClick}
					>
						{link}
					</Link>
				</Flex>
			</CardBody>
		</Card>
	);
}

export default MiniCard;
