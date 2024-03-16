import mongoose from "mongoose";

export const Item = mongoose.model("Item", { name: String });
