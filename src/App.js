import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { connectors, connectorLocalStorageKey } from './utils/connectors'
import { useEagerConnect } from "./hooks/useEagerConnect"
import { useInactiveListener } from "./hooks/useInactiveListener"
import { useAxios } from "./hooks/useAxios";
import { getErrorMessage } from "./utils/ethereum";

// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes'

function App() {

  const [connectModalOpen, setConnectModalOpen] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(null);
  const [networkError, setNetworkError] = useState(null);

  useAxios();

  const { activate, active, connector } = useWeb3React();
  const connectAccount = () => {
    setConnectModalOpen(true)
  }
  const connectToProvider = (connector) => {
    activate(connector)
  }

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // mount only once or face issues :P
  const [triedEager, triedEagerError] = useEagerConnect()
  const { activateError } = useInactiveListener(!triedEager || !!activatingConnector)

  // handling connection error
  if ((triedEagerError || activateError) && errorModalOpen === null) {
    const errorMsg = getErrorMessage(triedEagerError || activateError);
    setNetworkError(errorMsg);
    setErrorModalOpen(true);
  }

  const closeErrorModal = () => {
    window.localStorage.setItem(connectorLocalStorageKey, connectors[0].key);
    window.location.reload();
  }

  return (
    <div>
      <MyRouts connectAccount={connectAccount} />

      <Dialog className='web3-modal' maxWidth={'xs'}
        disableBackdropClick
        disableEscapeKeyDown
        open={!!errorModalOpen && !active}
        onClose={(event, reason) => { if (reason && reason == "backdropClick") return; setErrorModalOpen(false) }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{ padding: '10%', textAlign: 'center', minWidth: '350px', background: '#f0f8ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>{networkError}</p>
            <Button onClick={closeErrorModal} variant="contained" color="primary">Close</Button>
          </div>
        </div>
      </Dialog>

      <Dialog className='web3-modal' maxWidth={'xs'}
        disableBackdropClick
        disableEscapeKeyDown
        open={!!connectModalOpen}
        onClose={(event, reason) => { if (reason && reason == "backdropClick") return; setConnectModalOpen(false) }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{ padding: '10%', textAlign: 'center', minWidth: '350px', background: '#f0f8ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
              connectors.map((entry, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => {
                    connectToProvider(entry.connectorId);
                    window.localStorage.setItem(connectorLocalStorageKey, entry.key);
                    setConnectModalOpen(false)
                  }}
                  className="connect-button textPrimary"
                  color="primary"
                  style={{ color: 'red', marginBottom: '10px' }}
                  endIcon={<entry.icon width="30" />}
                  id={`wallet-connect-${entry.title.toLocaleLowerCase()}`}
                >
                  {entry.title}
                </Button>
              ))}
          </div>
          <div style={{ textAlign: 'center', paddingTop: 10 }}>
            <Button style={{ width: '100%' }} onClick={() => { setConnectModalOpen(false) }} variant="contained" color="primary">Close</Button>
          </div>

        </div>
      </Dialog>

    </div>
  );
}

export default App;