RASPBERRY_PASSWORD="raspberry"
RASPBERRY_HOST="pi@192.168.1.123"

echo $(pwd)
sshpass -p $RASPBERRY_PASSWORD rsync -r $(pwd) $RASPBERRY_HOST:/home/pi
echo "---- FILES ----"
sshpass -p $RASPBERRY_PASSWORD ssh $RASPBERRY_HOST "ls /home/pi/restart-pi/"

echo "---- END ----"

sshpass -p $RASPBERRY_PASSWORD ssh $RASPBERRY_HOST "(cd /home/pi/restart-pi/ && yarn install)"
sshpass -p $RASPBERRY_PASSWORD ssh $RASPBERRY_HOST "echo raspberry | sudo -S systemctl restart restart-pi"

echo "---- DEPLOY DONE ----"
