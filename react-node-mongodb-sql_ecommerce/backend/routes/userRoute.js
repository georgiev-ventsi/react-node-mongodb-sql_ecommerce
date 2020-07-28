import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/signin', async (req, res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })

    } else {
        res.status(401).send({ msg: 'Невалиден email или парола!' })
    }
})

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Hives',
            email: 'v.g.al.hq@gmail.com',
            password: '8877yy66',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({ msg: error.message });
    }
});

export default router;


// 3:46:20