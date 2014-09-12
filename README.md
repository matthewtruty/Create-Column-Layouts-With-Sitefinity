###Creating Dynamic Module column layouts with Sitefinity 
=========================

This JS method converts a list of dynamic module items into a grid with a specified number of columns using the Sitefinity column classes. There are two sets of instructions below. The Short Version has just enough information for an experienced Sitefinity developer to use when apply this method to a dynamic module list. The [Detailed Version]() goes provides in depth, step-by-step instructions on how to apply this method to a dynamic module list.

###Short Version:
1. Include [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) in your project
2. Create a widget template for your dynamic module and paste in the code from [file name]()
3. Call the method: `createColumnLayout("custom-module-grid", "grid-item", 2);` NOTE: `createColumnLayout(containerClass,itemsClassSelector,numberOfColumns)`


###Detailed Version:

####1. Add the Javascript to your project:
Here are 3 easy ways you can include the JS with your dynamic module widget template.
  - **CDN:** Include the CDN script tag in your page template. `<script src="http://d35e7mkljnxl9p.cloudfront.net/sitefinity/createColumnLayout.1.0.min.js"></script>` NOTE: Make sure that jQuery is included before this script tag.
  - **Existing JS File:** Copy and paste the code from the [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) into your existing JS file used in your Sitefinity project. 
  - **Embedded Resource:** Add [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) to your project and add an embedded resource link at the bottom of the widget template (widget template listed below). `<sf:JavaScriptEmbedControl runat="server" ID="CreateColumnScript" ScriptEmbedPosition="InPlace" Url="~/SomeFolderName/SomeSubFolderName/createColumnLayout.min.js"></sf:JavaScriptEmbedControl>`


####2. Create the custom module widget template:
- Create a new widget template
  1. Go to Sitefinity’s backend (http://<yoursite>/sitefinity)
  2. In the main menu, click Design » Widget Templates.
  3. Click Create a template.
  4. In the This template is applied to... dropdown box, select the widget for which you want to create a template
  5. For example if you want to create new template for the single post item view of the blogs, select Blogs posts single.
  6. In the text area, write your code for the template.
  7. To insert a property field of the widget, in the template, click the desired field in the right menu.
  8. A window displaying the syntax of the field appears. NOTE: All custom fields you have created for the content type you have chosen in This template is applied to..., appear under Other data node.
  9. To add the sample code, in the text area, click Insert.
  10. When you have entered the code, in Template name field, enter name of your template.
        
####3. Call the method:




