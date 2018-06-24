const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var noteSchema = new Schema({
	_headlineId: {
		type: Schema.Types.ObjectId,
		ref: "Headline"
	},
  	date: String,
  	noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;