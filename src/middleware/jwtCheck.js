import express from 'express';
import jwt from 'express-jwt';
import expressJwtSecret from '../lib/expressJwtSecret';

export const jwtCheck = jwt({
  secret: expressJwtSecret({
    jwksUri: 'https://customer-demos.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: 'https://api.codehero.com/v1/',
  issuer: `https://customer-demos.auth0.com/`,
  algorithms: ['RS256']
});

