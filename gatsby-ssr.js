import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
    //* Script that need to go in head need to have type="text/partytown"
    //! Debug set to false in prod 
    // <script key="analytics" src="https://example.com/analytics.js" type="text/partytown" />
  ]);
  
  setPreBodyComponents([
    //* Scrips that need to go in body
  ]);
};