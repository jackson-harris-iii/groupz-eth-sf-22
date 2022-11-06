import { Grid, Loading, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import useGrpzStore from '../../Utils/grpzStore';

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
          {/* {storeGroupzList?.groupzList?.map((group) => (
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
              onClick={() => router.push(`/memberz/${group.collectionName}`)}
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
      ))} */}
          {'hello'}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default Memberz;
