import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Hero from '../components/Hero/Hero';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
	max-width: 430px;
	margin: 0 auto;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 746px);
	${({ theme }) => theme.mq.laptop} 
		max-width: 780px;
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Label = styled.label`
	font-size: ${({ theme }) => theme.font.size.r};
	color: ${({ theme }) => theme.grey};
`;

const InputWrapper = styled.div`
	width: 100%;
	margin: 10px 0;
	${({ theme }) => theme.mq.tablet} {
		width: 43%;
	}
`;

const TextAreaWrapper = styled.div`
	width: 100%;
	margin: 10px 0;
`;

const Input = styled.input`
	padding: 10px;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.grey};
	outline: none;
	&:focus {
		background-color: ${({ theme }) => theme.lightGrey};
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.grey};
	height: 150px;
	resize: none;
	outline: none;
	&:focus {
		background-color: ${({ theme }) => theme.lightGrey};
	}
`;

const Button = styled.button`
	margin: 20px 20px 20px auto;
`;

const H2 = styled.h2`
	font-size: ${({ theme }) => theme.font.size.xl};
	text-align: center;
`;

const Index = ({ data, intl }) => {
	return (
		<MainTemplate seo={{ title: intl.formatMessage({ id: 'contact.title' }), slug: 'contact' }}>
			<Hero data={data} />
			<Wrapper>
				<H2>{intl.formatMessage({ id: 'contact.title' })}</H2>
				<Form action="#" type="post">
					<InputWrapper>
						<Label htmlFor="name">Name</Label>
						<Input id="name" type="text" name="user_name" />
					</InputWrapper>
					<InputWrapper>
						<Label htmlFor="mail">e-mail</Label>
						<Input id="mail" type="email" name="user_email" />
					</InputWrapper>
					<TextAreaWrapper>
						<Label htmlFor="message">Message</Label>
						<Textarea id="message" type="text" name="user_message" />
					</TextAreaWrapper>

					<Button type="submit">Send</Button>
				</Form>
			</Wrapper>
		</MainTemplate>
	);
};

export default injectIntl(Index);

export const query = graphql`
	query contact {
		file(relativePath: { eq: "mail_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;
