import mongoose from "mongoose";

const metaSchema = new mongoose.Schema({
    id: String,
    name: String,
    target_value: Number,
    current_quantity: Number,
    id_institution: String,
    descricao: String,
    day_limit: Date,
    suspend: Boolean
}, {
    timestamps: true
})

const MetaModel = mongoose.model('Meta', metaSchema);

export default MetaModel;