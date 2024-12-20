
import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";


const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tags: { type: [String], default: [] },
}, { timestamps: true });

export const BlogModel = model<IBlog>("Blog", blogSchema);
