import {
  Button,
  Card,
  Container,
  createTheme,
  Link,
  Navbar,
  Row,
  Text,
  Image,
  Col,
  Grid,
  Spacer,
} from '@nextui-org/react';

const Layout = ({ children }) => {
  return (
    <>
      <Grid.Container
        justify="center"
        style={{ borderBottom: '1px solid white', margin: '0' }}
      >
        <Grid>
          <Image src="/logo-letters.png" width={150} height={125} />
        </Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Container fluid>{children}</Container>
    </>
  );
};

export default Layout;
