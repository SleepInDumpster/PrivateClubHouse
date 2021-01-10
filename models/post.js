const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        author: {type: Schema.Types.ObjectId, ref: "User", required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        timestamp: {type: Date, default: Date.now}

    }
)

module.exports = mongoose.model("Post", PostSchema);