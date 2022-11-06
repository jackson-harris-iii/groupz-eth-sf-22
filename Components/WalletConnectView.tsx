import {
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Avatar,
  Card,
  Grid,
  Button,
  Link,
} from '@nextui-org/react';
import { Web3Modal, Web3Button, useAccount } from '@web3modal/react';
import router from 'next/router';
import Layout from './Layout';

const config = {
  projectId: 'b943b05f6e72df200c521c18d9e59bb5',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'groupz',
  },
};

const WalletConnectView = () => (
  <Layout>
    <Container fluid style={{ height: '100%' }}>
      <Col span={12}>
        <Row justify="center" align="center">
          <Text
            h1
            size={60}
            css={{
              color: 'white',
            }}
            weight="bold"
          >
            Welcome to Groupz
          </Text>
        </Row>
      </Col>
      <Row justify="center" align="center" wrap="wrap">
        <Col span={12}>
          <Row justify="center" align="center">
            <Web3Modal config={config as any} />
            <Web3Button />
          </Row>
        </Col>
      </Row>

      <Grid.Container>
        <Row justify="center" wrap="wrap" css={{ m: 30 }}>
          <Grid xs={6}>
            <Card
              variant="bordered"
              css={{
                borderColor: '#F31260',
                filter: 'drop-shadow(7px 5px 3px ##F31260',
              }}
            >
              <Card.Header>
                <Row>
                  <Row justify="center">
                    <Card.Body css={{ alignItems: 'center' }}>
                      <Text
                        h3
                        color="white"
                        weight={'normal'}
                        css={{
                          m: 0,
                          pt: 15,
                        }}
                      >
                        This project is part of the ETH San Francisco 2022
                        hackathon.
                      </Text>
                      <Text
                        h3
                        color="white"
                        weight={'normal'}
                        css={{
                          m: 0,
                          pt: 15,
                        }}
                      >
                        Find and connect with your digital collectible community
                        easily with your wallet.
                      </Text>
                      <Text
                        h3
                        color="white"
                        weight={'normal'}
                        css={{
                          m: 0,
                          pt: 15,
                        }}
                      >
                        Verify you're human with Worldcoin and you'll see all
                        your collectibles organized by collection (aka Group).
                        When you enter a group, you'll have access to the list
                        of all owners in that collection. Start a dm with an
                        owner using XMTP chat.
                      </Text>
                      <Link
                        css={{
                          m: 0,
                          pt: 25,
                        }}
                        href="https://nextui.org/docs/components/link"
                        isExternal
                      >
                        <Text
                          h3
                          color="##0072F5"
                          weight={'normal'}
                          css={{
                            m: 0,
                            pt: 15,
                          }}
                        >
                          You can find our project here
                        </Text>
                      </Link>
                    </Card.Body>
                  </Row>
                </Row>
              </Card.Header>
            </Card>
          </Grid>
        </Row>
      </Grid.Container>
    </Container>
  </Layout>
);

export default WalletConnectView;
