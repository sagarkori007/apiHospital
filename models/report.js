const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor',
            required: true 
        },

        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
            required: true
        },

        status: {
            type: String,
            required: true,
            //enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
        },
        
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
