let lastNumber = null
let operators = {
    add: function(a,b) { return a + b },
    sub: function(a,b) { return a - b },
    div: function(a,b) { return a / b },
    mult: function(a,b) { return a * b }
}
let sign;
let decimal = false
// Click handler for overall calculator
$($('.btn').on('click', function () {
    // Handles clearing values
    if ($(this).attr('data') === 'clr') {
        $('#result').text('');
        lastNumber = null;
        sign = null;
        decimal = false;
    } 
    // Adds numbers to screen
    else if ($(this).attr('data') === 'num') {
        
        if ($(this).attr('id') === '.') {
            if (decimal === false) {
                $('#result').append($(this).attr('id'));
                decimal = true;
            } else {
                $('#result').append($(this).attr(''));
            }
        } else {
            $('#result').append($(this).attr('id'));
        }
    } 
    // Handles operators
    else if ($(this).attr('data') === 'op') {
       lastNumber = parseFloat($('#result').text());
        if ($(this).attr('id') === 'mult') {
            sign = 'mult';
        } else if ($(this).attr('id') === 'div') {
            sign = 'div';
        } else if ($(this).attr('id') === 'add') {
            sign = 'add';
        } else if ($(this).attr('id') === 'sub') {
            sign = 'sub';
            
        }
        decimal = false;
        $('#result').text('');
    } 
    // Handles equals
    else if ($(this).attr('data') === 'eq') {
        if (sign === null) {
            console.log('no sign')
        } 
        else if (lastNumber === null) {
            console.log('no last number')
        }
        else if ($('#result').text().length === 0) {
            console.log('no second input')
        }
        else {
            $('#result').text(operators[sign](lastNumber, parseFloat($('#result').text())));
        }
        
    }
}))