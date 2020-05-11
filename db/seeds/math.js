const mongoose = require ('mongoose');

const mathSchema = new mongoose.schema ({
    date: String,
    lesson: [
        { 
            name: String,
            assignment: [String],
            submitted: bolean
        }
            
    ]

});

const mathLesson = mongoose.model("mathLesson", mathSchema);

const additionProblems = new lesson ({
    date: 01/08/2020,
    lesson: [
        {
            name: 'Add 1 up to 20',
            assignment: '5 + _ = 6',
            '1 + 13 = _',
            '_ + 1 = 20',
            '7 + 1 = _',
            '1 + _ = 11',
            '18 + 1 = _',
            '1 + _ = 3',
            submitted: true
        }
    ]

const subtractionProblems = new lesson({
    date: 01/09/2020,
    lesson: [
        {
            name: 'subtract 5 down from 50',
            assignment: '23 - 5 = _',
            '_ - 5 = 0',
            '34 - _ = 29',
            '49 - 5 = _',
            '_ - 5 = 45',
            '8 - 5 = _',
            '_ - 5 = 1',
            '10 - 5 = _', 
            submitted: true
        }
    ]

});

const multiplicationProblems = new lesson ({
    date: 01/18/2020,
    lesson: [
        {
            name:'multiply by 2 up to 50',
            assignment: '1 x 2 = _',
            '10 x _ = 20',

        }
    ]
})



})

