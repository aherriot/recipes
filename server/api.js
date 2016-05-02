var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var User = require('./models/user');
var Recipe = require('./models/recipe');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

mongoose.connect('mongodb://localhost/recipes');

var api = express.Router();

api.use(bodyParser.json());

var secret = '123123';

api.use(function(req, res, next) {

  var token = req.headers['authorization'];
  if(token) {
    token = token.replace('Bearer ', '');

    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        if(err.name === 'TokenExpiredError') {
          return res.status(401).json({name: err.name, message: err.message });
        } else {
          return res.status(401).json({name: err.name, message: err.message });
        }
      } else {

        User.findById(decoded.user_id, function(err, user) {
          if(err) {
            return res.status(401).json({error: err});
          }

          req.user = user;
          next();
        });
      }
    });

  } else {
    req.user = undefined;
    next();
  }
});

api.post('/login', function(req, res){

  User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.status(401).json({error: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.status(401).json({error: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign({user_id: user._id}, secret, {
          expiresIn: 86400
        });

        // return the information including token as JSON
        res.json({username: user.username, token: token});
      }
    }
  });
});

// Get details of a user
api.get('/users/:user_id', function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    res.json(user);
  });
});

api.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// Update user
api.put('/users/:user_id', function(req, res) {

});

// Create new User
api.post('/users', function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    admin: false
  });

  user.save(function(err) {
    if (err) throw err;

    var token = jwt.sign({user_id: user._id}, secret, {
      expiresIn: 86400
    });

    res.json({user: user, token: token});
  });
});

// Delete User
api.delete('/users/:user_id', function(req, res) {

});


// Get recipes list for a user
api.get('/users/:user/recipes', function(req, res) {

});

// Get details of a recipe
api.get('/recipes/:recipe_id', function(req, res) {
  Recipe.findById(req.params.recipe_id, function(err, recipe) {
    if (err) {
      if(err.name === 'CastError') {
        res.status(404).json({error: "Recipe not found"});
      } else {
        return res.status(500).send(err);
      }
    }

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({error: "Recipe not found"});
    }
  });
});

// Update a recipe
api.put('/recipes/:recipe_id', function(req, res) {
  Recipe.findById(req.params.recipe_id, function(err, recipe) {

    if (err) {
      if(err.name === 'CastError') {
        res.status(404).json({error: "Recipe not found"});
      } else {
        return res.status(500).send(err);
      }
    }

    if (recipe) {

      if(req.body.title) {
        recipe.title = req.body.title;
      }

      if(req.body.description) {
        recipe.description = req.body.description;
      }

      if(recipe.username === req.user.username || req.user.admin) {

        recipe.save(function(err) {

          if (err) {res.status(500).send(err);}

          res.json(recipe);
        });

      } else {
        res.status(401).json({error: 'Cannot delete another user\'s recipe'});
      }

    } else {
      res.status(404).json({error: "Recipe not found"});
    }
  });
});

// create a new recipe
api.post('/recipes', function(req, res) {

  if(!req.user) {
    return res.status(401).json({});
  }

  var recipe = new Recipe();

  recipe.user_id = req.user._id;
  recipe.username = req.user.username;
  recipe.title = req.body.title;
  recipe.description = req.body.description;

  recipe.save(function(err) {
      if (err)
        res.status(500).send(err);

      res.json({recipe: recipe });
  });

});

// Delete a recipe
api.delete('/recipes/:recipe_id', function(req, res) {
  Recipe.findById(req.params.recipe_id, function(err, recipe) {

    if (err) {
      if(err.name === 'CastError') {
        return res.status(404).json({error: "Recipe not found"});
      } else {
        return res.status(500).send(err);
      }
    }

    if(recipe.username === req.user.username || req.user.admin) {
      recipe.remove(function() {
        return res.json({message: 'Recipe Deleted'});
      });
    } else {
      console.log(recipe);
      console.log(req.user);
      return res.status(401).json({error: 'Cannot delete another user\'s recipe'});
    }

  });
});

// Get a list of all recipes
api.get('/recipes', function(req, res) {
  Recipe.find({}, function(err, recipes) {
    if(err) {return res.status(500).json(err)}

    res.json(recipes);
  })
});


// Get a short list of featured recipes
api.get('/recipes/suggested', function(req, res) {

});

// Search for recipes
api.get('/recipes/search', function(req, res) {

});

api.get('/getData/', function(req, res) {
  if(req.user) {
    res.json({user: req.user});
  } else {
    res.json({user: 'none!'});
  }
})

api.all('*', function(req, res) {
  res.status(404).json({error: 'path not found'});
});

module.exports = api;
