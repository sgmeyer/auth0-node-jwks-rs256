import dotenv from 'dotenv';

import expressJwt from './expressJwt';
import expressJwtSecret from '../lib/expressJwtSecret';

dotenv.load();

export const jwtCheck = expressJwt({
  secret: expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_TENANT}.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://api.codehero.com/v1/',
  issuer: `https://${process.env.AUTH0_TENANT}.auth0.com/`,
  algorithms: ['RS256']
});

