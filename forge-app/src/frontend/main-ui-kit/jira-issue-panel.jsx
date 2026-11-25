
import React from 'react';
import ForgeReconciler, { Heading, Text } from '@forge/react';

const App = () => {
  return (
    <>
      <Heading>OpsPilot</Heading>
      <Text>AI-powered incident investigation assistant</Text>
      <Text>
        Investigate incidents using related Jira issues,
        engineering knowledge and troubleshooting runbooks.
      </Text>
      <Text>Ready to investigate this issue?</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
