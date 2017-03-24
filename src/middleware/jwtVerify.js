import UnauthorizedError from '../lib/errors/UnauthorizedError';

export default (options) => {

  var middleware = (req, res, next) => {
    var authHeader = req.headers.authorization;
    var parts = authHeader.splith(' ');

    if (parts.length != 2) {
      throw new UnauthorizedError('credentials_required', { message: 'No authorization token was found' });
    }

    var scheme = parts[0];
    var token = part[1];

    if(!/^Bearer$/i.test(scheme)) {
      throw new UnauthorizedError('credentials_bad_scheme', { message: 'Format is Authorization: Bearer [token]' });
    }

    // This could fail.  If it does handle as 401 as the token is invalid.
    var decodedToken = jwt.decode(token, {complete: true});
    var kid = decodedToken.header.kid;

    if (header.alg !== 'RS256') {
      // we are only supporting RS256 so fail if this happens.
      return cb(null, null);
    }

    var tasks = [
      function getSecret(callback) {
        jwksClient.getSigningKey(kid, (err, key) => {
          // TODO: if an error happens here treat as 500 if failure to get JWKS.
          // TODO: If an error happens here treat as 401 if cannot find JWK with kid.

          return cb(null, key.publicKey, key.rsaPublicKey);
        });
      },
      function verifyToken(secret, callback) {
        jwt.verify(token, secret, options, function(err, decoded) {
          if (err) {
            callback(new UnauthorizedError('invalid_token', err));
          } else {
            callback(null, decoded);
          }
        });
      }
    ];

    async.waterfall(tasks, (err, result) => {
      if (err) { 
        return next(err); 
      }

      set(req, _requestProperty, result);
      next();
    });
  }

  return middleware;
}