const express = require('express');
const login = require('./model');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


//api for login
app.post("/login", (req, res) => {
    const { oemail, opass } = req.body;
    foodModel.findOne({ oemail: oemail })
        .then(user => {
            if (user) {
                if (user.opass === opass) {
                    res.json("success")
                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("no data existed")
            }
        })
        .catch(err => console.log(err));
})



// Other routes
app.get('/', (req, res) => {
    res.send("Message from server");
});


app.get('/trial', (req, res) => {
    res.send("trial server");
});


app.post('/trouble', (req, res) => {
    res.send("troubleshooter");
});


// Add this route to your Express server


app.post('/verify', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login.findOne({ email, password });
        if (user) {
            res.json({ message: 'User exists in the database.' });
        } else {
            res.json({ message: 'User does not exist in the database.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error verifying user.' });
    }
});




// Port
app.listen(8080, () => {
    console.log('port is running at 8080');
});
