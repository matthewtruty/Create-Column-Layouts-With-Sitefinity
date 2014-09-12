###Creating Dynamic Module column layouts with Sitefinity 
=========================

This JS method converts a list of dynamic module items into a grid with a specified number of columns (2 to 5) using the Sitefinity column classes. There are two sets of instructions below. The Short Version has just enough information for an experienced Sitefinity developer to use when apply this method to a dynamic module list. The [Detailed Version]() provides in depth, step-by-step instructions on how to apply this method to a dynamic module list. in both versions, it is assumed that you have created a dynamic module and have added several items to the module. 

###Short Version:
1. Include [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) in your project
2. Create a widget template for your dynamic module and paste in the code from the [grid widget template](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/gridWidgetTemplate.ascx)
3. Call the method: `createColumnLayout("custom-module-grid", "grid-item", 2);` NOTE: `createColumnLayout(containerClass,itemsClassSelector,numberOfColumns)`


###Detailed Version:

####1. Include the Javascript in your project:
Here are 3 easy ways you can include the JS in your Sitefinity project.
  - **CDN:** Include this CDN script in your page template. `<script src="http://d35e7mkljnxl9p.cloudfront.net/sitefinity/createColumnLayout.1.0.min.js"></script>` NOTE: Make sure that jQuery is included before this script tag.
  - **Existing JS File:** Copy and paste the code from the [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) into your existing JS file used in your Sitefinity project. 
  - **Embedded Resource:** Add [createColumnLayout.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.js) or [createColumnLayout.min.js](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/createColumnLayout.min.js) to your project and add an embedded resource link at the bottom of the widget template (widget template listed below). `<sf:JavaScriptEmbedControl runat="server" ID="CreateColumnScript" ScriptEmbedPosition="InPlace" Url="~/SomeFolderName/SomeSubFolderName/createColumnLayout.min.js"></sf:JavaScriptEmbedControl>`


####2. Create and apply the custom module widget template:
- [Create a new widget template](http://www.sitefinity.com/documentation/documentationarticles/designer-s-guide/widget-templates/using-the-widget-templates-editor/creating-and-editing-widget-templates)
  1. Go to Sitefinity’s backend (http://<yoursite>/sitefinity)
  2. In the main menu, click Design » Widget Templates.
  3. Click Create a template.
  4. In the This template is applied to... dropdown box, select the widget for which you want to create a template
  5. For example if you want to create new template for a dynamic module called Car Listing, select Car Listing - Car listing - list. NOTE: Be sure to select the **list** template and not the **single** template. 
  6. In the text area, paste in the code from the [grid widget template](https://github.com/matthewtruty0093/Create-Column-Layouts-With-Sitefinity/blob/master/gridWidgetTemplate.ascx).
  7. To insert a dynamic module property field in the template, click the desired field in the right menu.
  8. A window displaying the syntax of the field appears. NOTE: All custom fields you have created for the content type you have chosen in This template is applied to..., appear under Other data node.
  9. To add the sample code, in the text area, click Insert.
  10. When you have entered the code, in Template name field, enter name of your template.
  11. To save your work, click Create this template.  
  12. Navigate to the page where your dynamic module list is displayed
  13. After you have dragged the widget on your page, the widget automatically displays all published dynamic items.
  14. To configure the display of the items, click Edit button in the upper-right corner of the widget.
  15. The Edit window appears
  16. Select the [List Settings tab](http://www.sitefinity.com/documentation/documentationarticles/list-settings-tab)
  17. In List template, select the template you created in the previous steps.
  18. Click save
  19. The Edit window closes
  20. Publish the page  

**To learn more about configuring dynamic module widgets, [click here](http://www.sitefinity.com/documentation/documentationarticles/user-guide/widgets/content-widgets-group/configuring-custom-module-widgets)
  
####3. Call the method:
`createColumnLayout("custom-module-grid", "grid-item", 2);`  
NOTE: `createColumnLayout(containerClass,itemsClassSelector,numberOfColumns)`

####4. Important notes:





