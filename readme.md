Frontend Technical Assessment
---
## Project Overview
This project is a responsive web application that displays content in tabs on desktop and an accordion on mobile. It's built using HTML, CSS (Tailwind), and vanilla JavaScript, with Vite as the build tool.

#### Features
- Responsive design: tabs on desktop, accordion on mobile
- Dynamic content loading from a JSON file
- Smooth animations for accordion
- Custom styling using Tailwind CSS

#### Prerequisites
- Node.js (version 14 or later recommended)
- npm (usually comes with Node.js)

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

- 'b' + 'a' = ba
- (+ 'a') = when it tries to convert the next char 'a' to a number but got an error is results to NaN which is Not-a-Number
- 'ba' + + 'a' = baNaN
- 'baNaN' + 'a' = baNaNa
- after applying to .toLowerCase() it's now banana.



