<%@ Control Language="C#" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.PublicControls.BrowseAndEdit" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.ContentUI" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.Comments" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.Fields" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.PublicControls"
    Assembly="Telerik.Sitefinity" %>
  <%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI" Assembly="Telerik.Sitefinity" %>
<%@ Register Assembly="Telerik.Sitefinity" Namespace="Telerik.Sitefinity.Modules.Comments.Web.UI.Frontend" TagPrefix="sf" %>
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<%@ Import Namespace="Telerik.Sitefinity.Web.UI" %>
<%@ Import Namespace="Telerik.Sitefinity.Modules.Comments" %>
<%@ Import Namespace="Telerik.Sitefinity.Libraries.Model" %>
   <sf:ResourceLinks id="resourcesLinks3" runat="server">
        <sf:ResourceFile JavaScriptLibrary="JQuery" />
</sf:ResourceLinks>
<sf:SitefinityLabel id="title" runat="server" WrapperTagName="div" HideIfNoText="true" HideIfNoTextMode="Server" CssClass="sfitemFieldLbl" />
<telerik:RadListView ID="dynamicContentListView" ItemPlaceholderID="ItemsContainer" runat="server" EnableEmbeddedSkins="false" EnableEmbeddedBaseStylesheet="false">
    <LayoutTemplate>
     <div class="custom-module-grid">
           <asp:PlaceHolder ID="ItemsContainer" runat="server" />
       </div>
    </LayoutTemplate>
    <ItemTemplate>
    <div class="grid-item">
      <div>
      
      <!-- Include your dynamic module fields here. The template shows the default widget date.  -->
          <h2 class="sfitemTitle sftitle">
      		<sf:DetailsViewHyperLink ID="DetailsViewHyperLink" TextDataField="Title" runat="server" data-sf-field="Title" data-sf-ftype="ShortText" />
          </h2>
            <sf:FieldListView ID="PublicationDate" runat="server" Format="{PublicationDate.ToLocal():MMM d, yyyy, HH:mm tt}" WrapperTagName="div" WrapperTagCssClass="sfitemPublicationDate" />
              <sf:CommentsCountControl runat="server" ID="commentsCounterControl" CssClass="sfCommentsCounter" ThreadType='<%# Container.DataItem.GetType().FullName%>' ThreadKey='<%# ControlUtilities.GetLocalizedKey(Eval("Id"), null, CommentsBehaviorUtilities.GetLocalizedKeySuffix(Container.DataItem.GetType().FullName)) %>' DisplayMode="ShortText" />
             <sf:CommentsAverageRatingControl runat="server" ThreadType='<%# Container.DataItem.GetType().FullName%>' ThreadKey='<%# ControlUtilities.GetLocalizedKey(Eval("Id"), null, CommentsBehaviorUtilities.GetLocalizedKeySuffix(Container.DataItem.GetType().FullName)) %>' DisplayMode="MediumText" />
      
      <!-- Include your dynamic module fields here. The template shows the default widget date.  -->
      
        </div>
      </div>
    </ItemTemplate>
</telerik:RadListView>
<sf:Pager id="pager" runat="server"></sf:Pager>
<asp:PlaceHolder ID="socialOptionsContainer" runat="server"></asp:PlaceHolder>
<!-- 
Optional way to include the JS with the control. 
<sf:JavaScriptEmbedControl runat="server" ID="GridScripts" ScriptEmbedPosition="InPlace" Url="~/SomeFolder/SomeSubFolder/createColumnLayout.min.js"></sf:JavaScriptEmbedControl>
-->