# ExothermicJS Auth0 Library

## Installation

```
yarn add @exothermic/lib-auth0
```

## Basic usage

```javascript
const express = require('express')
const authenticator = require('@exothermic/lib-auth0')

const app = express()

app.use(authenticator)
```

This express mmiddleware will set up 2 routes; ```/login``` as the login entrypoint and ```/callback``` as the auth0 callback point.
Upon a successful login, the user will be redirected to ```/admin/dashboard```. Upon a failed attempt, the user will be redirected to ```/failure```. Where they go from 
there is up to you.

It is recommended that you include a ```.env``` file within the root of your project. Here are the configurable keys:

```
AUTH0_CLIENT_ID={CLIENT ID}
AUTH0_DOMAIN={DOMAIN}
AUTH0_CLIENT_SECRET={SECRET}
AUTH0_CALLBACK_URL={CALLBACK URL}
```