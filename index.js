import express from 'express';
import dotenv from 'dotenv';
import QuickBooks from 'node-quickbooks';
import axios from 'axios';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

app.get('/callback', async (req, res) => {
    console.log("Callback route reached");
    const authUri = `https://appcenter.intuit.com/connect/oauth2?client_id=${clientId}&scope=com.intuit.quickbooks.accounting&redirect_uri=${redirectUri}&response_type=code&state=someRandomState`;
    res.redirect(authUri);
})

app.get('/callback', async (req, res) => {
    const authCode = req.query.code;

    const tokenUrl = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try{
        const response = await axios.post(tokenUrl, {
            code: authCode,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
        }, {
            headers: {
                'Authorization' : `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
    });

    const { access_token, refresh_token } = response.data;

    res.redirect('/dashboard');
}catch (error){
    console.error('Error exchanging auth code for tokens:', error);
    res.status(500).send('Authentication failed');
}
});

app.get('/dashboard', (req, res) => {
    res.send(`Welcome to the dashboard! Here is where you'll see the QuickBooks data.`);
});

app.get('/disconnect', (req, res) => {
    res.send(`You've been disconnected from QuickBooks.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));