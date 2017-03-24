import { ArgumentError } from './errors/ArgumentError';
import { JwksClient } from './JwksClient';

const handleSigningKeyError = (err, cb) => {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // Any other error we will bubble up.
  if (err) {
    return cb(err);
  }
};

export default (options) => {
  if (options === null || options === undefined) {
    throw new ArgumentError('An options object must be provided when initializing expressJwtSecret');
  }

  const client = new JwksClient(options);
  const onError = handleSigningKeyError;

  return function secretProvider(req, header, payload, cb) {
    // Only RS256 is supported.
    if (!header || header.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(header.kid, (err, key) => {
      if (err) {
        return onError(err, (newError) => cb(newError, null));
      }

      // Provide the key.
      return cb(null, key.publicKey || key.rsaPublicKey);
    });
  };
};