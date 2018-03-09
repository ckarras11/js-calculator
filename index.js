let lastInput;
let decimal = false
let expression = ''
let operators = {
    add: '+',
    sub: '-',
    div: '/',
    mult: '*'
}
// Click handler for overall calculator
$($('.btn').on('click', function () {
    // Handles clearing values
    if ($(this).attr('data') === 'clr') {
        $('#result').text('');
        lastNumber = null;
        sign = null;
        decimal = false;
        expression = '';
    } 
    // Adds numbers to screen
    else if ($(this).attr('data') === 'num') {
        lastInput = 'num';
        if ($(this).attr('id') === '.') {
            if (decimal === false) {
                $('#result').append($(this).attr('id'));
                expression += '.'
                decimal = true;
            } else {
                $('#result').append($(this).attr(''));
            }
        } else {
            $('#result').append($(this).attr('id'));
            expression += $(this).attr('id')
        }
    } 
    // Handles operators
    else if ($(this).attr('data') === 'op' && lastInput !== 'op') {
        lastInput = 'op';
        expression += operators[$(this).attr('id')]
        decimal = false;
        $('#result').text('');
    } 
    // Handles equals
    else if ($(this).attr('data') === 'eq') {
        if(lastInput !== 'num') {
            console.log('Enter another num')
        }else {
            expression = eval(expression)
            $('#result').text(expression)
        }
    }
}))