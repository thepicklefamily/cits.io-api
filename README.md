# Introduction

Cits is a property management application!

## Get Started

## Install && Setup postgresql

[If a windows user, use pgAdmin 4 to create root and the db instead of the steps below]
brew install postgresql
brew services start postgresql
createuser root
createdb cits

### from cits
psql cits

### Install npm

npm install
npm run buildEnv
npm run setup:rest-server
npm run db:setup:rest-server

### from cits.io-api
npm start