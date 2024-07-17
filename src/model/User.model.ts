import mongoose, { Schema, Document } from "mongoose";
import { MessageType } from "./Message.model";

export interface UserType extends Document {
    username: string;
    email: string;
    password: string;
    isverified: boolean;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: MessageType[];
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<UserType> = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'A Valid Email is required'],
            trim: true,
            unique: true,
            match: [
                /.+\@.+\..+/,
                'please use a valid email address.',
            ],
        },
        password: {
            type: String,
            required: [true, 'password is required'],
        },
        isverified: {
            type: Boolean,
            default: false,
        },
        verifyCode: {
            type: String,
            required: [true, 'Verify Code is required'],
        },
        verifyCodeExpiry: {
            type: Date,
            required: [true, 'Verify Code Expiry is required'],
        },
        isAcceptingMessage: {
            type: Boolean,
            default: true,
        },
        message: [
            {
                type: Schema.Types.ObjectId,
                ref: 'MessageModel',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const UserModel = (mongoose.models.User as mongoose.Model<UserType>) || mongoose.model<UserType>("User", UserSchema);
export default UserModel;

// mongoose.models.User is being returned
// mongoose.Model<User> is typeScript
