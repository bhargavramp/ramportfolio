export const projectsData = [
    {
        id: 1,
        name: 'Heart Rate Anomaly Detection System',
        description:
            "A real-time driver safety monitoring system using STM32 and pulse sensor to detect heart rate anomalies. Embedded C logic detects abnormal readings and triggers automated phone calls and SMS alerts via Twilio Cloud API through Wi-Fi connectivity. Implemented UART communication, sensor calibration, and timer configurations for continuous monitoring and accurate health alerts.",
        tools: ['STM32', 'Embedded C', 'Pulse Sensor', 'UART', 'ESP32/NodeMCU', 'Twilio API', 'VS Code'],
        role: 'Firmware Developer, IoT Integrator, System Tester',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Smart Intruder Detection System',
        description:
            "ESP32-based home security system using PIR motion detection to prevent intrusions. When motion is detected, a buzzer alarm is triggered, and users can manually activate the camera feed to monitor the intruder. System reverts back to detection mode after observation, ensuring low latency response with privacy-focused processing that requires no cloud storage.",
        tools: ['ESP32', 'PIR Sensor', 'Camera Module', 'Embedded C', 'VS Code', 'Proteus'],
        role: 'IoT Developer, Embedded Programmer, System Integrator',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Cruise Control System (PID Based)',
        description:
            "PID-based vehicle cruise control system designed and simulated using MATLAB and Simulink. Modeled real vehicle dynamics, tuned P/PI/PID controllers to achieve smooth speed regulation with minimal overshoot and steady-state error. Conducted stability checks, step response analysis, and controller performance comparison.",
        tools: ['MATLAB', 'Simulink', 'PID Controller', 'Control System Toolbox'],
        role: 'Control System Designer, Simulation Engineer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'Path-Following Robot',
        description:
            "Autonomous robot designed to follow predefined paths using IR sensors and motor control algorithms. Developed real-time feedback logic for motor speed adjustment, curve handling, and error correction. Built hardware circuit using Arduino/ESP32 and motor drivers with embedded firmware for stable and accurate path tracking.",
        tools: ['Arduino/ESP32', 'IR Sensors', 'Motor Driver (L298N)', 'Embedded C', 'Proteus'],
        role: 'Embedded Programmer, Hardware Designer, Control Logic Developer',
        code: '',
        demo: '',
    },
];








// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },