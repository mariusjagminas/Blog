import React from 'react';
import styled from 'styled-components';
import Date from '../Date/Date';
import truncate from 'lodash/truncate';
import Img from '../Img/Img';
import { Link } from 'gatsby-plugin-intl';

const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const StyledLi = styled.li`
	margin: 30px 0;
	padding: 0;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
`;

const StyledImg = styled(Img)`
	width: 60px;
	height: 60px;
	border-radius: 60px;
	background: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ isDateAvailable }) => (isDateAvailable ? 'flex-start' : 'center')};
	margin-left: 20px;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;
	&:hover {
		opacity: 0.6;
	}
`;

const StyledH4 = styled.h4`
	margin: 0;
	color: ${({ theme }) => theme.primary};
	line-height: 1.1;
	width: 200px;
`;

const List = ({ nodes }) => {
	const isDateAvailable = nodes[0].date ? true : false;
	return (
		<StyledUl>
			{nodes.map((data, i) => (
				<StyledLi key={i}>
					<StyledLink to={`/${data.slug}`}>
						<StyledImg
							imgStyle={{ objectFit: 'cover' }}
							fluid={data.articleImage ? data.articleImage.fluid : null}
						/>
						<Wrapper isDateAvailable={isDateAvailable}>
							<Date small date={data.date || null} />
							<StyledH4>{truncate(data.title, { length: 55 })}</StyledH4>
						</Wrapper>
					</StyledLink>
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default List;
