import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export interface HeaderProps {
  siteTitle: string;
}

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <Container>
    <TitleWrapper>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </TitleWrapper>
  </Container>
);

export default Header;
