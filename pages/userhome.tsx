import Layout from '../Components/Layout';
import { Grid, Text, Card, Container, Row, Spacer } from '@nextui-org/react';
import useGrpzStore from '../Utils/grpzStore';

const UserHome = () => {
  const storeGroupzList = useGrpzStore((store: any) => store.storeGroupzList);

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
                </Card.Header>
              </Card>
            </Grid>
          </Row>
        </Grid.Container>
      </Layout>
    </>
  );
};

export default UserHome;
