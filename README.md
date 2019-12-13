# Day Planner

[Link to deployed project](https://kaciehatley.github.io/day-planner)

## About the Project
This day planner was created with the intention of helping the user with time-management and organization skills. This day planner creates a textarea for each hour of the standard workday. Users can edit and save text within each text box. The project utilizes HTML, CSS, JavaScript and third-party APIs such as jQuery. This is the fifth project built as a part of the UNCC Coding Bootcamp.

## Styling
With jQuery, this web application uses a loop to create a row and three columns for each hour of the work day.
The header uses a sans serif font with the "Wite Wall 3" background from toptal.com.
Three colors are used as a background-color for the description box (middle colum) of each row. 
* Rows in the past -  #d3d3d3;
* Rows in the present - #ff6961;
* Rows in the future - #77dd77;

## How to Use

The user should click on the text box you wish to edit. After entering text, the save button corresponding with the text box must be clicked.

<img width="1218" alt="Screen Shot 2019-11-18 at 9 41 48 AM" src="https://user-images.githubusercontent.com/55072295/69061839-f3c39d00-09e7-11ea-8007-e0db98bee645.png">

By clicking "save", the entered value is saved in local storage with the corresponding data-index.

<img width="408" alt="Screen Shot 2019-11-18 at 9 42 25 AM" src="https://user-images.githubusercontent.com/55072295/69061763-cc6cd000-09e7-11ea-87be-872728aaf964.png">

All values and local storage can be deleted by clicking the "Clear Schedule" button at the bottom of the page.
<img width="203" alt="Screen Shot 2019-11-18 at 9 44 48 AM" src="https://user-images.githubusercontent.com/55072295/69061929-1a81d380-09e8-11ea-96f5-2cebf99c3306.png">

## Credits 

* JQuery: https://code.jquery.com/jquery-3.4.1.min.js
* Bootstrap: https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
* Font Awesome: https://use.fontawesome.com/releases/v5.8.1/css/all.css
* Google Fonts: https://fonts.googleapis.com/css?family=Open+Sans&display=swap
* Toptal Subtle Backgrounds: https://www.toptal.com/designers/subtlepatterns/white-wall-3-2/

## License

The MIT License (MIT)

Copyright (c) 2019 Kacie Hatley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
