**Ex.1 | HTML**

-  CREATE A HTML STRUCTURE with a head and body tag.
    - Use online resources
-  Create a js and css file
    - index.js
    - master.css
-  Link your new files to your index file.
    - ````<link rel="stylesheet" href="master.css">````
    - ````<script src=""></script>````
-  Use this syntax to create a new element within your body tag:

    ````
    <div class="img-wrapper">
    <img class="full-width" src="https://giphy.com/clips/southpark-season-8-south-park-episode-12-x1HgtorCI6tm5Eh6sf"></div>
    ````  

-  Now lets add the matching css!
    ````
    .img-wrapper {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        }

    .full-width {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        }
    ````
- And finally some js!
    ````
    var img = document.querySelector('.img-wrapper');
    img.addEventListener('click', function() {
        img.style.width = '50%';
        img.style.height = 'auto';
    });
    ````


**Ex.2 | Semantic Tags**
