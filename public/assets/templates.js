(function(){window.JST=window.JST||{};window.JST.annotation=_.template('<div class="DV-annotation <%= orderClass %> DV-<%= access %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>">  <div class="DV-annotationTab">    <div class="DV-annotationClose DV-trigger">      <% if (DV.options.zoom != \'auto\') { %>        Close      <% } %>    </div>  </div>  <div class="DV-annotationRegion" style="margin-left:<%= excerptMarginLeft %>px; height:<%= excerptHeight %>px; width:<%= excerptWidth %>px;"></div>  <div class="DV-annotationContent">    <div class="DV-annotationHeader clearfix">      <div class="DV-pagination DV-editHidden">        <span class="DV-trigger DV-annotationPrevious" title="Previous Annotation">Previous</span>        <span class="DV-trigger DV-annotationNext" title="Next Annotation">Next</span>      </div>      <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger">Go to Page <%= pageNumber %></div></div>      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="Annotation Title" value="<%= title %>" />      <% if (access == \'private\') { %>        <div class="DV-privateLock DV-editHidden" title="Private note"></div>      <% } %>      <div class="DV-showEdit DV-editHidden <%= access == \'public\' ? \'DV-ownerVisible\' : \'DV-contributorVisible\' %>"></div>    </div>    <div class="DV-annotationExcerpt" style="height:<%= excerptHeight %>px;">      <div class="DV-annotationExcerptImageTop" style="height:<%= excerptHeight %>px; width:<%= excerptWidth %>px;left:<%= excerptMarginLeft %>px;">        <img galleryimg="no" src="<%= image %>" style="left:-<%= excerptMarginLeft %>px; top:-<%= imageTop %>px;" width="<%= imageWidth %>" />      </div>      <div class="DV-annotationExcerptImage" style="height:<%= excerptHeight %>px;">        <img galleryimg="no" src="<%= image %>" style="top:-<%= imageTop - 2 %>px;" width="<%= imageWidth %>" />      </div>    </div>    <div class="DV-annotationBody DV-editHidden">      <%= text %>    </div>    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>    <div class="DV-annotationEditControls DV-editVisible">      <div class="<%= access == \'public\' ? \'DV-ownerVisible\' : \'DV-contributorVisible\' %> clearfix">        <div class="minibutton warn DV-deleteAnnotation float_left">Delete</div>        <div class="minibutton default DV-saveAnnotation float_right">Save</div>        <div class="minibutton DV-cancelEdit float_right">Cancel</div>      </div>    </div>  </div></div>');window.JST.annotationNav=_.template('<div class="DV-annotationMarker" id="DV-annotationMarker-<%= id %>">  <span class="DV-trigger">    <%= title %>    <span>p.<%= page %></span>  </span></div>');window.JST.chapterNav=_.template('<div id="DV-chapter-<%= id %>" class="DV-chapter <%= navigationExpanderClass %>">  <div class="DV-first">    <%= navigationExpander %>    <span class="DV-trigger"><%= title %><span>p.&nbsp;<%= pageNumber %></span></span>  </div>  <%= noteViews %></div>');window.JST.descriptionContainer=_.template('<% if (description) { %>  <div id="DV-description">    <div id="DV-descriptionHead">      <span class="DV-showDescription DV-trigger" id="DV-descriptionToggle">Toggle Description</span>      Description    </div>    <div id="DV-descriptionText"><%= description %></div>  </div><% } %>');window.JST.footer=_.template('<div id="DV-footer" class="<% if (!DV.options.displayFooter) { %>DV-hide<% } %>">  <% if (DV.options.navigation == \'footer\') { %>    <div class="DV-navControlsContainer">    </div>  <% } %></div>');window.JST.header=_.template('<div id="DV-header" class="<% if (!DV.options.displayHeader) { %>DV-hide<% } %>">  <div id="DV-headerHat" class="clearfix">    <div id="DV-branding">      <% if (story_url) { %>        <span id="DV-storyLink"><%= story_url %></span>      <% } %>          </div>    <div id="DV-title">      <%= title %>      </div>  </div>  <div id="DV-Controls">    <div class="DV-views <% if (!DV.options.displayViewTabs) { %>DV-hide<% } %>" id="DV-views">      <div id="DV-documentView" class="DV-first"><span class="DV-trigger DV-selected">Document</span></div>      <div id="DV-annotationView" style="display:none;" class="<% if (!DV.options.displayTextTab) { %>DV-last<% } %>"><span class="DV-trigger">Annotations</span></div>      <div id="DV-textView" class="<% if (DV.options.displayTextTab) { %>DV-last<% } else { %>DV-hide<% } %>"><span class="DV-trigger">Text</span></div>    </div>    <div id="DV-searchBox" class="clearfix <% if (!DV.options.displaySearch || !DV.options.displayTextTab) { %>DV-hide<% } %>">      <form action="#" method="get" id="DV-searchDocument">        <span class="DV-searchInput">          <div class="DV-searchInput-cancel"></div>          <input id="DV-searchInput" type="<%= search_type %>" autosave="DV-<%= id %>" results="10" placeholder="Search Document" />        </span>        <span class="DV-searchSubmit">          <input id="DV-searchSubmit" type="submit" value="Search" />        </span>      </form>    </div>    <% if (DV.options.navigation == \'header\') { %>      <div class="DV-navControlsContainer">      </div>    <% } %>    <div class="DV-zoomControls <% if (!DV.options.displayZoomControls) { %>DV-hide<% } %>">      <span class="DV-zoomLabel">Zoom</span>      <div id="DV-zoomBox">      </div>    </div>  </div></div>');window.JST.navControls=_.template('<div id="DV-navControls" class="clearfix">  <span class="DV-trigger" id="DV-previous">&laquo;</span>  <div class="clearfix DV-pageNumberContainer">    <span id="DV-currentPagePrefix">Page&nbsp;</span>    <span id="DV-currentAnnotationPrefix">Annot.&nbsp;</span>    <span id="DV-currentPage">1</span>    <span id="DV-currentPageSuffix">of&nbsp;      <span id="DV-totalPages"><%= totalPages %></span>      <span id="DV-totalAnnotations"><%= totalAnnotations %></span>                            </span>  </div>  <span class="DV-trigger" id="DV-next">&raquo;</span></div>');window.JST.navigationExpander=_.template('<span class="DV-trigger DV-expander">Expand</span>');window.JST.pageAnnotation=_.template('<div class="DV-annotation DV-pageNote <%= orderClass %> DV-<%= access %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>">  <div class="DV-annotationTab">    <div class="DV-annotationClose DV-trigger">p. <%= pageNumber %></div>  </div>  <div class="DV-annotationContent">        <!-- Header -->    <div class="DV-annotationHeader clearfix">      <div class="DV-pagination DV-editHidden">        <span class="DV-trigger DV-annotationPrevious" title="Previous Annotation">Previous</span>        <span class="DV-trigger DV-annotationNext" title="Next Annotation">Next</span>      </div>            <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger">Go to Page <%= pageNumber %></div></div>      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="Annotation Title" value="<%= title %>" />      <% if (access == \'private\') { %>        <div class="DV-privateLock DV-editHidden" title="Private note"></div>      <% } %>      <div class="DV-showEdit DV-editHidden <%= access == \'public\' ? \'DV-ownerVisible\' : \'DV-contributorVisible\' %>"></div>    </div>    <div class="DV-annotationBody DV-editHidden">      <%= text %>    </div>    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>    <div class="DV-annotationEditControls DV-editVisible">      <div class="<%= access == \'public\' ? \'DV-ownerVisible\' : \'DV-contributorVisible\' %> clearfix">        <div class="minibutton warn DV-deleteAnnotation float_left">Delete</div>        <div class="minibutton default DV-saveAnnotation float_right">Save</div>        <div class="minibutton DV-cancelEdit float_right">Cancel</div>      </div>    </div>  </div></div>');window.JST.pages=_.template('<div id="p<%= pageIndex %>" class="DV-set" style="top:0;left:0px;height:893px;width:700px;">  <div class="DV-pageNoteInsert" title="Click to Add a Page Note">    <div class="DV-annotationTab">      <div class="DV-annotationClose"></div>    </div>    <div class="DV-annotationDivider"></div>  </div>  <div class="DV-pageMeta"><span class="DV-pageNumber">p. <%= pageNumber %></span></div>  <div class="DV-annotations"></div>    <div class="DV-page" style="height:863px;width:700px;">    <span class="DV-loading-top">Loading</span>    <span class="DV-loading-bottom">Loading</span>    <div class="DV-cover"></div>    <img galleryimg="no" class="DV-pageImage" src="<%= pageImageSource %>" height="863" />  </div></div>');window.JST.unsupported=_.template('<div id="DV-unsupported">  <div class="DV-intro">    <% if (DV.Schema.document.resources && DV.Schema.document.resources.pdf) { %>      <a href="<%= DV.Schema.document.resources.pdf %>">Download this document as a PDF</a>    <% } %>    <br />    <br />    To use the Document Viewer you need to<br /> upgrade your browser:  </div>  <div class="DV-browsers">    <div class="DV-browser">      <a href="http://www.google.com/chrome">        <div class="DV-image" id="DV-chrome"> </div>Chrome      </a>    </div>    <div class="DV-browser">      <a href="http://www.apple.com/safari/download/">        <div class="DV-image" id="DV-safari"> </div>Safari      </a>    </div>    <div class="DV-browser">      <a href="http://www.mozilla.com/en-US/firefox/firefox.html">        <div class="DV-image" id="DV-firefox"> </div>Firefox      </a>    </div>    <br style="clear:both;" />  </div>  <div class="DV-after">    Or, if you\'d like to continue using Internet Explorer 6,<br /> you can    <a href="http://www.google.com/chromeframe">install Google Chrome Frame</a>.  </div></div>');window.JST.viewer=_.template('<!--[if IE 7]><div id="DV-docViewer" class="clearfix DV-viewDocument DV-ie DV-ie7 <% if (autoZoom) { %>DV-minimode<% } %>"><![endif]--><!--[if IE 8]><div id="DV-docViewer" class="clearfix DV-viewDocument DV-ie DV-ie8 <% if (autoZoom) { %>DV-minimode<% } %>"><![endif]--><!--[if !IE]><!--><div id="DV-docViewer" class="clearfix DV-viewDocument <% if (autoZoom) { %>DV-minimode<% } %>"><!-- <![endif]-->  <%= header %>  <div id="DV-docViewer-Container" class="<% if (!DV.options.displayHeader) { %>DV-hide-header<% } %> <% if (!DV.options.displayFooter) { %>DV-hide-footer<% } %>">    <div id="DV-searchBarWrapper">      <div id="DV-searchBar">        <span class="DV-trigger" id="DV-closeSearch">CLOSE</span>        <div class="DV-searchPagination" class="DV-foundResult">          <div id="DV-searchResults">            <span class="DV-resultPrevious DV-trigger">Previous</span>            <span id="DV-currentSearchResult"></span>            <span id="DV-totalSearchResult"></span>            <span> for &ldquo;<span id="DV-searchQuery"></span>&rdquo;</span>            <span class="DV-resultNext DV-trigger">Next</span>          </div>        </div>      </div>    </div>    <div id="DV-pages" class="<% if (!DV.options.displaySidebar) { %>DV-hide-sidebar<% } %>">      <div id="DV-pageCollection">        <div id="DV-bar" style=""></div>        <div id="DV-annotations">        </div>        <div id="DV-text">          <div id="DV-textSearch" class="clearfix">          </div>          <div id="DV-textPage">            <span id="DV-textCurrentPage"></span>            <pre id="DV-textContents"></pre>          </div>        </div>        <%= pages %>      </div>    </div>    <div id="DV-sidebar" width="265px" class="<% if (!DV.options.displaySidebar) { %>DV-hide<% } %>" style="display:none;">      <div id="DV-well">                <% if (DV.options.navigation == \'sidebar\') { %>          <div class="DV-navControlsContainer">          </div>        <% } %>        <div class="DV-navigation">          <%= descriptionContainer %>          <div class="DV-contentsHeader">Contents</div>          <div class="DV-chaptersContainer">          </div>          <div id="DV-supplemental">            <% if (pdf_url) { %>              <div id="DV-pdfLink"><%= pdf_url %></div>            <% } %>            <div id="DV-storyLink" style="<%= story_url ? \'\' : \'display:none\' %>">              <a target="_blank" href="<%= story_url %>">Related Article &raquo;</a>            </div>          </div>          <div id="DV-logo"><a id="DV-logoLink" href="#"></a></div>        </div>      </div>    </div>  </div>    <%= footer %></div>')})();