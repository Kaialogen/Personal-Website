---
title: 'EDR Evasion Techniques'
date: '2023-09-15'
---

## Choice of Programming Language
Traditionally, C/C++ have been the languages of choice for malware development due to their power, flexibility, and low-level capabilities. However, in recent years there has been a notable shift towards using newer languages such as Go and Rust.

### Benefits of Using Go in Malware Development:
1. **Cross-Compilation**:
- Go makes it easy to compile code for multiple platforms from a single codebase. This is essential for malware authors who want to target multiple OSes without re-writing their code.

2. **Static Linking**:
- Go compiles to a statically linked binary, making deployment easier since the binary contains all its dependencies.

3. **Evasion and Stealth**:
- Go-written binaries can be harder to analyse and detect because they don’t have a common signature, unlike traditional C/C++ malware.

4. **Simplicity and Efficiency**:
- Go is designed to be simple and efficient to write, reducing the barrier to entry for malware authors.

### Benefits of Using Rust in Malware Development:
1. **Memory Safety Without Sacrificing Performance**:
- Rust provides memory safety guarantees, which helps malware authors avoid bugs and detection mechanisms that capitalize on memory-based vulnerabilities.

2. **Modern Syntax and Tooling**:
- Rust’s modern syntax and extensive standard library can make malware development faster and more efficient.

3. **Cross-Compilation**:
- Similar to Go, Rust supports easy cross-compilation to target multiple platforms.

4. **Low-Level Control**:
- Rust allows for low-level system manipulation akin to C/C++, enabling sophisticated malware techniques.

### Challenges for C/C++ in Modern Malware:
1. **Memory Management**:
- Manual memory management in C/C++ can lead to vulnerabilities (like buffer overflows) that modern defences can detect and leverage to uncover the malware.

2. **Increasing Detection**:
- C/C++ malware often has recognizable signatures and patterns that security tools are well-equipped to identify.

3. **Complexity**:
- Writing secure and effective malware in C/C++ can be more complex and time-consuming compared to newer, more streamlined languages.

### Why I choose Go over Rust/C/C++
One of the top considerations for malware development was ensuring consistent and stable memory management. Go, with its garbage collector, offers an automatic memory management system. This means that memory allocation and deallocation are efficiently handled by the language itself, minimizing the chances of memory leaks and related issues. Rust does provide memory safety guarantees with its ownership model, but for this specific task, Go's approach to memory seemed more straightforward and reliable.

Go's syntax is clean, concise, and easy to pick up, especially for those already familiar with C-style languages. The standard library in Go is comprehensive, which makes it simpler to develop applications without the need for external packages. Additionally, Go's built-in concurrency support with goroutines and channels makes it easier to implement parallel tasks, an essential feature for this project.


## Evasion Techniques in Go Malware Development

1. Dummy Operations: Introducing functions that perform innocuous operations can be effective. These harmless activities are designed to trick automated systems into thinking the program is benign. By engaging in these operations, automated analysis could potentially overlook the program's true intentions, making evasion easier.

2. Indirect System Calls: Instead of relying on easily detected APIs, developers can use more subtle system call methods. Directly using specific system libraries can enable the program to bypass standard monitoring tools, thereby making detection much harder.

3. Code Obfuscation: Key parts of the code can be subjected to multiple obfuscation techniques. Encrypting them and then representing them in a different format makes it tougher for analysis tools to discern their purpose. Fragmenting the code further adds to the complexity.

4. Alternative Process Targeting: Choosing less commonly monitored processes for activities like injection can be more discreet. While many security tools keep an eye on popular processes, targeting the less obvious ones might escape their notice.

5. Advanced Compilation: Using specific compilation flags can strip the binaries of identifying information. This not only reduces the binary's size but also makes reverse-engineering more difficult due to the loss of key data.

6. Authentic Compilation Methods: Utilizing legitimate commands during the compilation process helps make the resulting binary look genuine. Though these commands are intended for processing source code, they can also mask the code's malicious intent, making the distinction between safe and dangerous binaries murkier.

7. Detecting & Evading Analysis Environments: Advanced features can be incorporated to sense analysis environments:

    Scanning for Monitoring Tools: The code can be made to search for applications typical in analysis settings. If detected, it hints at a potential controlled environment, triggering evasive maneuvers.
    Hardware Resource Verification: Many analysis environments allocate fewer resources. By checking for these hardware allocations, the program can identify potential controlled settings and halt its activities, ensuring it remains undetected.


## AV evasion 
**Understanding AV Evasion**:  
At its core, evading Antivirus (AV) systems is an exercise in subtlety. Contrary to popular belief, effective AV evasion doesn't necessarily require highly complex techniques. The primary goal is to eliminate or camouflage "known bad" indicators, which are the usual flags that AV systems rely upon. By effectively masking these indicators, malware can blend in, appearing as benign software.

**Obfuscation Techniques**:  
One of the key strategies in AV evasion is obfuscation. This involves deliberately altering code or data to hide its true intent while maintaining its original function. Various elements within the malware code, such as strings, shellcode, and function calls, can be automatically obfuscated. This makes static analysis—a method where AV systems evaluate the code without executing it—less effective. However, it's essential to strike a balance. Overdoing obfuscation can itself become an indicator of malicious intent. Thus, while obfuscation is a potent tool, it's a double-edged sword and should be employed judiciously.

**Shellcode Encryption**:  
Shellcode, a fundamental component in many malware types, often draws attention. To mask shellcode from prying eyes, encryption or encoding techniques are essential. Even basic methods, like XOR or ROT encoding, can effectively scramble shellcode, making it harder for AV systems to recognize its malicious intent.

**Exploiting AV Shortcomings**:  
Interestingly, the very design of AV systems can be exploited for evasion. To minimize their resource footprint, AV systems often take shortcuts in their scanning processes. By understanding and leveraging these shortcuts, malware developers can craft their code in ways that bypass detection.

**Sandbox Evasion**:  
Sandboxes are controlled environments where suspicious code is executed to observe its behaviour. Evading such systems requires a blend of time-based and behavioural tactics. For instance, by performing benign operations for a duration of 30-60 seconds, malware can effectively "wait out" a sandbox's observation window. Additionally, checks can be implemented to probe for typical sandbox characteristics like screen resolution, connected devices, and the absence of genuine user input. If these checks suggest a sandbox environment, the malware can terminate its activities, thus evading detection.

**Payload Keying**:  
A more sophisticated tactic is payload keying. Here, the malicious payload is designed to execute only in a specific target environment. This can be achieved by using unique identifiers from the target environment, like domain names, as encryption keys for the payload. If the malware finds itself outside its intended environment, it remains inert and harmless. This ensures a high degree of precision in attacks and reduces the likelihood of unintended detections.

## EDR Evasion
**Understanding EDR Mechanisms**: Endpoint Detection and Response (EDR) systems have rapidly become a staple in modern cybersecurity environments. Unlike traditional antivirus systems, which primarily rely on signatures, EDR systems use a multitude of telemetry sources to monitor and analyse system activities. This includes API hooks, kernel callbacks, Event Tracing for Windows (ETW), and many other sensors. Their comprehensive coverage makes EDR systems highly effective, but it also presents numerous points of potential exploitation for those aiming to bypass these defences.

**Prioritizing Evasion Techniques**: While the ultimate aim is to blind or bypass the EDR, it's crucial to prioritize the sequence of evasion. The first step should always be to camouflage or alter malicious behaviours in a way that they appear benign or indiscernible. Once this behaviour-based evasion is in place, one can then focus on techniques to blind or mislead the EDR sensors, ensuring that even if certain actions are detected, they don't raise alarms.

**Popular EDR Bypass Methods**: A variety of techniques have been popularized due to their effectiveness in evading EDR systems. These are some of the most notable methods:

- **“Refreshing” DLLs**: EDR systems often monitor the Dynamic Link Libraries (DLLs) used by applications for any anomalies. By periodically "refreshing" or reloading these libraries, it becomes challenging for the EDR to keep a consistent track, potentially leading to overlooked malicious activities.

- **API Unhooking**: EDRs frequently "hook" or monitor API calls, especially those that could have malicious implications. By unhooking these APIs or detaching them from the EDR's monitoring mechanisms, their activities can go unnoticed.

- **Direct Syscalls**: Instead of using standard, high-level API functions that are easily flagged by EDRs, malware can directly communicate with the system using system calls or "syscalls." By doing so, the malware can bypass the more easily detectable API layers and operate under the radar.

- **In-memory Masking**: Many advanced EDR systems monitor the memory space of applications for any anomalies. Techniques such as in-memory masking, encryption, or obfuscation can make it difficult for EDRs to interpret or even detect the actual content of the memory, thereby hiding malicious activities.

## Defensive decision-making
**Introduction**:  
In cybersecurity, defensive decision-making is the process of determining how to respond to potential threats and vulnerabilities in an environment. The choices made in this context can drastically alter the outcome of an attack, making it a crucial component of any security strategy. These decisions can broadly fall into three primary strategies: Avoid, Blend In, and Sabotage.

**1. Avoid**:  
The "Avoid" strategy focuses on circumvention. Rather than confronting or manipulating the defence head-on, this method involves:

- **Avoiding Specific Locations or Activities**: Identifying and avoiding areas or activities that are heavily monitored or under defensive scrutiny can significantly reduce the chances of detection. This is the cyber equivalent of a thief avoiding well-lit areas or places with surveillance cameras.
    
    - **Example**: Instead of executing tools directly on a victim endpoint, which might be closely monitored, one might use proxying tools. This way, the direct footprint on the victim's system is minimized, reducing the likelihood of detection.

**2. Blend In**:  
The "Blend In" strategy emphasizes stealth and camouflage:

- **Camouflaging Telemetry**: It's not always about avoiding detection; sometimes, it's about being undetectable even when observed. By ensuring that the telemetry (data or signals) generated by malware or any intrusive tool appears legitimate, it becomes challenging for defences to differentiate between benign and malicious activities.

- **Leveraging Defensive Blind Spots**: Every defence mechanism has its limitations or blind spots. A thorough understanding of these can be exploited to carry out activities that might otherwise be detected. This is akin to a chameleon blending into its surroundings, making it virtually invisible to predators.


**3. Sabotage**:  
The "Sabotage" strategy is more aggressive, focusing on disrupting defensive mechanisms:

- **Tampering with Data Flow**: Instead of merely avoiding or camouflaging, this approach seeks to actively disrupt the flow of data or information that defences rely upon. By tampering with these data sources, the efficacy of defensive tools can be significantly reduced.

    - **Example**: Patching the Anti-Malware Scan Interface (AMSI) or Event Tracing for Windows (ETW) can blind defensive systems, rendering them ineffective. Similarly, unhooking specific function calls can stop defences from getting the data they need to detect malicious activities.

## Resources
### AV Evasion
- https://evasions.checkpoint.com/
- https://github.com/Arvanaghi/CheckPlease
- https://github.com/leoloobeek/keyring
- https://github.com/xuanxuan0/DripLoader
- https://github.com/mkaring/ConfuserEx
- https://github.com/moloch--/denim

### EDR Evasion
- https://synzack.github.io/Blinding-EDR-On-Windows/
- https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/
- https://ethicalchaos.dev/2020/05/27/lets-create-an-edr-and-bypass-it-part-1/

### Tools used for detection testing
- https://github.com/rasta-mouse/ThreatCheck
- https://www.virustotal.com/gui/home/upload
- https://antiscan.me/