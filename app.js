const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const ips = ['42.60.138.54','111.65.44.54'] //add whitelisted IPs here
function getClientIp(req) {
  var ipAddress;
  // The request may be forwarded from local web server.
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // If request was not forwarded
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  console.log(getClientIp(req));
});
router.get("/securePath", function(req, res){
  console.log(getClientIp(req));
  if(ips.indexOf(getClientIp(req)) != -1) //if secure
  res.sendFile(path.join(__dirname+'/secure.html'));
else //if IP not in whitelist
    res.sendFile(path.join(__dirname+'/index.html'));
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
