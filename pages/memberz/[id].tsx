import { Avatar, Card, Col, Grid, Loading, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import useGrpzStore from '../../Utils/grpzStore';
import { ethers } from 'ethers';

const Memberz = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const storeSelectedGroup = useGrpzStore(
    (store: any) => store.storeSelectedGroup
  );
  const selectedGroupMemberz = useGrpzStore(
    (store: any) => store.selectedGroupMemberz
  );
  console.log('storeSelectedGroup', storeSelectedGroup);

  useEffect(() => {
    if (selectedGroupMemberz !== null) {
      setLoading(false);
      console.log('memberz', selectedGroupMemberz);
    }
  }, [selectedGroupMemberz]);

  return (
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
          <Row justify="center" wrap="wrap" css={{ m: 10 }}>
            <Text h2 color="white" weight={'semibold'}>
              {storeSelectedGroup.collectionName} Memberz
            </Text>
          </Row>
          {selectedGroupMemberz.map((member) => (
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
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default Memberz;
