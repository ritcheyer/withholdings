(function($) {

	/*
	 * Display last edited date and today's date (today's date is based on the server's location)
	 * Jan = 0, Dec = 11
	 */

	var lastEdited = new Date(2014, 1, 1, 0, 0, 0); // Feb 1, 2014
	var serverDate = new Date();

	$( '#footer [data-time="last-edited"]' ).text(  lastEdited.toDateString() );
	$( '#footer [data-time="server"]' ).text(  serverDate.toDateString() );

	$('.form-group').on('click', '[data-action="submit-query"]', function(e){
		e.preventDefault();

		// prevent additional DOM traversals by grabbing all the inputs, and
		// storing them in an array. Perform lookups based on the form arrays
		var formElements     = $('.form-group input'),
			grossIncome      = $(formElements[0]),
			payPeriods       = $(formElements[1]),
			insurance        = $(formElements[2]),
			deductions       = $(formElements[3]),
			extraWithholding = $(formElements[4]);

		var amountPerPaycheckBeforeTax    = getAmountPerPaycheckBeforeTax(grossIncome.val(), payPeriods.val());
		var taxableIncome                 = getTaxableIncome(grossIncome.val(), insurance.val(), payPeriods.val(), extraWithholding.val());
		var amountPerPaycheckAfterTax     = getAmountPerPaycheckAfterTax(taxableIncome, payPeriods.val());
		var federalWithholdingPerPaycheck = getFederalWithholdingPerPaycheck(amountPerPaycheckAfterTax);


		console.log('Amount Per Paycheck Before Tax: ' + amountPerPaycheckBeforeTax);
		console.log('Total Taxable Income: ' + taxableIncome);
		console.log('Amount Per Paycheck After Tax: ' + amountPerPaycheckAfterTax);
		console.log('Total Federal Withholding: ' + federalWithholdingPerPaycheck);


	});

	// Gross pay period amount
	function getAmountPerPaycheckBeforeTax ( income, periods ) {
		var value = income / periods;
		return value;
	}

	// Get the yearly taxable income
	function getTaxableIncome ( income, insurance, periods, withholding ) {
		var value = income - ( withholding * periods ) - ( insurance * periods );
		return value;
	}

	// Get the taxable income per pay period
	function getAmountPerPaycheckAfterTax ( income, periods ) {
		var value = income / periods;
		return value;
	}

	function getFederalWithholdingPerPaycheck ( taxableIncome ) {
		var value,
			val1 = 423.45,
			val2 = 3427.00,
			taxBracket = .25;

		value = val1 + ((taxableIncome - val2) * taxBracket);

		return value;
	}

})(jQuery);
