import ForbiddenError from '../lib/errors/ForbiddenError';

export default (requiredScope) => {
  var middleware = (req, res, next) => {
    const user = req.user;
    const requiredScopes = requiredScope.split(' ');
    const scopes = user.scope.split(' ');

    if (!requiredScopes || requiredScopes.length  < 1) { 
      next();
    }

    requiredScopes.forEach((scope) => {
      if (scopes.indexOf(scope) < 0) {
        next(new ForbiddenError('insufficient_Scope', { message: 'The token does not contain sufficient scopes.' }));
      }
    });

    next();  
  }

  middleware.ForbiddenError = ForbiddenError;

  return middleware;
}