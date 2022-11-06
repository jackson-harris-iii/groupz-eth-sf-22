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
  Loading,
} from '@nextui-org/react';
import useGrpzStore from '../Utils/grpzStore';
import { useRouter } from 'next/router';
import { useState } from 'react';

const UserHome = () => {
  const [loading, setLoading] = useState(false);
  const storeGroupzList = useGrpzStore((store: any) => store.storeGroupzList);
  const setStoreSelectedGroup = useGrpzStore(
    (store: any) => store.setStoreSelectedGroup
  );
  const clearGroupMemberz = useGrpzStore(
    (store: any) => store.clearGroupMemberz
  );
  const router = useRouter();

  return (
    <>
      <Layout>
        {loading ? (
          <Grid.Container>
            <Row justify="center" wrap="wrap" css={{ m: 10 }}>
              <Grid xs={12}>
                <Loading />
              </Grid>
            </Row>
          </Grid.Container>
        ) : (
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
                    onClick={async () => {
                      setLoading(true);
                      await clearGroupMemberz();
                      setStoreSelectedGroup(group);
                      setLoading(false);
                      router.push(`/memberz/${group.collectionName}`);
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
        )}
      </Layout>
    </>
  );
};

export default UserHome;
