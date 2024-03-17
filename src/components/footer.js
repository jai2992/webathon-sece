import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./footerstyles";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Our Story</FooterLink>
						<FooterLink href="#">Mission</FooterLink>
						<FooterLink href="#">Team</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Haircut</FooterLink>
						<FooterLink href="#">Hair Coloring</FooterLink>
						<FooterLink href="#">Facial</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Coimbatore</FooterLink>
						<FooterLink href="#">Kinathukadavu</FooterLink>
						<FooterLink href="#">Pollachi</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
			<div className="foot-btm">
				<p className="footer-copyright" style={{ paddingTop: "3px" }}>
					&copy; 2024 RJ and Co.
				</p>
			</div>
		</Box>
	);
};
export default Footer;
