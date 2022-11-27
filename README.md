# myModal
A library used for creating dynamic bootstrap-modals and manage it like simple objects.

# Motivation
This library was created because I was bored and frustated to create time and time again modals.
So one day I decided to write some code to speed up time and manage it more easily and fast.

# Installation
This library was written with Javascript and JQuery,
if you don't have already imported JQuery go to this link -> [Import JQuery ](url)https://releases.jquery.com/jquery/
**(I recommend you the latest version)**

# Usage

###### Importing file
First you have to import myModal.js into your file, example:
```
<head>
  <script src="/js/library/myModal.js"></script>
</head>
```

###### Creating a Modal-Object
After that, if you want to create a basic modal you have to do this:

```
var modal = myModal();
```
###### example Image 

###### Adding settings to the Modal-Object

```
myModal({
  modal_type: 'modal-dialog-centered',
  title: 'MyModal',
  title_size: 4,
  content_body: content_body, //content html (obj html) or string
  content_footer: content_footer //content html (obj html) or string
```

###### You can also change the modal_type, example:
```
$(myModal({
    modal_type: 'modal-dialog-centered modal-lg',
    title: 'Messaggio',
    title_size: 4,
  }).modal).modal('show');
  ```
 
# Disclaimer
This is the first version of this library, so I will make some updates to improve it 
and to add more functionality.

🖤 **good bye** 🖤 
