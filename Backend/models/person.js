import mongoose from "mongoose"

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	quote: String,
	passwordHash: String,
	location: String,
	coffee: Boolean,
	events: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Event'
		}
	]
})

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
		delete returnedObject.passwordHash
	}
})

export default mongoose.model("Person", personSchema);
