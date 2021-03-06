"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    quizId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Quiz'
    },
    questionNumber: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true,
        trim: true
    },
    option1: {
        type: String,
        required: true,
        trim: true
    },
    option2: {
        type: String,
        required: true,
        trim: true
    },
    option3: {
        type: String,
        required: true,
        trim: true
    },
    option4: {
        type: String,
        required: true,
        trim: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
questionSchema.methods.toJSON = function () {
    const question = this;
    const questionObj = question.toObject();
    delete questionObj._id;
    delete questionObj.quizId;
    return questionObj;
};
const Question = mongoose_1.model('Question', questionSchema);
exports.default = Question;
//# sourceMappingURL=question.model.js.map