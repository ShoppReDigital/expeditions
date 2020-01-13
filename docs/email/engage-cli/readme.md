# Engage CLI


## Setting up in your server
```sh
git clone git://github.com/shoppre/engage.git


# Install modules
npm i

# write setting
cp .env.sample .env

# Setup Database using
npm run migrate

# Setup default values in Database Tables - user@example.com added to users table
npm run seed

# Make it running
pm2 start server/app.js --name example-engage

# Verify using
pm2 ls

# check logs using
pm2 logs

# CTRL + C to exit from logs 
```

## Setup Public Access with NGINX

```shell script
# Create Cloudflare DNS Entry engage.example.com -> 1.2.3.4

# create nginx settings

# check nginx settings
sudo nginx -test 

# restart nginx 
sudo systemctl restart nginx

# check status of nginx 
sudo systemctl status nginx

# Install ssl
sudo certbot --nginx

# Vefify api 
curl https://engage.example.com/api/health

``` 

## Configuring with AWS

for complete verification, we need to setup public url before `npm run provision` because it will share `https://engage.example.com/api/emails` for SNS Subscriptions

```sh

# edit the sample template in server/emails/users

# Configure AWS SES for for monitoring using
npm run provision

# Create template in AWS SES using 
npm run email-build

# send a test email using
npm run email-update-send

# Verify overall install is working fine
npm run verify

```

## Setup a Daily job to check status of infrasturture

```shell script
# check dns status
# check dkim status
# check bounce simulation
```