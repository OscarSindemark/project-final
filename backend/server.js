import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";

const mongoUrl =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    Message: "This is the API for Oscar and Giorgio's Final Project",
    Routes: [
      {
        "/thoughts": "To GET and POST game thoughts",
        "/register": "to POST a new user",
        "/login": "to POST and login a current user",
        "/user": "To POST a changed username/password for current user",
      },
    ],
  });
});

// Add Schemas
///// User Schema
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

const User = mongoose.model("User", UserSchema);

//////////AUTHENTICATION/////////////
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        success: false,
        response: "Please log in",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      response: e,
    });
  }
};

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    const newUser = await new User({
      username: username,
      password: bcrypt.hashSync(password, salt),
    }).save();
    res.status(201).json({
      success: true,
      response: {
        username: newUser.username,
        id: newUser._id,
        accessToken: newUser.accessToken,
      },
    });
  } catch (e) {
    res.status(401).json({
      success: false,
      response: e,
    });
  }
});

//
// user
/*app.post("/user", async (req, res) => {
  const {
    accessToken, /* always required
   username /* possibly new, //need username OR password
   password /* possibly new ,
  } = req.body;

  try {
    const user = await User.findOne({ accessToken });
    let newUser;
    if (username) {
      newUser = await User.findOneAndUpdate(
        // findOneAndUpdate only works on primary keys, so we sent in _id instead of accessToken
        { _id: user._id },
        { $set: { username: username } },
        { new: true }
      );
    } else if (password) {
      newUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $set: { password: password } },
        { new: true }
      );
    }

    if (!newUser) {
      res.status(500).json({
        success: false,
        response: "no user returned",
      });
      return;
    }

    res.status(200).json({
      success: true,
      response: {
        username: newUser.username,
        id: newUser._id,
        accessToken: newUser.accessToken,
      },
    });
  } catch (e) {
    console.log("error is:", e);
    res.status(500).json({
      success: false,
      response: e,
    });
  }
}); 
*/

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials do not match",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      response: e,
    });
  }
});

//// Thought

const ThoughtSchema = new Schema({
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  hearts: {
    type: Number,
    default: 0,
  },
  user: {
    type: String,
    require: true,
  },
});

const Thought = mongoose.model("Thought", ThoughtSchema);

// Authenticate the User

// favorites table: index key on item and ID
// user table, new table keyed on username and what item is favorited, can pull
// Start defining your routes here

app.get("/thoughts", authenticateUser);
app.get("/thoughts", async (req, res) => {
  const accessToken = req.header("Authorization");
  const user = await User.findOne({ accessToken: accessToken });

  const thoughts = await Thought.find({ user: user._id }).populate("user");
  res.status(200).json({ success: true, response: thoughts });
});

app.post("/thoughts", authenticateUser);
app.post("/thoughts", async (req, res) => {
  const { message } = req.body;

  const accessToken = req.header("Authorization");
  const user = await User.findOne({ accessToken: accessToken });

  const thoughts = await new Thought({
    message: message,
    user: user._id,
  }).save();
  res.status(200).json({ success: true, response: thoughts });
});

// gameThought

/*{const GameThoughts = new mongoose.Schema({
  message:{
    type: String, 
    required: true,
    minLength: 5, 
    maxLength: 140,
      // Deletes whitespace from beginning and end of a string (but no spaces between words)
    trim: true, 
  },
  hearts: {
    type: Number,
    default:0,
  },
  creadedAt: {
    type: Date, 
    default: () => new Date()
  },
})

const thoughtList = mongoose.model("thoughtList", GameThoughts)} */

// All happy thoughts MAX 20
/*{app.get("/thoughts", async (req, res) => {

  try {
    const thoughts = await thoughtList.find().sort({createdAt: 'desc'}).limit(20).exec()
    res.status(200).json(thoughts)

  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }

})

// Post a happy thought
app.post("/thoughts", async(req, res) => {
  const { message } = req.body

  try {
    const newThought = await new thoughtList({ message }).save()
    res.status(201).json({
      response: newThought,
      success: true,
    })
  } catch(err) {
    res.status(400).json({
      message: "Not able to post your thought",
      success: false, 
      error: err.errors
    })
  }

})

app.post("/thoughts/:id/like", async (req, res) => {
  const { id } = req.params

   try{
    const updateLikes = await thoughtList.findByIdAndUpdate(id, { $inc: { hearts: 1 } })
    res.status(201).json({
      response: updateLikes, 
      success: true
    })
   } catch(err) {
    res.status(400).json({
      message: "Couldn't find no post with that ID",
      success: false, 
      error: err.errors
    })
   }
})} */

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
