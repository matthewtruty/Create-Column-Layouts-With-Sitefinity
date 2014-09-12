###Creating Dynamic Module column layouts with Sitefinity 
=========================

This JS method converts a list of dynamic module items into a grid with a specified number of columns using the Sitefinity column classes. 

###Steps:

####1. Add the Javascript to your project:
Here are 3 easy ways you can include the JS with your dynamic module widget template.
  - **CDN:** Include the CDN script tag in your page template. `<script src="http://d35e7mkljnxl9p.cloudfront.net/sitefinity/createColumnLayout.1.0.min.js"></script>` NOTE: Make sure that jQuery is included before this script tag.
  - **Existing JS File:** Copy and paste the code from the [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) into your existing JS file used in your Sitefinity project. 
  - **Embedded Resource:** Add [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) to your project and add an embedded resource link at the bottom of the widget template (widget template listed below). `<sf:JavaScriptEmbedControl runat="server" ID="CreateColumnScript" ScriptEmbedPosition="InPlace" Url="~/SomeFolderName/SomeSubFolderName/createColumnLayout.min.js"></sf:JavaScriptEmbedControl>`


####2. Create the custom module widget template:
-s
####3. Call the method:




