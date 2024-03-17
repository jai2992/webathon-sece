// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 1% 0% 0%  0%;
	background: rgb(0,0,0,0.2);
	// position: absolute;
  color:black;
	width: 100%;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
  .foot-btm{
    height:30px;
    background: orange;
    display:flex;
    flex-direction: column;
    align-items: center;
    color:rgb(255,255,255,0.7)
  }
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 0px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 80px;

	@media (max-width: 1080px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: black;
	margin-bottom: 10px;
	font-size: 10px;
	text-decoration: none;

	&:hover {
		color: orange;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 14px;
	color: black;
	margin-bottom: 10px;
	font-weight: bold;
`;
