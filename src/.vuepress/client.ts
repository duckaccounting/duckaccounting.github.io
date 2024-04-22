import { defineClientConfig } from '@vuepress/client'
import { msalPlugin } from 'vue3-msal'
import Profile1 from './components/Profile1.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    if (!__VUEPRESS_SSR__) {
      app.use(msalPlugin, {
          auth: {
            clientId: 'c32a92a9-b24b-4473-ba6a-4dff28a524fd',
            authority: 'https://prodduckaccq54j.b2clogin.com/prodduckaccq54j.onmicrosoft.com/b2c_1a_signup_signin/',
            validateAuthority: false,  // must be false for B2C authorities
            knownAuthorities: [
              'prodduckaccq54j.b2clogin.com',
            ],
            redirectUri: 'https://signupadmin-app-asdk-test-77xz.azurewebsites.net/signin-oidc',
          },
          request: {
            scopes: [
              'openid',
              'offline_access',
              'https://prodduckaccq54j.onmicrosoft.com/admin-api/tenant.read'
            ]
          }
      });

      app.component('Profile1', Profile1);
    }
  },
  setup() {},
  layouts: {},
  rootComponents: [],
})
