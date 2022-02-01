import { Schema, model } from "mongoose";
import { IUser } from "../types/type";

const schema = new Schema <IUser>({
    name_prefix: {
        type: String
    },
    first_name: {
        type: String,
        required: [true, 'Please enter your first name'],
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name'],
    },
    username: {
        type: String,
        required: [true, 'Please choose a username'],
        unique: true
    },
    
}, {
    timestamps: true
}
)

const User = model<IUser>('User', schema);

export default User