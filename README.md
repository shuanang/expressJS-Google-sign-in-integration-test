# expressJS with Google sign-in integration test
Integrated Google sign-in in an express server, with IP whitelisting for secure site

Whitelisted IPs can be added into the const ips field in app.js, in an array form 
`const ips = ['110.231.233.12','65.123.15.12','123.232.12.54']`

After whitelisting your IP you'll be able to access the /securePath, which is /secure.html, otherwise you'll keep seeing the main page.

Google sign-in HTML code taken from https://developers.google.com/identity/sign-in/web?hl=en_US 

Run on terminal with `node app.js` with all the project files in one directory. Requires NPM and node.js.
Direct your browser to `localhost:3000` to try out the project. Alternatively, use Ngrok to tunnel the application! 

(Temporary link to try) http://152ee6f6.ngrok.io
https://152ee6f6.ngrok.io
