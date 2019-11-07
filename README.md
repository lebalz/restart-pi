# Restart Pi

An easy deployable node server for easily restarting [raspotify]() service on a raspberry pi.
It is expected that a service named `raspotify` is registered on the raspberry pi.

![Restart-PI](./public/assets/images/preview.png)

## Install

Copy the deploy script and change the variables `RASPBERRY_PASSWORD` and `RASPBERRY_HOST` as needed for your setup.

On the raspberry pi, install node and yarn:

```sh
sudo su
apt-get update
apt-get -y install curl
apt-get install -my gnupg
curl -sL https://deb.nodesource.com/setup_10.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get update && apt-get -qqyy install nodejs yarn && rm -rf /var/lib/apt/lists/*
```
Create a new service `/etc/systemd/system/restart-pi.service` on the pi and copy over 
the content of the file `restart-pi.service`. Then enable the service with `sudo systemctl enable restart-pi.service` and start it with `sudo systemctl start restart-pi.service`

## Deploy the app

The app is deployed on port `3001`. Deploy the app with

```sh
./deploy.sh
```
