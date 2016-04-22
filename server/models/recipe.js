var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Recipe', new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: {type: String, required: true},
  },{
    timestamps: true
  })
);
