# Auth0 RS256 Validation Using JWKS

## Purpose

This sample is intended as an introduction to the Auth0 JWKS endpoint.  The purpose is to demonstrate how one would verify an RS256 signed JWT while using the JWKS endpoint to lookup the public certificate necessary verify the token signature.  This sample should be used as a basic guide for building your own token verifier, however the sample is not considered production ready.  This sample lacks necessary error handling, caching, and other production qualities.

If you are building a NodeJS application using Express or HapiJS it is recommended that you use the production grade moduels provided by Autho ([node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) and [express-jwt](https://github.com/auth0/express-jwt)).  The sample code provided here used these two libraries as the basis for the coding examples.  This [sample repository](https://github.com/sgmeyer/auth0-rs256-verification) demonstrates that.

## Setting Up

Simply clone the repository locally:

```
git clone git@github.com:auth0-samples/auth0-node-jwks-rs256.git
```

Then install all the modules:

```
npm install
```

Create a .env file in the root directory:

```
PORT=3000
AUTH0_TENANT=your-tenant-subdomain
```

Then run the code on port 3000:

```
npm run dev
```

## See a bug or something missing?  PRs welcome!

If you see a bug or see that something is missing feel free to post an issue or submit a PR!

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.
