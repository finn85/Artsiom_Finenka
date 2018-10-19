export const allErrMsgs: {[key: string]: {[key: string]: string}} = {
  name: {
    required: 'Name is required',
    incorrectSymbols: 'Please, enter english letters only',
  },
  age: {
    required: 'Age is required',
    incorrectSymbols: 'Please, enter numbers only',
    lessThan18: 'Your age is less than 18',
    moreThan65: 'Your age is more than 65'
  },
  dateOfBirth: {
    required: 'Birthday is required',
    incorrectSymbols: 'Please, enter numbers and "/" only',
    incorrectFormat: 'Incorrect. Correct format is "YYYY/MM/DD"',
    incorrectYearFormat: 'Incorrect. Correct year format is "YYYY"',
    incorrectYear: 'Incorrect. Please enter year from 1950 till current',
    incorrectMonth: 'Incorrect. Please check month (example - 01, 02 ... 12)'
  },
  dateOfLogin: {
    required:'Date of login is required',
    incorrectSymbols: 'Please, enter numbers, english letters and spaces only',
    incorrectFormat: 'Incorrect. Correct format is "DD MMMM YYYY"',
    incorrectYearFormat: 'Incorrect. Correct year format is "YYYY"',
    incorrectYear: 'Incorrect. Please enter year from 1950 till 2050',
    incorrectMonth:'Incorrect. Please check month (example - january)'
  },
  dateOfNotif: {
    required: 'Date of notification is required',
    incorrectSymbols: 'Please, enter numbers, english letters and "-" only',
    incorrectFormat: 'Incorrect. Correct format is "DD-MMM-YY"',
    incorrectYearFormat: 'Incorrect. Correct year format is "YY"',
    incorrectYear: 'Incorrect. Please enter year from current till 50',
    incorrectMonth:'Incorrect. Please check month (example - jan)'
  }
};


//todo CONTENT ERRORS
//todo month should be from 1 till 12
//todo day should be from 1 till 31
//todo year should be from 2000 till 2100
//todo date birth should be from 18 till 65 years ago
//todo date of login should be current date
//todo date of notification should be future date
