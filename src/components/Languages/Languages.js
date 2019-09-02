import React from 'react';
import { changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import flagPoland from '../../assets/images/flag-poland.png';
import flagFrance from '../../assets/images/flag-france.png';
import flagBritish from '../../assets/images/flag-uk.png';

const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-around;
	${({ theme }) => theme.mq.laptop} {
		display: ${({ inMobileMenu }) => (inMobileMenu ? 'none' : 'flex')};
		flex-direction: column;
	}
`;

const StyledLi = styled.li`
	margin: 0;
	padding: 0;
`;

const StyledButton = styled.button`
	border: none;
	display: flex;
	background: ${({ theme }) => theme.bright};
	height: 37px;

	&:focus {
		outline: none;
	}

	${({ theme }) => theme.mq.laptop} {
		margin: 0;
		height: auto;
		padding: 5px 20px 5px 0;

		&:hover {
			background: ${({ theme }) => theme.secondaryLight};
		}
	}
`;

const ImgWrapper = styled.div`
	width: 30px;

	${({ theme }) => theme.mq.laptop} {
		width: 30px;
		margin: 0 10px;
	}
`;
const StyledImg = styled.img`
	width: 100%;
	height: auto;
`;

const StyledText = styled.p`
	margin: 6px 0 0 10px;
	font-family: ${({ theme }) => theme.font.family.main};
	font-size: 16px;
`;

const Languages = ({ inMobileMenu, isRedirectToHomePage }) => {
	const path = isRedirectToHomePage ? '/' : null;
	const data = [
		{ locale: '/', img: flagPoland, text: 'Polski' },
		{ locale: 'fr', img: flagFrance, text: 'Français' },
		{ locale: 'en', img: flagBritish, text: 'English' }
	];
	return (
		<StyledUl inMobileMenu={inMobileMenu}>
			{data.map(({ locale, img, text }, i) => (
				<StyledLi key={i}>
					<StyledButton onClick={() => changeLocale(locale, path)}>
						<ImgWrapper>
							<StyledImg src={img} />
						</ImgWrapper>
						<StyledText>{text}</StyledText>
					</StyledButton>
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default Languages;

Languages.defaultProps = {
	isRedirectToHomePage: false
};
