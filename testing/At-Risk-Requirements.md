
- [31: arch-security-consideration-communication-platform](https://w3c.github.io/wot-architecture#arch-security-consideration-communication-platform) : 
When generating TDs for an IoT ecosystem not covered by the WoT Binding Templates, 
TD creators SHOULD ensure that all the security requirements of the IoT Platform are satisfied.
  - This should be a pass for Oracle, Ditto, Philips hue and pretty much any TD bound to a platform
 - [34: arch-security-consideration-avoid-direct](https://w3c.github.io/wot-architecture#arch-security-consideration-avoid-direct) 	The WoT Runtime SHOULD NOT directly expose native device interfaces to the script developers.
   - dart_wot should pass this. @JKRhb 


- [35: arch-security-consideration-use-hal](https://w3c.github.io/wot-architecture#arch-security-consideration-use-hal)A WoT Runtime implementation SHOULD provide a hardware abstraction layer for accessing the native device interfaces. 
- [36: arch-security-consideration-hal-refuse-unsafe](https://w3c.github.io/wot-architecture#arch-security-consideration-hal-refuse-unsafe) Hardware abstraction layers SHOULD refuse to execute commands that might put the device (or environment) to an unsafe state. 
- [37: arch-security-consideration-secure-update](https://w3c.github.io/wot-architecture#arch-security-consideration-secure-update) Post-manufacturing provisioning or update of scripts, the WoT Runtime itself or any related data SHOULD be done in a secure fashion.

- [43: arch-security-consideration-segmented-network](https://w3c.github.io/wot-architecture#arch-security-consideration-segmented-network) In the case of implicit access control via access to a common network a segmented network SHOULD be used.
  - This is very specific to deployments. Philips Hue passes this since it is in a specific network setup. We can pass this even though it is a bit weird.

- [44: arch-security-consideration-use-psk](https://w3c.github.io/wot-architecture#arch-security-consideration-use-psk) : In commercial and industrial environments, explicit installation of pre-shared keys SHOULD be used to allow browsers to access local services while using TLS.
  - This is difficult to understand. This means how to establish TLS without a certificate authority.


- [46: arch-security-consideration-tls-recommended-priv](https://w3c.github.io/wot-architecture#arch-security-consideration-tls-recommended-priv) When a Thing is made available on a private network then it SHOULD be protected by secure transport such as TLS or DTLS.
  - Again depends on the deployment but doable.

- [50: arch-security-consideration-dtls-1-3](https://w3c.github.io/wot-architecture#arch-security-consideration-dtls-1-3) 	Security : When secure transport over UDP is appropriate, then at least DTLS 1.3 [RFC9147] SHOULD be used.
  - DTLS 1.3 is new, normal that there are not many implementations available.

- [54: arch-privacy-consideration-explicit-pii](https://w3c.github.io/wot-architecture#arch-privacy-consideration-explicit-pii) : TDs that can be associated with a person SHOULD generally be treated as if they contained PII and subject to the same management policies as other PII, even if they do not explicitly contain it.
  - TDDs which allow private collection TDs would pass this. This should be actually done in Discovery 2.0 and made informative for now.


Summary: Many of the assertions are deployment specific but we are testing more generic libraries and not deployments.
