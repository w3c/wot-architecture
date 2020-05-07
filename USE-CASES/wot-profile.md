## Title: <Pick a descriptive title>

### Submitter(s): 

Michael Lagally

### Reviewer(s):

All WoT members, specifically Sebastian Kaebisch, Michael McCool, Ege Korkan, Zoltan Kis, Takuki Kamiya, Ryuichi Matsukura, Kunihiko Toumura, Michael Koster.

### Tracker Issue ID:

<please leave blank>

### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

- device owner
- service provider
- cloud provider
- device manufacturer
- gateway manufacturer

### Motivation:

* As an device owner, I want to know whether a device will work with my system before I purchase it to avoid wasting money.
    - Installers of IoT devices want to be able to determine if a given device will be compatible with the rest of their installed systems and whether they will have access to its data and affordances.

* As a developer, I want TDs to be as simple as possible so that I can efficiently develop them.
   - Here "simple" should relate to the end goal, "efficiently develop"; that is, TDs should be straightforward for the average developer to complete and validate.

* As a developer, I want to be able to validate that a Thing will be compatible with a Consumer without having to test against every possible consumer.

* As a cloud provider I want to onboard, manage and communicate with as many devices as possible out of the box.
This should be possible without device specific customization.

### Expected Devices:

sensors, actuators, gateways, cloud, directory service.

### Expected Data:

discrete or streaming data.

### Dependencies - Affected WoT deliverables and/or work items:

WoT Profile, WoT Thing Description

### Description:

As a consumer of devices I want to be able to process data from any device that conforms to a class of devices.

I want to have a guarantee that I'm able to correctly interact with all affordances of the Thing that complies with this class of devices.
Behavioral ambiguities between different implementations of the same description should not be possible. 

I want to integrate it into my existing scenarios out of the box, i.e. with close to zero configuration tasks.

#### Variants:

N/A

### Gaps:

<Describe any gaps that are not addressed in the current WoT standards and building blocks>

### Existing standards:


### Comments:

A strawman proposal for a profile specification has been submitted at: https://github.com/w3c/wot-profile

An initial set of requirements is available here:
https://github.com/w3c/wot-profile/edit/master/REQUIREMENTS/requirements.md
