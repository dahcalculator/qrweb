import mongoose, { Schema } from "mongoose";

const caseSchema = new Schema(
    {title: String,
    description: String,
    },
    {   
    timestamps: true,
    }

);

const Case = mongoose.models.Case || mongoose.model("Case", caseSchema);

export default Case;