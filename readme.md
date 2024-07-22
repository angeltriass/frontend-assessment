Frontend Web Developer Assessment
---
Hi! 

This is a simple website implementation as part of an assessment for a front-end web developer position.

##### Installation

1. **Clone the repository:**

git clone https://github.com/angeltriass/frontend-assessment.git

cd frontend-assessment

2. **Install Dependencies:**

npm install

3. **Usage:**

npm run dev

- check for the local and open it in your browser

ex. Local:   http://localhost:5173/

###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

'b' + 'a' = ba
(+ 'a') = when it tries to convert the next char 'a' to a number but got an error is results to NaN which is Not-a-Number
'ba' + + 'a' = baNaN
'baNaN' + 'a' = baNaNa
after applying to .toLowerCase() it's now banana.



