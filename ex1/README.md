**Ex.1 | HTML**

-  CREATE A HTML STRUCTURE with a head and body tag.
    - Use online resources
-  Create a js and css file
    - index.js
    - master.css
-  Link your new files to your index file.
    - ````<link rel="stylesheet" href="master.css">````
    - ````<script src=""></script>````
-  Use this syntax to create a new element within your body tag

    ````
        <div class="img-wrapper">
        <h1 id="header">hhd</h1>
        <div class="full-screen">
            <iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/x1HgtorCI6tm5Eh6sf/video" width="480"></iframe>
        </div>
    </div>
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
    let header = document.getElementById('header');
    header.innerHTML = 'Congrats! You have successfully created your webpage!';
    ````
