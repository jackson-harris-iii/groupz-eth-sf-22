import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Container,
} from '@nextui-org/react';
import { useState } from 'react';
import { WorldIDWidget } from '@worldcoin/id';
import useGrpzStore from '../Utils/grpzStore';

const WorldCoin = () => {
  const [visible, setVisible] = useState(true);
  const handler = () => setVisible(!visible);
  const closeHandler = () => setVisible(false);

  const setStoreWorldCoinHash = useGrpzStore(
    (store: any) => store.setStoreWorldCoinHash
  );

  const verificationSuccessHandler = async (response) => {
    console.log('verificationSuccessHandler', response);
    try {
      await setStoreWorldCoinHash(response.nullifier_hash);
    } catch (err) {
      console.log('verification', err);
    }

    setStoreWorldCoinHash;
  };
  return (
    <>
      <Modal
        preventClose
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to Groupz
            <br />
            <Text b size={18}>
              Please Verify Your Humanity
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row justify="center" align="center">
              <WorldIDWidget
                actionId="wid_staging_ae39963e8f5c894e4afdb3c1e2378e9b"
                signal="groupz"
                // signal={account}
                enableTelemetry
                onSuccess={(verificationResponse) =>
                  verificationSuccessHandler(verificationResponse)
                }
                onError={(error) => console.error(error)}
              />
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorldCoin;
