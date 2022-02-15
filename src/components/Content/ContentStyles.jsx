import styled from "styled-components";
//import { mediaQueries } from '../../../responsive';
//import { motion } from 'framer-motion';

export const Section = styled.div `

`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	background: ${({ inverse }) => (inverse ? '#fff' : '#880808')};

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	font-family: 'Questrial', sans-serif;

	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const TopLine = styled.div`
	font-size: 1rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: ${({ inverse }) => (inverse ? '#fff' : '#dc281e')};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled.h2`
	margin-bottom: 24px;
	font-size: 3rem;
	font-weight: bold;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? '#fff' : '#000')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 1.2rem;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#fff' : '#000')};
`;

export const ContentButton = styled.button`
	height: 3rem;
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '20px 84px' : '10px 20px')};
	background: ${({ inverse }) => (inverse ? '#000' : '#dc281')};
	color: ${({ inverse }) => (inverse ? '#fff' : '#000')};
	border: none;
	outline: none;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	
`;