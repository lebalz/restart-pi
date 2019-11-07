const express = require("express");
const app = express();
const { exec, execSync } = require('child_process');
require('dotenv').config();

app.use(express.static('public'));

app.post("/restart_raspotify", function (req, res) {
    console.log("restart Raspotify");
    execSync('sudo systemctl restart raspotify');
    var status = execSync('sudo systemctl status raspotify');
    console.log(status.toString());
    res.redirect("/");
})

app.post("/restart", function (req, res) {
    execSync('sudo rm -rf /home/pi/restart-pi/log.log');
    console.log("Restart that shit");
    exec('sudo reboot now', () => { console.log('Reboot Raspberry Pi') });
    res.redirect("/");
})

app.get("/syslog", function (req, res) {
    res.sendFile('/home/pi/restart-pi/log.log');
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(3001);
