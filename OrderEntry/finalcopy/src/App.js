import React from 'react';
import './components/orderentry.css';
import { UALProvider, withUAL } from 'ual-reactjs-renderer';
import { Anchor } from 'ual-anchor';
import OrderEntryApp from './components/orderentry';

const ourNetwork = {
    chainId: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
    rpcEndpoints: [{ protocol: "https", host: "jungle3.cryptolions.io", port: '443' }]
};

const OrderEntryAppConsumer = withUAL(OrderEntryApp);

const anchor = new Anchor([ourNetwork], {
    appName: 'OrderEntryApp',
    service: 'https://cb.anchor.link',
    disableGreymassFuel: false,
    requestStatus: false 
});



function App() {
  return (
    <ul>
      <UALProvider chains={[ourNetwork]} authenticators={[anchor]} appName={"OrderEntryApp"} ourNetwork={[ourNetwork]}>
        <OrderEntryAppConsumer/>
      </UALProvider>
    </ul>
  );
}

export default withUAL(App, [anchor]);
