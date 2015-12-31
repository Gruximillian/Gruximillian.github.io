$(document).ready(function() {

    function getExpression(op1, op2, opr) {
        var expressionObject = {};
// Get operands and operator and assign them to expressionObject's properties
        expressionObject.operand1 = $(op1).val() * 1;
        expressionObject.operand2 = $(op2).val() * 1;
        expressionObject.operator = $(opr).val();

        return expressionObject;
    }

    function evaluateExpression(expression) {
        var o1 = expression.operand1,
            o2 = expression.operand2,
            op = expression.operator,
            calculator = {
                '+': 'The sum of numbers is: <span>' + (o1 + o2) + '</span>.',
                '-': 'The difference of numbers is: <span>' + (o1 - o2) + '</span>.',
                '*': 'The product of numbers is: <span>' + (o1 * o2) + '</span>.',
                '/': 'The division of numbers gives: <span>' + (o1 / o2) + '</span>.',
                '=': 'The numbers are equal: <span>' + (o1 === o2) + '</span>.',
                '<': 'Operand 1 is less than Operand 2: <span>' + (o1 < o2) + '</span>.',
                '>': 'Operand 1 is greater than Operand 2: <span>' + (o1 > o2) + '</span>.'
            }

        return calculator[op];
    }

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.evaluate').click(function() {
        $('.result p').html(evaluateExpression(getExpression('#operand1', '#operand2', '.operator')));
    });

});
