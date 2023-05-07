// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';



 export function authMiddleware( req, res, next) {
    // allows token to be sent via req.body, req.query, or headers
    let token =  req.headers.authorization;

    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
      console.log("middleware-token:",token)
    }

    if (!token) {
        res.status(401);
        throw new Error("Invalid token");
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log("middleware-data: ", data)
    } catch {
      console.log('Invalid token');
    res.status(501);
    throw new Error("Invalid token");
    }
    next()
  }

  export function signToken({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }

