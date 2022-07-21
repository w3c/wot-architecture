## Title: Home WoT devices work according to TV programs


### Submitter(s): 

Hiroki Endo,
Masaya Ikeo,
Shinya Abe,
Hiroshi Fujisawa


### Reviewer(s):

<Suggest reviewers>

### Tracker Issue ID:


### Category:

<please leave blank>

### Class: 

<please leave blank>

### Status: 

<please leave blank>

### Target Users

Person watching TV, Broadcasters

### Motivation:

<Provide a description of the problem that is solved by the use case and a reason why this use case is important for the users>

A lot of home devices, such as TV, cleaner, and home lighting, connect to an IP network.
When you watch a content program, these devices should coorperate for enhancing your expereence.

If the cleaning robot makes a loud noise while watching the TV program, it will hinder viewing. 
Also, even if you set up the theater environment with smart lights, it is troublesome to operate it yourself each time the TV program switches.

Therefore, by WoT device to operate in accordance with the TV program being viewed, thereby improving the user experience.

WoT devices work according to TV programs:

- Cleaning robot stops at an important situation,
- Color of smart lights are changed according to TV programs,
- Smart Mirror is notified that favorite TV show will start.

### Expected Devices:

- Hybridcast TV
- Hybridcast Connect application (in a smartdevice such as smartphone)
- Cleaning Robot
- Smart Light (such as Philips Hue)
- Smart Mirror

### Expected Data:

The trigger value of the scene of the TV program.
Hybridcast connect application know the Thing Description of the devices in home. (Discovery?)

### Dependencies:

<List the affected WoT deliverables>

### Description:

Home smart devices behave according to TV programs.

Hybridcast applications in TV emit information about TV programs for smart home devices.
(Hybridcast is a Japanese Integrated Broadcast-Broadband system. Hybridcast applications are HTML5 applications that work on Hybridcast TV.)

Hybridcast Contact application receives the information and controlls smart home devices.

![scenario_nhk](images/scenario_nhk.png)

#### Variants:

<Describe possible use case variants, if applicable>

### Gaps:

<Describe any gaps that are not addressed in the current WoT work items>

### Existing standards:

Hybridcast and Hybridcast Connect: a Japanese Integrated Broadcast-Broadband system, 
HbbTV, 
ATSC 3.0, 
...etc.

### Comments:


