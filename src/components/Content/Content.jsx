import React, { useEffect } from 'react';
//import { Container, Section } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
    Section, 
    Container
} from './ContentStyles';

//import { useInView } from 'react-intersection-observer';
//import { useAnimation } from 'framer-motion';

export const Content = ({ 
	topLine, 
	headline, 
	description, 
	buttonLabel, 
	img, 
	inverse,
    big,
    reverse, }) => {
	return (
		<Section inverse={inverse}>
			<Container
			  inverse={inverse}
			>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine>
								{topLine.text}
							</TopLine>
							<Heading
							>
								{headline}
							</Heading>
							<Subtitle
							>
								{description}
							</Subtitle>
							<ContentButton
							  inverse={inverse}
							  big={big}
							>
								{buttonLabel}
							</ContentButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
					
					>
						<ImgWrapper>
							<Img
							  src={img}
							/>
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};

export default Content;