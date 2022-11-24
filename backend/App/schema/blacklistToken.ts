const mongoose = require("mongoose");


let blacklistSchema = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        iat: {
            type: String,
            required: true,
            length: 300,
        },
        exp: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const BlacklistTokens = mongoose.model("senshiBlacklistTokens", blacklistSchema);
export { BlacklistTokens}

