const mongoose = require ('mongoose');

const mathSchema = new mongoose.Schema ({
    date:{
        type: String,
        default: Date.now
    },
    
    lesson:
        { 
            name: String,
            assignment: String,
            submitted: Boolean
        }

});


module.exports = mongoose.model('mathLessons', mathSchema)

