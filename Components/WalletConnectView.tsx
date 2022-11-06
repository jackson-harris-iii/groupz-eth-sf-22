import { Container, Row, Col, Spacer } from '@nextui-org/react';
import { Web3Modal, Web3Button, useAccount } from '@web3modal/react';
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
      <Spacer y={5} />
      <Row justify="center" align="center" wrap="wrap">
        <Col span={12}>
          <Row justify="center" align="center">
            <Web3Modal config={config} />
            <Web3Button />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center" align="center">
            <> Hello Eth SF </>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default WalletConnectView;
