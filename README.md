Withholdings
============
Having recently changed jobs, one of the things I needed to understand was how much my take-home was going to be per-paycheck. Try as I might, I couldn't find a single reliable calculator that displayed the information I was after. Not only that, but each one gave me a different answer! Truth be told, the federal (and state's) calculations for this are extremely confusing and based on several layers of conditional statements (if you're married, if you're withholding extra, if you have kids, etc).

What started out as a bit of a necessity between my wife and I has become a bit of a fun project for me.

1. I needed something that would reliably provide me with a reliable number for the withholding.
2. I want to understand where and how the government decides to withhold my earnings.
3. I thought maybe this sort of thing might be helpful to anyone else out there in internet-land.
4. I wanted to try some new things in Javascript.

## Calculations Based on
* [Federal tax withholdings](http://www.irs.gov/pub/irs-pdf/p15.pdf) (Info starts at page 43)
* [Social and Medicare](http://www.irs.gov/publications/p15/ar02.html#en_US_2014_publink1000202402)  (Listed in #9)
* [California tax](http://www.edd.ca.gov/pdf_pub_ctr/14methb.pdf)

### Calculations Based on the Following Data
* Salary
* Withholding rate
* Number of Deductions

## Current Assumptions
Since this was primarily generated as a tool for my family, I'm starting with what we used on my W4 and building from that. Therefore, there are a few assumptions that need to be understood:
* You live in California.
* You are a salaried employee (currently doesn't account for hourly or wage earners) and you know your annual gross income.
* You are married but withhold at higher single rate (options are: single, married, married but higher single rate)
* You are not filing as head of household (options are: filing as, not filing as)
* You have 3 deductions (you, your wife, your 1 child)
* You do not pay for child/dependent care expenses (options: you do, or you don't)
* You do not qualify for a child tax credit (options: you do, or you don't)

## Improvements
* Make available to hourly/wage earners
* Make available to people living outside California

## To Do List
* [ ] Compose pseudo-coded formulas
* [ ] Actually code the formulas
* [ ] Allow for additional pre-tax withholdings
* [ ] Pre-tax Insurance Expenses (Medical, Dental, Vision, Life, AD&D, Disability)
* [ ] Pre-tax 401k Contributions
* [ ] Allow for post-tax withholdings (what are some?)
* [ ] Figure out if the order of withholdings matter
* [ ] Calculate net income by pay period (weekly, monthly, bi-monthly)

## Disclaimer
*I do not by any means claim to be a financial advisor, nor do I make any claims as to the accuracy of the estimate provided. You are using this calculator at your own risk.*

## Tools Currently being used
See [humans.txt](humans.txt)

## Last updated
February 1, 2014
