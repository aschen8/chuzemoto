# chuzemoto

Chuzemoto is an easy to use single-page web application that helps new and experienced motorcycle riders
find and/or select motorcycles to ride based on their physical fit and riding style.

How it works
User selects 1 of 3 riding styles: Street, Cruiser, and ADV
After selecting riding style, user then inputs their preferred seat height (advisable to be +- 2 inches from pants
inseam for new riders).
After clicking the submit button, the riding style and preferred seat height values are pushed to Firebase to for data storage.
These parameters will be used in an AJAX get call our custom chuzemoto API.
The chuzemoto API returns a JSON object with a selection of 3 motorcycles that fit the user's selected riding style and preferred seat height.
Each of the three motorcycles provieded will trigger on.click event will GET more information on the clicked motorcycle from a Google search.

Technologies Used
HTML, CSS, JavaScript, jQuery, AJAX, JSON, Bootstrap, Bootswatch, Firebase, Weather Underground API, Punk API
