import { Avatar, Card, Col, Grid, Loading, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import useGrpzStore from '../../Utils/grpzStore';
import { ethers } from 'ethers';

const Dmz = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const storeSelectedGroup = useGrpzStore(
    (store: any) => store.storeSelectedGroup
  );
  const storeSelected4Dmz = useGrpzStore(
    (store: any) => store.storeSelected4Dmz
  );
  console.log('storeSelectedGroup', storeSelectedGroup);

  useEffect(() => {
    if (storeSelected4Dmz !== null) {
      setLoading(false);
      console.log('member', storeSelected4Dmz);
    }
  }, [storeSelected4Dmz]);

  return (
    <Layout>
      {loading ? (
        <Grid.Container>
          <Row justify="center" wrap="wrap" css={{ m: 10 }}>
            <Loading />
          </Row>
        </Grid.Container>
      ) : (
        <Grid.Container>
          <Row justify="center" wrap="wrap" css={{ m: 10 }}>
            <Avatar src={storeSelected4Dmz.avatar} size="xl" />
          </Row>
          <Row justify="center" wrap="wrap" css={{ m: 10 }}>
            <Text h2 color="white" weight={'semibold'}>
              dmz w/ {storeSelected4Dmz.member}
            </Text>
          </Row>
          {/* {selectedGroupMemberz.map((member) => (
            <Row justify="center" wrap="wrap" css={{ m: 10 }}>
              <Grid xs={6}>
                <Card
                  isPressable
                  isHoverable
                  variant="bordered"
                  css={{
                    borderColor: '$cyan500 ',
                    filter: 'drop-shadow(9px 3px 5px cyan)',
                  }}
                  onClick={() => router.push(`/memberz/${member.member}`)}
                >
                  <Card.Header>
                    <Row justify="center">
                      <Col span={2}>
                        <Avatar src={member.avatar} size="xl" />
                      </Col>
                      <Col span={8}>
                        <Row justify="center">
                          <Text
                            h4
                            color="white"
                            weight={'semibold'}
                            css={{
                              m: 0,
                              py: 15,
                            }}
                          >
                            {member.member}
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Header>
                </Card>
              </Grid>
            </Row>
          ))} */}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default Dmz;
