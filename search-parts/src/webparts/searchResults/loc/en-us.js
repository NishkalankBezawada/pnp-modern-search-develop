define([], function() {
    return {
        "SearchQuerySettingsGroupName": "Search query configuration",
        "SearchSettingsGroupName": "Search settings",
        "SearchQueryKeywordsFieldLabel": "Search query keywords",
        "QueryTemplateFieldLabel": "Query template",
        "SelectedPropertiesFieldLabel": "Selected Properties",
        "LoadingMessage": "Results are loading, please wait...",
        "EnableLocalizationLabel": "Enable taxonomy values localization for refiners and results",
        "EnableLocalizationOnLabel": "Localization enabled",
        "EnableLocalizationOffLabel": "Localization disabled",
        "NoResultMessage": "No results to display",
        "FilterPanelTitle": "Available filters",
        "FilterResultsButtonLabel": "Filters",
        "SelectedFiltersLabel": "Selected filters",
        "SearchResultsLabel": "Search results",
        "RemoveAllFiltersLabel": "Remove all filters",
        "UsePaginationWebPartLabel": "Connect to a search pagination Web Part",
        "ShowResultsCountLabel": "Show results count",
        "ShowBlankLabel": "Show blank if no result",
        "ShowBlankEditInfoMessage": "No result returned for this query. This Web Part will remain blank in display mode according to parameters.",
        "NoFilterConfiguredLabel": "No filter configured",
        "SearchQueryPlaceHolderText": "Search query in KQL format",
        "EmptyFieldErrorMessage": "This field cannot be empty",
        "PlaceHolderEditLabel": "Edit",
        "PlaceHolderConfigureBtnLabel": "Configure",
        "PlaceHolderIconText": "Search Results Web Part",
        "PlaceHolderDescription": "This component displays search results with paging",
        "ResultSourceIdLabel": "Result Source Id / Name",
        "ResultSourceIdDescription": "When using the name, use the format: Source level|Name (i.e: SPSite|My news). Valid levels are: SPSiteSubscription, SPSite, SPWeb",
        "InvalidResultSourceIdMessage": "Enter either a result source id (guid) or a name with format: Level|Name (i.e: SPSite|My result source)",
        "InvalidNumberIntervalMessage": "Between 1 and 500",
        "EnableQueryRulesLabel": "Enable query rules",
        "IncludeOneDriveResultsLabel": "Include personal OneDrive results",
        "StylingSettingsGroupName": "Styling options",
        "SelectedPropertiesFieldDescription": "Specifies the properties to retrieve from the search results.",
        "SearchQueryKeywordsFieldDescription": "Use pre-defined search query keywords to retrieve a static set of results.",
        "CountMessageLong": "<b>{0}</b> results for '<em>{1}</em>'",
        "CountMessageShort": "<b>{0}</b> results",
        "CancelButtonText": "Cancel",
        "DialogButtonLabel": "Edit template",
        "DialogButtonText": "Edit template",
        "DialogTitle": "Edit results template",
        "SaveButtonText": "Save",
        "SimpleListLayoutOption": "Simple list",
        "DetailsListLayoutOption": "Details list",
        "TilesLayoutOption": "Tiles",
        "CustomLayoutOption": "Custom",
        "DebugLayoutOption": "Debug",
        "SliderLayoutOption": "Carousel",
        "PeopleLayoutOption": "People",
        "ResultsLayoutLabel": "Results layout",
        "TemplateUrlFieldLabel": "Use an external template URL",
        "TemplateUrlPlaceholder": "https://myfile.html",
        "ErrorTemplateExtension": "The template must be a valid .htm or .html file",
        "ErrorTemplateResolve": "Unable to resolve the specified template. Error details: '{0}'",
        "WebPartTitle": "Web part title",
        "HandlebarsHelpersDescription": "Enable functions from moment and handlebars helpers. See https://github.com/SharePoint/sp-dev-fx-webparts/blob/master/samples/react-search-refiners/README.md#available-tokens for more information.",
        "PromotedResultsLabel": "Promoted result(s)",
        "PanelCloseButtonAria": "Close",
        "UseRefinersWebPartLabel": "Connect to a search filters Web Part",
        "UseRefinersFromComponentLabel": "Use refiners from this component",
        "UseSearchVerticalsLabel": "Connect to a search vertical Web Part",
        "UsePaginationFromComponentLabel": "Use pagination from this component",
        "RefinementFilters": "Refinement filters",
        "customTemplateFieldsLabel": "Custom template field values",
        "customTemplateFieldsPanelHeader": "Custom template field values",
        "customTemplateFieldsConfigureButtonLabel": "Configure",
        "customTemplateFieldTitleLabel": "Field Name",
        "customTemplateFieldPropertyLabel": "Search Property",
        "Sort": {
            "SortableFieldsPropertyPaneField": "Sortable properties",
            "SortableFieldsDescription": "Specifies sortable properties that users can use in the UI. Only one property can be used at a time for sorting and will override the search order specified in the WP if exists.",
            "SortPropertyPaneFieldLabel": "Sort order",
            "SortListDescription": "Specify the sort order for the search results. This will only  applied when no manual filters have been set (i.e. sortable fields)",
            "SortDirectionAscendingLabel": "Ascending",
            "SortDirectionDescendingLabel": "Descending",
            "SortErrorMessage": "Invalid search property (Check if the managed property is sortable).",
            "SortPanelSortFieldLabel": "Sort on field",
            "SortPanelSortFieldAria": "Sort by",
            "SortPanelSortFieldPlaceHolder": "Sort by",
            "SortPanelSortDirectionLabel": "Sort Direction",
            "SortableFieldManagedPropertyField": "Sort managed property",
            "SortableFieldDisplayValueField": "Field name to display",
            "EditSortableFieldsLabel": "Edit sortable fields",
            "EditSortLabel": "Edit sort order",
            "EditSortLabelFieldName": "Field name",
            "EditSortDirection": "Sort Direction",
            "SortInvalidSortableFieldMessage": "This property is not sortable"
        },
        "Synonyms": {
            "EditSynonymLabel": "Edit synonyms",
            "SynonymListDescription": "Specify all the synonyms that will be used when searching. Each term a search will be enhanced with all the associated synonyms when the query is sent to the server. If a synonym contains more than one word, it has to be wrapped in double quotes.",
            "SynonymPropertyPanelFieldLabel": "Configure synonyms",
            "SynonymListTerm": "Term",
            "SynonymListSynonyms": "Synonyms",
            "SynonymIsTwoWays": "Two-ways?",
            "SynonymListSynonymsExemple": "Laptop, \"Desktop with monitor\"",
            "SynonymListTermExemple": "Computer"
        },
        "TermNotFound": "(Term with ID '{0}' not found)",
        "UseDefaultSearchQueryKeywordsFieldLabel": "Use a default search query",
        "DefaultSearchQueryKeywordsFieldLabel": "Default search query",
        "DefaultSearchQueryKeywordsFieldDescription": "This query will be used when the data source value is still empty.",
        "ResultTypes": {
            "ResultTypeslabel": "Result Types",
            "ResultTypesDescription": "Add here the display templates to use for result items according to one ore more conditions. Conditions are evaluated in the configured order and external template takes precedence over inline templates. Make sure the managed properties you use are present in the 'Selected Properties' of this Web Part.",
            "InlineTemplateContentLabel": "Inline template",
            "EditResultTypesLabel": "Edit Result Types",
            "ConditionPropertyLabel": "Managed Property",
            "ConditionValueLabel": "Condition Value",
            "CondtionOperatorValue": "Operator",
            "ExternalUrlLabel": "External Template Url",
            "ExternalUrlPlaceholder": "https://mysite/Documents/external.html",
            "EqualOperator": "Equals",
            "NotEqualOperator": "Not equals",
            "ContainsOperator": "Contains",
            "StartsWithOperator": "Starts with",
            "NotNullOperator": "Is not null",
            "GreaterOrEqualOperator": "Greater or equal",
            "GreaterThanOperator": "Greater than",
            "LessOrEqualOperator": "Less or equal",
            "LessThanOperator": "Less than"
        },
        "QueryCultureLabel": "Language of search request",
        "QueryCultureUseUiLanguageLabel": "Use interface language",
        "TemplateParameters": {
            "TemplateParametersGroupName": "Template options",
            "EnableItemPreview": "Enable result preview",
            "ShowFileIcon": "Show file icon",
            "ManageDetailsListColumnDescription": "Add, update or remove columns for the details list layout. You can use either the managed property value directly without any transformation or use an Handlebars expression in the value field. HTML is supported for all fields as well.",
            "ManageDetailsListColumnLabel": "Manage columns",
            "ManageTilesFieldsLabel": "Manage card fields",
            "ManagePeopleFieldsLabel": "Manage persona fields",
            "ManagePeopleFieldsPanelDescriptionLabel": "Here you can map each field values with the corresponding persona placeholders. You can use either the managed property value directly without any transformation or use an Handlebars expression in the value field.",
            "ManageTilesFieldsPanelDescriptionLabel": "Here you can map each field values with the corresponding card placeholders. You can use either the managed property value directly without any transformation or use an Handlebars expression in the value field. Also, when indicated, you can also inject your own HTML code in some fields.",
            "PlaceholderNameFieldLabel": "Name",
            "PlaceholderValueFieldLabel": "Value",
            "ValueColumnLabel": "Column value",
            "DisplayNameColumnLabel": "Column display name",
            "UseHandlebarsExpressionLabel": "Use Handlebars expression",
            "MinimumWidthColumnLabel": "Minimum width (px)",
            "MaximumWidthColumnLabel": "Maximum width (px)",
            "SortableColumnLabel": "Sortable",
            "ResizableColumnLabel": "Resizable",
            "MultilineColumnLabel": "Multiline",
            "LinkToItemColumnLabel": "Link to item",
            "SupportHTMLColumnLabel": "Allow HTML",
            "CompactModeLabel": "Compact mode",
            "SliderAutoPlayDuration": "Advance element every (seconds)",
            "SliderAutoPlay": "Auto play",
            "SliderPauseAutoPlayOnHover": "Pause on hover",
            "SliderGroupCells": "Number of elements to group together in slides",
            "SliderShowPageDots": "Show page dots",
            "SliderWrapAround": "Infinite scrolling",
            "PersonaSizeOptionsLabel": "Picture size",
            "PersonaSizeExtraSmall": "Extra small",
            "PersonaSizeSmall": "Small",
            "PersonaSizeRegular": "Regular",
            "PersonaSizeLarge": "Large",
            "PersonaSizeExtraLarge": "Extra large",
        },
        "ManagedPropertiesListPlaceHolder": "Select or add a managed property",
        "QueryModifier": {
            "FieldLbl": "Search query modifiers",
            "ConfigureBtn": "Configure",
            "PanelHeader": "Configure search query modifiers",
            "PanelDescription": "You can associate only one query modifier to a search result Web Part",
            "EnableColumnLbl": "Enabled",
            "DisplayNameColumnLbl": "Name",
            "DescriptionColumnLbl": "Description",
            "SelectedQueryModifierLbl": "Selected query modifier: '{0}'"
        },
        "Paging": {
            "PagingOptionsGroupName": "Paging settings",
            "ItemsCountPerPageFieldName": "Number of items per page",
            "PagingRangeFieldName": "Number of pages to display in range",
            "ShowPagingFieldName": "Show paging",
            "HidePageNumbersFieldName": "Hide page numbers",
            "HideNavigationFieldName": "Hide navigation buttons (prev page, next page)",
            "HideFirstLastPagesFieldName": "Hide first/last navigation buttons",
            "HideDisabledFieldName": "Hide navigation buttons (prev, next, first, last) if they are disabled.",
        },
        "ImportExport": "Import / Export settings",
        "MultiGeo": "Enable multi-geo"
    }
});