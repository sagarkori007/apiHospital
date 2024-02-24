const Patient = require('./../../../models/patient');
const Report = require('./../../../models/report');
const Doctor = require('./../../../models/doctor');

//list of all the records - completed
module.exports.listAllReports = async function(req, res) {
    try {
        const status = req.params.status;

        // Find all reports with the specified status
        const reports = await Report.find({ status: status }).sort({ createdAt: 1 });

        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: 'No reports found with status ' + status });
        }

        return res.status(200).json({ message: 'List of the reports with status ' + status, data: reports });
    } catch (err) {
        console.error('Error in listing the reports:', err);
        return res.status(500).json({ message: 'Error in listing the reports' });
    }
};
