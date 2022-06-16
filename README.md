# JWT AUTH STARTER

### For initialize db:
1. create .env file on root directory and fill it with the following variables:
```bash
DATABASE_URL="postgresql://<user>:<password>@<host>:5432/<db>"
JWT_SECRET="B2E38F44187B4541A55DEEABA9AEA"
JWT_EXPIRATION_TIME="2h"
```
2. fill db with sample data:
```bash
npm run db:init
```
3. run server:
```bash
npm run start:dev
```

# API Endpoints
`POST` /auth/register

Request:
```json
{
    "username": "newUser",
    "password": "pass1234"
}
```
Response:
```json
{
  "username": "newUser",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsInVzZXJuYW1lIjoibmVvd2lzZTIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY1NTQxNjI5NSwiZXhwIjoxNjU1NDE5ODk1fQ.PM1TEo-OtRoONDJddb4E9m4Bim_mJjVHKyWOFTGVODM"
}
```

-----------------

`POST` /auth/login
```json
{
    "username": "newUser",
    "password": "pass1234"
}
```
Response:
```json
{
  "username": "newUser",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsInVzZXJuYW1lIjoibmVvd2lzZTIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY1NTQxNjI5NSwiZXhwIjoxNjU1NDE5ODk1fQ.PM1TEo-OtRoONDJddb4E9m4Bim_mJjVHKyWOFTGVODM"
}
```
