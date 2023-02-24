import mongoose from "mongoose";
const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide positin"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "decline", "pending"],
      maxlength: 100,
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      maxlength: 100,
      default: "full-time",
    },
    jobLocation: {
      type: String,

      required: true,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Job", JobSchema);
