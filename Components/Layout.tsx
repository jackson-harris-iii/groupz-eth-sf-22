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
          <Image src="/bigger-logo.png" width={175} height={125} />
        </Grid>
      </Grid.Container>

      <Spacer y={2} />

      <Container fluid>{children}</Container>

      <Spacer y={2} />

      <Grid.Container
        justify="center"
        style={{
          borderTop: '1px solid white',
          margin: '0',
          bottom: '0',
          width: '100%',
        }}
      >
        <Grid>
          <Row justify="center" css={{ m: 10 }}>
            <Col span={6}>
              <Row justify="center">
                <Image src="/bigger-groupz.png" width={175} height={150} />
              </Row>
            </Col>
            <Col span={6}>
              <Spacer y={2.65} />
              <Row justify="center" wrap="wrap" css={{ ml: -5, pl: 0 }}>
                <Text h5 color="white" weight={'semibold'}>
                  was made with ❤️ by galaxon
                </Text>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Layout;
