## Title: Smart Agriculture (Greenhouse Horticulture)

### Submitter(s): 

Ryuichi Matsukura, Takuki Kamiya

### Reviewer(s):

### Tracker Issue ID:

### Category:

### Class: 

### Status: 

### Target Users

Agricultural corporation, Farmer, Manufacturers (Sensor, other facilities), Cloud provider

### Motivation:

Greenhouse Horticulture controlled by computers can create an optimal environment for growing plants. This enables to improve productivity and ensure stable vegetable production throughout the year, independent of the weather. This is the result of research on the growth of plants in the 1980s. For example, in tomatoes, switching to hydroponics and optimizing the temperature, humidity and CO2 concentration required for photosynthesis resulted in a five times increase in yield. The growth conditions for other vegetables also have been investigated, and this control system is applied now.

### Expected Devices:

Sensors ( temperature, humidity, brightness, UV brightness, air pressure, and CO2)
Heating, CO2 generator, open and close sunlight shielding sheet.

### Expected Data:

Sensors’ values to clarify the gaps between conditions for maximizing photosynthesis and the current environment.
Following sensors values at one or some points in the greenhouse: temperature, humidity, brightness, and CO2.

### Dependencies:

WoT Architecture、WoT Thing Description

### Description:

Sensors and some facilities like heater, CO2 generator, sheet controller are connected to the gateway via wired or wireless networks. The gateway is connected to the cloud via the Internet. All sensors and facilities can be accessed and controlled from the cloud.
To maximize photosynthesis, the temperature, CO2 concentration, and humidity in the greenhouse are mainly controlled. When the sunlight comes in the morning and CO2 concentration inside decreases, the application turns on the CO2 generator to keep over 400 ppm, the same as the air outside. The temperature in the greenhouse is adjusted by controlling the heater and the sunlight shielding sheet.
The cloud gathers all sensor data and the status of the facilities. The application makes the best configuration for the region of the greenhouse located.

#### Variants:

<Describe possible use case variants, if applicable>

### Gaps:

In the case of the wireless connection to the sensors, the gateway should keep the latest value of the sensors since the wireless connection is sometimes broken. The gateway can create a virtual entity corresponding to the sensor and allow the application to access this virtual entity having the actual sensor status like sleeping.

### Existing standards:

### Comments:
