import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fc355b',
  clientCertificates: [
    {
      url: "https://q-nedbankbusinesshub.nedbank.co.za",
      ca: [],
      certs: [
        {
          pfx: "data/QA SBE 2021.pfx",
          passphrase: "data/pfx-passphrase.txt",
        },
      ],
    },
  ],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
      
    },
  },
});
