
// import React from 'react';
// import styled from 'styled-components';

// const FooterContainer = styled.footer`
// background-color: #333;
// color: #fff;
// padding: 20px 0 5px 0;
// text-align: center;
// `;

// const Footer = () => {
//     return (
//     <FooterContainer>
//         <p>© 2024 Your Company. All rights reserved.</p>
//     </FooterContainer>
//     );
// };

// export default Footer;

// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledFooter = styled.footer`
  background-color: #1c2331;
  color: #fff;
`;

const SocialIconsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ;
`;

const SocialIconLink = styled.a`
  color: #fff;
  margin-right: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
`;

const LinksSection = styled.section`
  padding: 2rem 0;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LinkColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin-bottom: 1.5rem;
`;

const UsefulLink = styled.p`
  margin: 0.5rem 0;
`;

const ContactSection = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
`;

const CopyrightSection = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconsContainer>
        <div>
          <span style={{color:"#008CBA",fontWeight:"900",fontSize:"30px"}}><span style={{color:"#f59e0b" , fontWeight:"900"}}>Movie</span>Time</span>
        </div>
        <div>
          <SocialIconLink href="#">
          <i class="bi bi-facebook"></i>
          </SocialIconLink>
          <SocialIconLink href="#">
          <i class="bi bi-twitter"></i>
          </SocialIconLink>
          <SocialIconLink href="#">
          <i class="bi bi-google"></i>
          </SocialIconLink>
          <SocialIconLink href="#">
          <i class="bi bi-instagram"></i>
          </SocialIconLink>
          <SocialIconLink href="#">
          <i class="bi bi-linkedin"></i>
          </SocialIconLink>
          <SocialIconLink href="#">
          <i class="bi bi-github"></i>
          </SocialIconLink>
        </div>
      </SocialIconsContainer>

      <LinksSection>
        <div className="container text-center text-md-start mt-5">
          <LinksContainer className="row mt-3">
            <LinkColumn className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </LinkColumn>

            <LinkColumn className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <UsefulLink>
                <a href="#!" className="text-white">
                  MDBootstrap
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  MDWordPress
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  BrandFlow
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  Bootstrap Angular
                </a>
              </UsefulLink>
            </LinkColumn>

            <LinkColumn className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <UsefulLink>
                <a href="#!" className="text-white">
                  Your Account
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  Become an Affiliate
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  Shipping Rates
                </a>
              </UsefulLink>
              <UsefulLink>
                <a href="#!" className="text-white">
                  Help
                </a>
              </UsefulLink>
            </LinkColumn>

            <LinkColumn className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p> 
                <i class="bi bi-house-fill mr-3">New York, NY 10012, US</i>
              </p>
              <p>
                <i class="bi bi-envelope-fill mr-3">info@example.com</i>
              </p>
              <p>
                 
                <i class="bi bi-telephone-fill mr-3">+ 01 234 567 88</i>
              </p>
              <p>
              <i class="bi bi-printer-fill mr-3">+ 01 234 567 88</i>
              </p>
            </LinkColumn>
          </LinksContainer>
        </div>
      </LinksSection>

      <CopyrightSection className="text-center p-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/" className="text-white">
          MDBootstrap.com
        </a>
      </CopyrightSection>
    </StyledFooter>
  );
};

export default Footer;

