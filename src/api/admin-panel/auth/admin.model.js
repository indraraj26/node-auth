const {model, Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AdminAuthSchema = new Schema({
    email: {type: String, trim: true,
    unique: true},
    password: {type: String}
}, {
    timestamps: true,
});

AdminAuthSchema.plugin(uniqueValidator)

const AdminAuthModel = model('adminAuth', AdminAuthSchema)

module.exports = AdminAuthModel;