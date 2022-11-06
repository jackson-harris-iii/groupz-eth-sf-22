import Layout from '../Components/Layout';
import {
  Grid,
  Text,
  Card,
  Container,
  Row,
  Spacer,
  Col,
  Avatar,
} from '@nextui-org/react';
import useGrpzStore from '../Utils/grpzStore';

const UserHome = () => {
  const storeGroupzList = useGrpzStore((store: any) => store.storeGroupzList);

  return (
    <>
      <Layout>
        <Grid.Container>
          {storeGroupzList?.groupzList?.map((group) => (
            <Row justify="center" wrap="wrap" css={{ m: 10 }}>
              <Grid xs={6}>
                <Card
                  isPressable
                  isHoverable
                  variant="bordered"
                  css={{
                    borderColor: 'purple',
                    filter: 'drop-shadow(9px 7px 5px #7C1A7E)',
                  }}
                >
                  <Card.Header>
                    <Row justify="center">
                      <Col span={2}>
                        <Avatar src={group.imageUrl} size="xl" />
                      </Col>
                      <Col span={8}>
                        <Row justify="center">
                          <Text
                            h3
                            color="white"
                            weight={'semibold'}
                            css={{
                              m: 0,
                              pt: 15,
                            }}
                          >
                            {group.collectionName}
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Header>
                </Card>
              </Grid>
            </Row>
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default UserHome;
