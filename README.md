# Easy Modal / Alert Box

Easy Modal Box is a modern dialog library which is highly configurable, clear, simple and easily styleable works on mobile devices, and can be customized to match your style.

Generic Javascript plugin with different modal window appearances.

## Overview

Check out the some following examples alert / modal box opening:

Technologies used: HTML5, Sass, Vanilla JS ES6.

Demo: <a href="http://ysndmr.com/easy-modal-alert-box/index.html">Watch Online</a>

### Features

Responsive, Customizable and clean code

### Include the files
```
<link href="easy-modal.min.css" rel="stylesheet">
<script src="easy-modal.min.js"></script>
```

```
npm i easy-modal-alert-box
```


Call the plugin when the body is load:

```
// Instantiate new modal

var modal = new SimplyModal({
      title: "Modal Box",
      content: "Modal Description",
      autoOpen: false,
      closeButton: true,
      type: "modal",
      className: ['fadein', 'slideRight', 'slideBottom', 'fall', 'flid3d', 'flid3dVertical', 'scale', 'folding', 'rotateLeft'],
      maxWidth: '',
      minWidth: '',
      overlay: true,
      setTimeOut: false,
      overlayClass: 'easy-modal-overlay',
      modalTypeClass: ['error', 'info', 'warn', 'succes'],
      closeText: 'X'

});
 modal.open();
}
```
| Name  | Type | Default  | Description |
| :---          |     :---:      |   :---: |  :---  |
| title  | string  | Modal Box title  | Set the your modal box title (optional). If yopu dont want title you can set '' string.  |
| content | string | Modal Box description | Set the your modal box description / spot (optional). If yopu dont want title you can set '' string. |
| autoOpen | integer | false | Set the automatic open immediately. |
| type | string | modal | Set the template type ('modal' or 'alert' box) |
| closeButton | boolean | true | You can set close button or not. If you dont want just change with false. |
| closeText | string | X | If you want you can change with any string ( Close, open, Yes or No ) |
| maxWidth  integer |'' | Set maximum width of your box. Not requried. |
| minWidth | integer | '' | Set minumum width of your box. Not requried. |
| overlay | boolean | true | For use overlay. If you dont want you can change with false. |
| setTimeout | integer | false | Set the automatic close after millisecond. |
| overlayClass | string | easy-modal-overlay | You can change with your own class. |
| modalTypeClass | array | default | For which purpose you can choose it. 'error', 'info', 'warn', 'succes'. |
| className | ['fadein', 'slideRight', 'slideBottom', 'fall', 'flid3d', 'flid3dVertical', 'scale', 'folding', 'rotateLeft'],



## Css3 Effects
'fadein', 'slideRight', 'slideBottom', 'fall', 'flid3d', 'flid3dVertical', 'scale', 'folding', 'rotateLeft'



## Author

* **Yasin Demir** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
