const Patient = require('./../../../models/patient');
const Report = require('./../../../models/report');
const Doctor = require('./../../../models/doctor');


//register the new patient - completed
module.exports.register = async function(req,res){

    const patientName = req.body.patientName;
    const patientPhoneNumber = req.body.patientPhoneNumber;

    //check if fields are empty
    if (!patientName || !patientPhoneNumber){
        return res.status(422).json({Message:'please enter the patient details'});
    }

    try{
        //check if the patient is existing 
        const existingPatient = await Patient.findOne({name: patientName})
        
        //if patient is not existing
        if(!existingPatient){
            //create the patient 
            Patient.create({name: patientName, phoneNumber: patientPhoneNumber})
            .then((result)=>{
                console.log('patient created successfully!!', result);
                return res.status(200).json({message: 'Patient created successfully'});

            })
            .catch((err)=>{
                console.log('error in creating the patient!!', err);
                return res.status(500).json({message:'internal server error'});
            })
        } else{
            console.log('Patient already exists: ', existingPatient);
            return res.status(500).json({message: 'Patient already exists'});
        }


    } catch(e) {
        //catch the error and return it 
        console.log('Error while creating the patient!',e);
        return res.status(500).json({ message: 'Internal server error' });
    }


}

//create report for a patient - completed
module.exports.createReport = async function(req, res) {
    try {
        // console.log('Request body:', req.body);
        // console.log('Request params:', req.params);

        const patient = await Patient.findById(req.params.id);
        console.log('Patient:', patient ? patient.name : 'Patient not found');

        const doctor = await Doctor.findOne({ username: req.body.doctorName });
        console.log('Doctor:', doctor ? doctor.username : 'Doctor not found');

        if (!patient || !doctor) {
            console.log('Patient or doctor not found');
            return res.status(422).json({ message: 'Please provide the proper patient/doctor name' });
        }

        // Create the report 
        const report = await Report.create({
            doctor: doctor._id,
            patient: patient._id,
            status: req.body.status
        });

        console.log('Report created:', report);
        return res.status(200).json({ message: 'Report created' });
    } catch (error) {
        console.error('Error in creating the report:', error);
        return res.status(500).json({ message: 'Error in creating the report' });
    }
};


//list all the reports associated with particular patient - completed
module.exports.listReports = async function(req, res) {
    try {
        const patientId = req.params.id;

        // Find all reports related to the patient ID and sort them by date in ascending order
        const reports = await Report.find({ patient: patientId }).sort({ date: 1 });

        console.log('All reports sent');
        return res.status(200).json({ message: 'List of the reports', data: reports });
    } catch (err) {
        console.error('Error in listing the reports:', err);
        return res.status(500).json({ message: 'Error in listing the reports' });
    }
};
