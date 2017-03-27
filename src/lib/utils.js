/**
 * If you wanted to use `n` and `e` from JWKS check out node-jwks-rsa's implementation:
 * https://github.com/auth0/node-jwks-rsa/blob/master/src/utils.js#L35-L57
 */

export function certToPEM(cert) {
  cert = cert.match(/.{1,64}/g).join('\n');
  cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
  return cert;
}