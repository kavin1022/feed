import mongoose from "mongoose"
// import { Schema } from "mongoose";

const eventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Person'
	},
	date: {
		type: Date,
		// required: true,
	},
	people: [{
		type: String
	}],
	description: {
		type: String,
		required: true,
	},
})

eventSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

export default mongoose.model("Event", eventSchema);
