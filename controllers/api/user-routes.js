const router = require("express").Router()
const { User, Recipes } = require("../../models")

// This is for sign up profiles
router.post("/", async (req, res) => {
    // User.create goes here
   User.create({
       username: req.body.username,
       email: req.body.email,
       password: req.body.password,

   })
   .then(newUser => {
       req.session.save(()=>{
           req.session.user_id = newUser.id;
           req.session.password = newUser.password;
           req.session.loggedIn = true;

           res.json(newUser)
       })
   })
      .catch((err)=>{
          console.log(err);
          res.status(500).json(err)
      })
    })
// GET all route
router.get("/", (req,res)=>{
    User.findAll({
        attributes:{exclude:["password"]}, 
})
.then((userData)=> res.json(userData))
.catch((err) =>{
    console.log(err)
    res.status(500).json(err)
})
})

// Get user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ["password"]},
        where: {
            id: req.params.id
        }
    })
    .then((userData) =>{
        if(!userData){
            res.status(404).json({message:"Not valid user"})
            return;
        }
        res.json(userData)
    })
    .catch((err)=> {
        console.log(err)
        res.status(500).json(err)
    })
    
    
  });

// This is for login use
router.post("/login", async (req, res) => {
    // User.findONE goes here
    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
    })
    .catch((err) =>{
        console.log (err)
        req.status(500).json(err)
    })
});
})

// This is for loggin out profiles
router.post("/logout", async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})
module.exports = router;