# Results of accessibility self-review for Web of Things (WoT) Architecture

Answers to accessibility (FAST) review checklist [(from here)](https://w3c.github.io/apa/fast/checklist.html)
for the Web of Things (WoT) architecture as a whole.
These answers are generally written to be applicable to all WoT deliverables.
Where a response is specifically relevant to a particular deliverable that will be identified.

## If technology allows visual rendering of content
The WoT architecture does not directly support visual rendering of content.
Some devices adhering to WoT standards may have visual display aspects, for example
light bulbs that can be turned on or off, or small displays.
However, WoT in general has no provision to constrain visual displays, 
as this (and other controls limiting the behavior of devices)
was not in the scope of our current charter.

### [no] There is a defined way for a non-visual rendering to be created.	
No.
### [no] Content can be resized.	
No specified mechanism.
### [possible] Luminosity and hue contrast can adapt to user requirements.	
No specified mechanism, although WoT TDs for lights usually have such controls, and WoT supports them.
### [possible] Text presentation attributes can be changed.
No specified mechanism, although WoT TDs may support controls.
### [possible] Visual presentation of pointers and cursors can be adjusted.
No specified mechanism, although WoT TDs may support controls.
### [no] Changing content presentation does not render it unreadable.
No specified mechanism for changing content presentation, and so no controls preventing unreadability.
### [no] Technology does not allow blinking or flashing of content, or provides a feature for users to quickly turn it off or permanently disable it.
WoT does not constrain device behaviour and in particular does not prevent devices from flashing. 
In the future, the way to handle this (which was not in the scope of our current charter) would be
to define a standard model for lights (and other devices with visual output) that included this feature.
### [n/a] It is possible to make navigation order correspond to the visual presentation.
Not applicable.

## If technology provides author control over color
Generally, WoT does not mandate mechanisms for control of color, although some
devices adhering to WoT may be able to display color.
As stated above, WoT in general has no provision to constrain visual displays, 
as this (and other controls limiting the behavior of devices)
was not in the scope of our current charter.

### [no] There is a mechanism for users to override colors of text and user interface components.	
Not supported.
### [no] There is a feature for authors to define semantically available "color classes" that users can easily map to custom colors, and give preference to this vs. coloring objects individually.
Not supported.
### [no] There is a feature for users to choose color schemata that work for them.	
Not supported.
### [no] The foreground and background color of an object can be reported to the user via AT.	
Not supported.
### [no] There are ways to set foreground and background colors separately for all objects.	
Not supported.
### [no] Compositing rules for foreground and background colors are well defined.	
Not supported.

## If technology provides features to accept user input 
Devices adhering to WoT may in fact provide various forms of user input, such as buttons, dials,
touch panels, etc.
In general, WoT does not constrain the behavior of such devices but does make information
available which can be used to enhance their accessibility.

### [yes] There is a mechanism to label user input controls in an unambiguous and clear manner.
WoT TDs have a "title" attribute for interactions
which can be used to label an associated input control (but only if the device
with the input control is capable of displaying text in association with the control, which is often
no the case).
### [yes] Authors can associate extended help information with a control.
WoT TDs, in addition to "title", also have a "description" field which can contain extended text.
In addition, a "link" can be used to hyperlink external documentation.
### [partial] If there is an input error, it is possible to associate the error message clearly with the specific control that is in error.
To the extent that interactions in TDs are associated with input controls, then an error on
an interaction can be associated with that control.
### [yes] There is a mechanism to report and set the state or value of controls programmatically.
This is possible but not explictly required by WoT. A Thing representing an input device usually is 
designed to report the actual state of that device.  However, a WoT system can use a "shadow" to
intercept and override the states reported by other Things.
### [yes] Authors can address multiple types of input hardware (keyboard, pointing device, touch screen, voice recognition, etc.), or the technology supports hardware-agnostic input methods.
Definite yes.  WoT can be used to describe and enable network interfaces to a wide variety of
input devices and make this data available for any purpose.
### [partial] User input does not require specific physical characteristics (e.g., fingerprint readers).
WoT itself does not require any specific physical characteristic, but a specific WoT Thing may.
However, it is the nature of WoT that one Thing can be substituted for another, so in this case
a problematic device could be replace with another one with the same network interface but 
with different physical controls.
### [no] Authors can ensure a "meaningful" order of controls exists regardless of presentation.	
Orders of interactions with WoT Things are not generally constrained.

## If technology provides user interaction features
### [yes] For every user interface object type, the "type" of object can be exposed as a role to accessibility APIs.
WoT exposes a powerful mechanism, based on RDF and JSON-LD, to add semantic types to Things and interactions.
### [yes] For every user interface object type, there is a clearly defined mechanism for authors to provide and / or user agents determines the "accessible name" for accessibility APIs.	
As mentioned above, textual information can be associated with all Things and interactions on Things.
### [yes] For user interface objects that can have states, properties, or values, authors can set these and these can be exposed to accessibility APIs.	
This is the general purpose and goal of WoT.
### [yes] When providing imperative mechanisms to implement technology features (e.g., scripts), authors can expose accessibility information to accessibility APIs.
The WoT system includes an (informative) document describing a scripting API for programmatically
interacting with WoT Things and exposing WoT network interfaces and Thing Descriptions.
Thing Descriptions can then be read and interpreted by other systems, including accessibility API implementations.
Even though the scripts are imperative, the necessary information to talk to a Thing is given
in a declarative fashion in the Thing Description.
### [ ] User can obtain help information about the widget.
There are no "widgets" per se, but help information about a Thing can either be embedded in a
Thing Description or be made available via a link.

## If technology defines document semantics
WoT does not define "documents" per se, but declarative descriptions called Thing Descriptions (TDs).
TDs in some cases fill the role of the "index.html" file on the regular Web, and they are considered
the access point to the network API for a Thing.

### [yes] Authors can title Web pages.	
There are mechanisms to add "titles" (and "descriptions") to 
an entire Thing Description.
### [yes] Authors can title sections of content.	
There are mechanisms to add "titles" (and "descriptions") to 
individual interactions described in a Thing Description.
### [yes] Authors can clearly indicate the target of a hyperlink and function of a control.
Hyperlinks in WoT Thing Descriptions include the target URL and a relation type (specifying the function).
### [yes] Authors can indicate content language, for the page as a whole and for blocks of content.	
There is a mechanism to define a default language, and also for textual content to be provided in
multiple languages clearly identified with language tags.
### [no] Authors can support understanding of abbreviations / acronyms / initialisms, idioms, jargon, etc.
There is no built-in mechanism to support definitions or expansion of specialized terms.
Authors, however, can of course expand acronyms in the text they provide.
### [no] Authors can support correct machine pronunciation of ambiguously spelled terms (e.g., in the phrase "I am content with this content" there are different correct pronunciations of the lexeme "content").
### [yes] Authors can identify regions of content, particularly the "main" region.	
WoT TDs have a prescribed structure that limit where content can be placed, and there is one
top-level such location.
### [yes] Declarative mechanisms (that have accessibility semantics pre-defined in the spec) are used to implement technology features whenever possible.
The WoT Thing Description, which the WoT architecture is based on, is declarative in nature.
### [yes] There are unambiguous ways to express relationships between units of content, such as object nesting, ID referencing, etc.
Linking through URIs is the supported mechanism for relating different documents.
Within a single WoT Thing Description, JSON Pointers and named objects are also used.
WoT Thing Descriptions also have a mandatory nesting structure which is validated.
### [yes] Prefer structural semantics to presentational semantics.
WoT Thing Descriptions are structural in nature.  
### [not applicable] When providing presentational semantics, they can be easily mapped to structural semantics, e.g., to support restyling or meaningful exposure to accessibility APIs.
WoT Thing Descriptions have no presentational semantics.
### [no] Support a comprehensive set of authoring use cases to minimize the need for alternative content. (e.g., don't make authors resort to text in images to get the style they want).
Where text is required, it can only be text, not images, and vice-versa.
However, images are only supported in the specific case of icons for Things and interactions,
and there is always associated textual elements in these cases also.
### [yes] Semantics allow precise and replicable location information in the document to be determined.
Referencing a specific location within a WoT Thing Description can be done with a JSON Pointer.
### [yes] Semantics exist to convey meaning that is commonly conveyed via presentation.	
WoT Thing Descriptions are structural and declarative in nature, not presentational.

## If technology provides time-based visual media (see also the Media Accessibility Checklist)
WoT itself does not directly provide support for time-based visual media, 
although some applications can do so or can be associated
with visual media display devices.  
In such cases, however, WoT does not provide a means to annotate
or manipulate the content itself, but only the means to 
describe controls for the devices that produce or display
the content.

### [n/a] It is possible for authors to provide detailed text descriptions, audio descriptions, or both of the important content in the media.
WoT does not constrain or affect the media content itself.
### [n/a] It is possible for authors to synchronize descriptions with the visual content.
WoT does not constrain or affect synchronization of the media playback.
### [n/a] It is possible for to provide descriptions even when the content is live.	
WoT does not constrain the display of media.
### [yes] User can pause, stop, replay media.
WoT Things controlling media playback can and usually do have such controls, although they are not enforced by WoT.
Defining interfaces for specific device classes was considered out of scope of the current WoT charter.
### [possible] Users can send output to alternate device.
It would be possible to use a WoT Thing Description to describe a device with such
functionality, but it is not mandatory.

## If technology provides audio
WoT itself does not directly provide support for audio, 
although some applications can do so or can be associated
with audio input or output.
In such cases, however, WoT does not provide a means to annotate
or manipulate the content itself, but only the means to 
describe controls for the devices that produce or record
the content.

### [n/a] It is possible for authors to provide transcriptions.	
### [n/a] It is possible for authors to provide synchronized captions, either open (on by default for all users).
### [possible] User can adjust volume level.	
WoT Things controlling audio playback can and usually do have such controls, although they are not enforced by WoT.
Defining interfaces for specific device classes was considered out of scope of the current WoT charter.
### [n/a] Contrast between foreground and background audio is sufficient.
WoT does not directly control or constrain this aspect of audio.
### [possible] Unnecessary background audio can be muted separately from the foreground audio.
It would be possible to use a WoT Thing Description to describe a device with such
functionality, but it is not mandatory.
### [n/a] Technology does not include triggers for audiosensitive seizures or allows those triggers to be disabled.
WoT does not include a mechanism to prohibit such triggers from devices adhering to 
WoT standards.

## If technology allows time limits
WoT does not generally include time limits, but individual devices may have such time
limits, for example, to detect multiple presses on a button.

### [possible] A feature exists to allow time limits to be extended.
There is no general feature in WoT to extend time limits, although a given
Thing can implement such features (e.g. IoT devices often have controls allowing users
to specify the maximum delay between button presses to consider them as a single "multi-press" input event).
### [possible] Time limits for different parts of a task, such as reading instructions vs providing input, can be set separately.
If time limits are supported by a particular WoT Thing, it is up to
the implementor of the Thing to provide time limit controls at a suitable
level of granularity.

## If technology allows text content
### [not generally] Authors can define non-text alternatives for text content.
While both icons and text can be defined in some cases, in general only text is
supported.
### [yes] Authors can define non-text alternatives for non-text content.	
The only non-text content allowed are icons, and these are always associated with
textual information (titles) that can be used as a replacement.

## If technology creates objects that don't have an inherent text representation
### [yes] There is a mechanism to create short text alternatives that label the object.
WoT TDs allow the embedding of textual titles and descriptions for interaction and Things.
### [yes] There is a mechanism to create extended text alternatives for fallback content.
Both short and long text (title and descriptions) are supported.
In addition, links to external documentation can be referenced for the entire Thing.
### [no] Text alternatives can be semantically "rich" e.g., with page structure, text style, hyperlinks, etc.
Unfortunately, HTML markup is forbidden in embedded text to avoid an XSS security risk.
Titles and descriptions, for example, might be used to generate an HTML dashboard but embedding text from
a Thing Description into the HTML for such a dashboard would allow an attacker to also
embed undesirable scripts and other malicious content.
If rich formatting is desired it can, however, be included in linked documentation.

## If technology provides content fallback mechanisms, whether text or other formats
### [no] Authors can explicitly mark content as not needing alternative content because it does not perform an important role.	
### [no] Content can explicitly indicate when author declined to provide alternative content.	
### [no] Content can explicitly indicate that authoring tool is unable to generate or obtain alternative content.	
### [no] Authors can explicitly associate alternative content with the primary content.	
### [yes] Authors can associate multiple types and instances of alternative content with primary content.
All titles and descriptions can be given in multiple languages.
### [n/a] Alternate content can be easily found from the initial content.	
No alternative content, per se.

## If technology provides visual graphics
This is a developing area, being explored by the SVG Accessibility Task Force.	

## If technology provides internationalization support
### [yes] Accessibility features can be internationalized to the same degree as other features.
There are, however, no features exclusively targetting accessiblity.

## If technology defines accessible alternative features
### [n/a] Accessible alternatives themselves meet the same bar of accessibility.
No special features exclusively targetting accessiblity are provided.

## If technology provides content directly for end-users
### [yes] Content can be encoded in a manner that allows machine transformation into accessible output.
Content is generally either text or JSON.  Text can be rendered into speech if necessary,
and JSON provides structured data that can be transformed into an accessible output.

## If technology defines an API
A Scripting API is defined for WoT in an associated informative document but its use is not
mandatory.  In general, the API is defined to read and produce declarative content: the WoT
Thing Description (TD).

The WoT Discovery mechanism also provides a network API which, however, does not modify TDs except
for adding a new annotations (timestamps, etc).

### [yes] If the API can be used for structured content, it provides features to represent all aspects of the content including hidden accessibility features.
The WoT Scripting API provides access to all aspects of a WoT TD relevant for accessibility.
Exceptions are security metadata, which is provided out-of-band, but is functional.
### [n/a] If the API relies on user agents to generate a user interface, the specification provides guidance about accessibility requirements needed to enable full interaction with the API.

## If technology defines a transmission protocol
The WoT Discovery specification defines a network API for a directory and guidance on how to use existing
discovery mechanisms such as DNS-SD.  Protocol Bindings describe how to use WoT with existing protocols such
as MTTP or MQTT to define Things which use these protocols.

### [yes] Use of the protocol does not cause any aspect of the content, including metadata which could contain important accessibility information, to be removed.	
In general WoT does not remove information from existing protocols.  There are cases, however, where
information might be removed from a TD after negotation if it is not required by the Consumer.
### [yes] It is possible to use third-party accessibility enhancement services while using the protocol.	
The whole purpose of the WoT TD is to allow IoT devices to be more accessible to third-party applications
by providing additional metadata in a standardized format.
