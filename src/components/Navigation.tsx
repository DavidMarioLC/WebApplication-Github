import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledNavigation>
      <List>
        <ListItem>
          <ListLink href='!#'>Why GitHub?</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href='!#'>Team</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href='!#'>Enterprise</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href='!#'>Explore</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href='!#'>Marketplace</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href='!#'>Pricing</ListLink>
        </ListItem>
      </List>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const List = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const ListItem = styled.li``;
const ListLink = styled.a`
  color: ${({ theme }) => theme.color.textHeader};
  text-decoration: none;
`;
export default Navigation;
