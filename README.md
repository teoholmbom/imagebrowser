# imagebrowser
Angular directive for browsing an array of images.

### Files
Directive - imagebrowser.js
Template - imagebrowser.html

### Installation
Download and add files to project.
Load imagebrowser.js script after initializing Angular application and controller.

### Usage
Add custom element to html:
```html
<image-browser image-list="arrayOfImgUrls" 
  heading="aString" text="anotherString">            
</image-browser>
```
```javascript
var arrayOfImgUrls = [
    'img00.jpg',
    'img01.jpg',
    'img02.jpg',
    'img03.jpg',
    'img04.jpg',
    'img05.jpg'
  ],
  aString = 'Heading for album',
  anotherString = 'Description text for image album';
```

