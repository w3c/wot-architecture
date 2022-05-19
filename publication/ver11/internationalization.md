# Results of localization self-review for Web of Things (WoT) Architecture

Answers to short i18n review checklist [(from here)](http://w3c.github.io/i18n-activity/reviews/shortchecklist).

In general, many of these questions have answers that are resolved in detail in separate deliverables 
that are part of the Web of Things.  In these cases we have simply noted "See X" to refer to one of the
following:
* [Web of Things (WoT) Architecture 1.1 (update)](https://www.w3.org/TR/wot-architecture11/)
* [Web of Things (WoT) Thing Description 1.1 (update)](https://www.w3.org/TR/wot-thing-description11/)
* [Web of Things (WoT) Discovery (new)](https://www.w3.org/TR/wot-discovery/)
* [Web of Things (WoT) Profile (new)](https://www.w3.org/TR/wot-profile/)
* [Web of Things (WoT) Scripting API (update, informative)](https://www.w3.org/TR/wot-scripting-api/)
WoT Thing Descriptions may be referred to using the short form "TD" in the following.

1. [x] _If the spec (or its implementation) contains any natural language text that will be read by a human (this includes error messages or other UI text, JSON strings, etc, etc),_

* WoT Thing Descriptions (TDs) can contain titles and descriptions.  See the WoT Thing Description 1.1 deliverable.
* WoT Discovery defines a directory service and a self-description service with can include error messages.  See the WoT Discovery deliverable.
    
2. [ ] _If the spec (or its implementation) allows content authors to produce typographically appealing text, either in its own right, or in association with graphics._

    Not applicable.

3. [ ] _If the spec (or its implementation) allows the user to point into text, creates text fragments, concatenates text, allows the user to select or step through text (using a cursor or other methods), etc._

    Not applicable.

    However,
    * There is a mechanism to page through multiple TDs in WoT Discovery but this is for JSON, not raw text.  See the WoT Discovery deliverable.
    * There is support for JSON Pointers in TDs but this is for structured JSON, not raw text.  See the WoT Thing Description deliverable.

4. [x] _If the spec (or its implementation) allows searching or matching of text, including syntax and identifiers_

    * In WoT Discovery various standardized query mechanisms are allowed, some of which allow text matching.  See the WoT Discovery deliverable.

5. [ ] _If the spec (or its implementation) sorts text_

    * In WoT Discovery there is an option to sort search results, but by id only, which are not raw text.  See the WoT Discovery deliverable.

6. [ ] _If the spec (or its implementation) captures user input_

    Not applicable.

7. [x] _If the spec (or its implementation) deals with time in any way that will be read by humans and/or crosses time zone boundaries_

    Time is used in both WoT Discovery and WoT Thing Description, 
    but we require ISO standard time and use of the [dateTime](https://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/#dateTime) format.
    See the WoT Discovery and the WoT Thing Description deliverables.

8. [ ] _If the spec (or its implementation) allows any character encoding other than UTF-8._

    * UTF-8 is required in all deliverables.

9. [ ] _If the spec (or its implementation) defines markup._

    Not applicable.

10. [x] _If the spec (or its implementation) deals with names, addresses, time & date formats, etc_

    Only dateTime is used, as noted above.  

11. [x] _If the spec (or its implementation) describes a format or data that is likely to need localization._

    * Thing Descriptions is a data format that has internal mechanisms for localization.  
      See the WoT Thing Description deliverable.
    * Enriched Thing Descriptions are defined in WoT Discovery that adds some metadata to TDs relating to time,
      and Thing Description Directory services may return error descriptions.
      See the WoT Discovery deliverable.

12. [ ] _If the spec (or its implementation) makes any reference to or relies on any cultural norms_

    Not applicable.
    
    However, scans for sensitive terms, e.g. in the WoT Discovery Thing Description Directory API definition, 
    will be done as part of the publication process.
