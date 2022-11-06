import Layout from '../Components/Layout';
import { Grid, Text, Card, Container, Row, Spacer } from '@nextui-org/react';

const UserHome = () => {
  return (
    <>
      <Layout>
        <Grid.Container>
          <Row justify="center" wrap="wrap" css={{ m: 10 }}>
            <Grid xs={6}>
              <Card isPressable isHoverable variant="bordered">
                <Card.Header>
                  <Row justify="center">
                    <Text
                      size={15}
                      color="white"
                      weight={'semibold'}
                      css={{
                        m: 0,
                      }}
                    >
                      Group Name
                    </Text>
                  </Row>
                
        </Grid.Container>
      </Layout>
    </>
  );
};

export default UserHome;
