const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3396',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=cits',
    'LOCAL_PASSWORD=',
    'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET_KEY=citsapi',
  ],
  'socket-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=http://localhost',
    'PORT=4155',
    'REST_SERVER_URL=http://localhost:3396'
  ],
  'smtp-server': [
    'PORT=8080',
    'PASS=fakeaccount',
    'EMAIL=castleintheskyhr@gmail.com'
  ]
};

module.exports = envBuild;