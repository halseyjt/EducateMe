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
            assignment: '5 + 1 = _',
            '1 + 13 = _',
            '19 + 1 = _',
            '7 + 1 = _',
            '1 + 10  = _',
            '18 + 1 = _',
            '1 + 7 = _',
            submitted: true
        }
    ]

const subtractionProblems = new lesson({
    date: 01/09/2020,
    lesson: [
        {
            name: 'subtract 5 down from 50',
            assignment: '23 - 5 = _',
            '5 - 5 = _',
            '34 - 5 = _',
            '49 - 5 = _',
            '50 - 5 = _',
            '8 - 5 = _',
            '6 - 5 = _',
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
            '10 x 2 = _',
            '2 x 4 = _',
            '12 x 2 =_',
            '4 x 2 = _',
            '9 x 2 = _',
            '2 x 10 = _',
            submitted: true
        }
    ]
});

const divisionProblems = new lesson ({
    date: 01/23/2020,
    lesson: [
        {
            name: 'divide by 2 up to 50',
            assignment: '32 / 2 = _',
            '20_ / 2 = _',
            '50 / 2 = _',
            '48 / 2 = _',
            '40 / 2 = _',
            '24 / 2 = _',
            '10 / 2 = _',
            '4 / 2 = _',
            submitted: true
        }
    ]
})



})

