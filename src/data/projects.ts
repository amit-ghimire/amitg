export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: string;
  gradient: string;
  overview: string;
  process: string;
  features: string[];
  challenges: string;
  impact: string;
  links?: { label: string; url: string }[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: "avatroid-telepresence",
    title: "AvatARoid: Human-Robot Telepresence in AR",
    subtitle:
      "Bridging the embodiment gap between robots and teleoperators through motion-mapped AR overlays",
    tags: [
      "Unity3D",
      "Mixed Reality",
      "Robotics Simulation",
      "Azure Kinect",
      "User Research",
    ],
    category: "Research",
    gradient: "from-cyan-500/20 to-blue-600/20",
    year: "2022 — 2024",
    overview:
      "Robot-mediated telepresence systems suffer from a fundamental embodiment gap — the remote user's expressions, gestures, and presence are lost when their only proxy is a rigid robot. AvatARoid tackles this by overlaying a motion-mapped AR avatar onto a humanoid robot, giving the teleoperator a richer, more human form of representation. This CHI '25 published research explored whether combining a physical robot with an AR-rendered human appearance could meaningfully improve the telepresence experience for both the local participant and the remote operator.",
    process:
      "The project began with a design exploration phase, surveying existing telepresence literature and identifying the embodiment gap as a core pain point. I developed a Mixed Reality simulation framework in Unity3D that rendered visually and behaviorally realistic humanoid robots in AR, allowing rapid prototyping of different representation modes. Using Azure Kinect for body tracking, I mapped the teleoperator's real-time motion onto both the robot and the AR avatar. A mixed-method user study compared three conditions: robot-only, robot with video feed, and robot with AR avatar overlay. Qualitative interviews and quantitative questionnaires captured social presence, co-presence, and user preference data.",
    features: [
      "Humanoid robot simulation framework for rapid MR prototyping",
      "Real-time motion mapping from Azure Kinect to AR avatar",
      "Three-condition experimental study design (robot, robot+video, robot+AR)",
      "Mixed-method evaluation combining quantitative scales and qualitative interviews",
      "Published at CHI '25 — the premier venue in Human-Computer Interaction",
    ],
    challenges:
      "Achieving convincing real-time alignment between the physical robot's movements and the AR overlay was the central technical challenge. Latency between the Kinect body tracking pipeline and the Unity rendering loop had to be kept below perceptible thresholds. Designing a user study that fairly compared fundamentally different representation modalities — physical robot vs. screen-based video vs. spatial AR — required careful control of confounding variables and a robust counterbalancing protocol.",
    impact:
      "The research demonstrated that AR avatar overlays significantly enhanced perceived social presence and user comfort compared to robot-only or video-augmented conditions. The simulation framework I built proved valuable for rapid exploration of telepresence concepts without requiring expensive robotic hardware for every iteration. The work was published at CHI 2025, contributing to the growing body of work on mixed reality telepresence.",
    links: [
      {
        label: "CHI '25 Paper",
        url: "https://doi.org/10.1145/3706598.3713812",
      },
    ],
  },
  {
    slug: "surgical-simulation-vr",
    title: "Surgical Simulation Training in VR",
    subtitle:
      "Physics-based VR training platform for laparoscopic cholecystectomy surgery",
    tags: [
      "Unity3D",
      "Virtual Reality",
      "Soft Body Simulation",
      "Fluid Simulation",
      "Medical Training",
    ],
    category: "VR",
    gradient: "from-red-500/20 to-orange-500/20",
    year: "2018 — 2019",
    overview:
      "Surgical training traditionally relies on cadavers, animal models, or expensive physical simulators — each with significant limitations in accessibility, repeatability, and fidelity. This project developed a VR training platform for laparoscopic cholecystectomy (gallbladder removal) that provides physics-based interaction with organs and surgical tools, enabling trainees to practice the procedure in an immersive, risk-free environment.",
    process:
      "Working alongside a team of 3D artists and medical consultants, the project started with reference-gathering from actual surgical procedures. The organ models were sculpted to anatomical accuracy, then rigged with soft-body physics to respond realistically to tool interaction — grasping, cutting, and cauterization. I evaluated multiple CPU and GPU-based physics frameworks to find the optimal balance between simulation fidelity and VR frame-rate requirements. Fluid simulation was integrated for realistic bleeding and irrigation. Iterative usability testing with medical professionals guided refinements to tool ergonomics and visual feedback.",
    features: [
      "Physics-based soft body deformation for organ interaction",
      "Fluid simulation for bleeding and surgical irrigation",
      "Realistic laparoscopic tool mechanics (grasper, cauterizer, scissors)",
      "Performance-optimized for consistent VR frame rates",
      "Usability evaluation with medical training professionals",
    ],
    challenges:
      "The primary challenge was achieving visually convincing soft-body deformation that could run within VR's strict frame-rate budget. GPU-based approaches offered better fidelity but introduced latency spikes; CPU-based solutions were more predictable but less detailed. Balancing surgical realism with interaction responsiveness required extensive profiling and a hybrid approach. Fluid simulation added another layer of computational expense that demanded careful LOD management.",
    impact:
      "The platform demonstrated that consumer-grade VR hardware could deliver training experiences approaching the utility of dedicated surgical simulators at a fraction of the cost. Feedback from medical professionals validated the interaction fidelity as sufficient for early-stage procedural training, particularly for building spatial awareness and tool coordination skills.",
    links: [
      {
        label: "Demo Videos",
        url: "https://www.youtube.com/playlist?list=PLQ7N7ffrusU4HQLTsePnQmLfLQLsvgTUZ",
      },
    ],
  },
  {
    slug: "vr-collaboration",
    title: "Collaboration Platform in VR",
    subtitle:
      "Networked virtual workspace with voice communication and shared object interaction",
    tags: [
      "Unity3D",
      "Unity Networking",
      "Inverse Kinematics",
      "Virtual Reality",
      "Social VR",
    ],
    category: "VR",
    gradient: "from-violet-500/20 to-purple-600/20",
    year: "2019",
    overview:
      "Remote collaboration tools are largely confined to flat screens — video calls, shared documents, screen sharing. This project explored what collaboration looks like when participants share a three-dimensional virtual space. The platform enables multiple VR users to meet, communicate via spatial voice, and interact with shared objects like 3D models, documents, whiteboards, and media players in a persistent virtual environment.",
    process:
      "The design process started with studying existing social VR platforms and identifying key interaction patterns for productive collaboration: spatial awareness, proxemic behavior, and multimodal communication. I evaluated and implemented multiple networking solutions in Unity to find one that could synchronize user avatars (driven by IK from headset and controller tracking), voice audio, and shared object state with acceptable latency. The avatar system uses inverse kinematics to map VR controller input to full upper-body animation, giving users a sense of physical co-presence.",
    features: [
      "Real-time networked VR with synchronized avatar presence",
      "Spatial voice communication with distance-based attenuation",
      "Shared interactive objects: 3D models, documents, whiteboards",
      "Audio/video playback in shared virtual space",
      "IK-driven avatars from HMD and controller tracking data",
    ],
    challenges:
      "Synchronizing complex interaction state across a network while maintaining VR frame rates was the core challenge. Object ownership, conflict resolution when multiple users grab the same object, and maintaining consistent physics state required careful networking architecture. Voice spatialization had to feel natural without introducing perceptible latency that would break conversational flow.",
    impact:
      "The project provided valuable insight into the design requirements of social VR workspaces — particularly around proxemic behaviors (how close virtual avatars should stand) and the importance of consistent spatial audio for maintaining the illusion of shared presence. These learnings informed subsequent work on networked XR applications.",
  },
  {
    slug: "motion-capture-vr",
    title: "Motion Capture System for VR",
    subtitle:
      "Low-fidelity motion capture using HTC Vive for rapid character animation iteration",
    tags: [
      "Unity3D",
      "Inverse Kinematics",
      "Kalman Filter",
      "Animation",
      "VR/AR",
    ],
    category: "Tools",
    gradient: "from-green-500/20 to-emerald-500/20",
    year: "2018",
    overview:
      "Professional motion capture systems are expensive and require dedicated studio space, creating a bottleneck in the animation pipeline for VR and AR projects. This project implemented a low-fidelity but rapid motion capture system using consumer VR hardware — HTC Vive headset, controllers, and body trackers — to drive humanoid 3D character models from the user's real-time motion data.",
    process:
      "The system maps tracking data from the Vive's lighthouse-tracked devices to a humanoid character rig using inverse kinematics. Raw tracking data is filtered through a Kalman filter to reduce jitter while preserving the responsiveness needed for natural-feeling animation. The captured motion can be recorded, played back, and exported for use in VR, AR, or traditional 3D applications. The focus was on speed of iteration rather than production-quality fidelity — allowing animators to quickly block out movement, test ideas, and evaluate animations in-context.",
    features: [
      "Real-time body tracking from HTC Vive HMD, controllers, and trackers",
      "Kalman filter for noise reduction on tracking data",
      "IK-driven humanoid character animation",
      "Motion recording and playback system",
      "Export pipeline for VR, AR, and 3D applications",
    ],
    challenges:
      "Consumer VR tracking hardware has limited body coverage compared to professional mocap suits — only the head, hands, and (with optional trackers) feet are tracked. Inferring convincing full-body motion from these sparse inputs required tuning the IK solver and adding procedural animation for the spine, shoulders, and secondary motion. The Kalman filter parameters needed careful tuning to balance smoothness against latency.",
    impact:
      "The system reduced the animation iteration cycle from hours (with traditional keyframe or outsourced mocap) to minutes, enabling rapid prototyping of character animations for XR projects. It proved particularly valuable for testing spatial interactions and evaluating animation quality directly within VR environments.",
  },
  {
    slug: "virtual-tourism",
    title: "Virtual Tourism",
    subtitle:
      "VR travel experience featuring Nepal's religious pilgrimages through photogrammetry and 360 video",
    tags: [
      "Unity3D",
      "Photogrammetry",
      "Virtual Reality",
      "360 Video",
      "Cultural Heritage",
    ],
    category: "VR",
    gradient: "from-amber-500/20 to-yellow-500/20",
    year: "2017 — 2018",
    overview:
      "Nepal's religious pilgrimage sites hold immense cultural and spiritual significance, yet many are difficult to access physically. This VR tourism application enables users to virtually visit these sacred landmarks, experiencing them through immersive 360-degree video of actual sites and photogrammetry-reconstructed 3D digital twins. A virtual guide character provides cultural, historical, and spiritual context as users explore each location.",
    process:
      "The project was a collaboration between developers, photogrammetry artists, and videographers. Real-world pilgrimage sites were captured using both 360-degree video rigs and photogrammetry workflows to create complementary experiences: the video provided atmospheric immersion, while the 3D reconstructions allowed free exploration. I developed the VR application framework, integrating both media types into a cohesive navigation system. The virtual travel guide was designed as a 3D character agent that provides narration and contextual information, triggered by the user's location and gaze within each scene.",
    features: [
      "Immersive 360-degree video of real pilgrimage sites",
      "Photogrammetry-based 3D digital twins for free exploration",
      "Virtual 3D guide agent with cultural and historical narration",
      "Intuitive VR navigation between multiple pilgrimage locations",
      "Combined video and 3D mesh experiences per location",
    ],
    challenges:
      "Balancing visual quality with performance was critical — photogrammetry meshes are notoriously heavy, and 360 video requires high-resolution texture streaming. Optimizing both for VR's frame-rate requirements demanded aggressive LOD strategies and texture compression. Designing the virtual guide to feel helpful rather than intrusive required careful UX testing of trigger timing and spatial positioning.",
    impact:
      "The application demonstrated VR's potential as a cultural preservation and accessibility tool, enabling people who cannot physically travel to experience sacred sites with a meaningful sense of presence. It also served as a case study in combining photogrammetry and video capture for complementary VR experiences.",
    links: [
      {
        label: "Demo Video",
        url: "https://www.youtube.com/watch?v=eg8MNS-czJ0",
      },
    ],
  },
  {
    slug: "poly-ar",
    title: "Poly AR",
    subtitle:
      "AR authoring tool for browsing, downloading, and placing 3D models in augmented reality",
    tags: ["Unity3D", "Augmented Reality", "Google Poly API", "Android"],
    category: "AR",
    gradient: "from-pink-500/20 to-rose-500/20",
    year: "2018",
    overview:
      "Prototyping AR experiences typically requires pre-loading 3D assets into a project, rebuilding, and deploying — a slow cycle for exploring spatial layouts and visual ideas. Poly AR streamlined this by connecting to Google's Poly API (now deprecated) to let users search, download, and place 3D models directly into an AR scene at runtime using their Android phone. It functioned as a rapid AR authoring and prototyping tool.",
    process:
      "The application was built in Unity targeting ARCore-compatible Android devices. The core workflow: the user points their phone at a surface, the app detects the plane, and they can search Google Poly's library for 3D models, download them on-the-fly, and place them into the AR scene. Models could be repositioned, scaled, and rotated with touch gestures. The architecture separated the network/API layer from the AR rendering pipeline to keep the placement experience responsive even during model downloads.",
    features: [
      "Runtime 3D model search and download via Google Poly API",
      "AR surface detection and model placement",
      "Touch-based manipulation: move, scale, rotate",
      "Asynchronous model loading with visual feedback",
      "Lightweight Android AR application",
    ],
    challenges:
      "Handling arbitrary 3D models of varying complexity at runtime — without knowing polygon count, texture size, or material setup in advance — required defensive loading and automatic LOD generation. Network latency for model downloads had to be masked with appropriate loading UI to maintain the feeling of a responsive authoring tool.",
    impact:
      "Poly AR demonstrated that AR authoring could be made accessible without requiring development tools or 3D modeling expertise. While Google Poly's deprecation limited the tool's longevity, the architecture patterns for runtime asset loading in AR remain relevant to current AR content creation workflows.",
    links: [
      {
        label: "Demo Video",
        url: "https://drive.google.com/file/d/1W_zBqDN4Gx7Z4iDOMD9k7YsZeTpcubyd/view?usp=drive_link",
      },
    ],
  },
  {
    slug: "draw-together",
    title: "Draw Together",
    subtitle:
      "Multiuser collaboration tool with shared whiteboard and 3D mesh painting",
    tags: ["Unity3D", "Networking", "Multiuser", "Collaboration"],
    category: "Collaboration",
    gradient: "from-sky-500/20 to-indigo-500/20",
    year: "2019",
    overview:
      "Creative collaboration often requires shared visual canvases. Draw Together explored two modes of multiuser creative expression: a synchronized shared whiteboard for 2D sketching, and a collaborative 3D mesh painting tool that lets multiple users paint directly onto 3D model surfaces in real time. Both modes were built with networking support for simultaneous multi-user interaction.",
    process:
      "The whiteboard system synchronizes brush strokes as vector data across the network, allowing real-time co-drawing with minimal bandwidth. The mesh painting system required a different approach — painting directly onto UV-mapped 3D models while keeping texture state synchronized between users. I experimented with different synchronization strategies, from streaming full texture updates to transmitting only brush stroke parameters and replaying them locally on each client.",
    features: [
      "Real-time shared whiteboard with networked drawing",
      "Collaborative 3D mesh painting on shared models",
      "Multiple brush types and color selection",
      "Low-bandwidth stroke synchronization",
      "Support for simultaneous multi-user editing",
    ],
    challenges:
      "The mesh painting system's main challenge was maintaining texture consistency across clients when multiple users paint the same region simultaneously. Conflict resolution for overlapping strokes and efficient texture synchronization without excessive bandwidth usage required careful architectural decisions around authority and state management.",
    impact:
      "The project explored the design space of shared creative tools beyond traditional 2D canvases, demonstrating that 3D collaborative painting is feasible with consumer networking infrastructure. The whiteboard component proved useful as a reusable module in subsequent VR collaboration projects.",
    links: [
      {
        label: "Whiteboard Demo",
        url: "https://drive.google.com/file/d/1IrNWncilm7qRTrPJ404FKYZOEOFnVMYF/view?usp=drive_link",
      },
      {
        label: "Mesh Painting Demo",
        url: "https://drive.google.com/file/d/1algreQwRDNcNN3f3DRehfG1aMzWMSp-_/view?usp=drive_link",
      },
    ],
  },
  {
    slug: "see-like-me",
    title: "See Like Me: Colorblindness Simulator",
    subtitle:
      "AR application simulating different types of color vision deficiency in real-time",
    tags: [
      "Unity3D",
      "Augmented Reality",
      "Accessibility",
      "Computer Vision",
    ],
    category: "AR",
    gradient: "from-teal-500/20 to-cyan-500/20",
    year: "2018",
    overview:
      "Approximately 8% of men and 0.5% of women experience some form of color vision deficiency, yet most people have little understanding of how the world appears through color-blind eyes. See Like Me uses AR to simulate different types of color blindness in real-time, allowing users to point their phone camera at any scene and see it as someone with protanopia, deuteranopia, tritanopia, or other color vision conditions would perceive it.",
    process:
      "The application captures the live camera feed and applies color transformation matrices corresponding to different types of color vision deficiency. Each simulation mode was calibrated against established color vision research to ensure accuracy. The AR passthrough approach was chosen over static image processing to create an embodied, explorative experience — users naturally move through their environment, discovering which objects and interfaces lose distinguishability under different conditions.",
    features: [
      "Real-time camera-based color vision simulation",
      "Multiple color blindness profiles (protanopia, deuteranopia, tritanopia)",
      "Side-by-side comparison mode",
      "Educational overlays explaining each condition",
      "Mobile AR passthrough implementation",
    ],
    challenges:
      "Achieving accurate color transformation at camera frame rates on mobile hardware required optimized shader-based processing. The color matrices had to be derived from perceptual models rather than simple channel swaps to produce scientifically accurate simulations rather than rough approximations.",
    impact:
      "The simulator serves as an empathy and accessibility awareness tool — designers, developers, and educators can experience firsthand how their visual designs appear to users with color vision deficiency. It highlights the importance of designing for accessibility beyond just color contrast ratios.",
    links: [
      {
        label: "Demo Video",
        url: "https://drive.google.com/file/d/1O0U5js5ITcljyOSh6oOBnyz0c93D27Xk/view?usp=drive_link",
      },
    ],
  },
  {
    slug: "covid19-visualization",
    title: "Covid-19 3D Visualization",
    subtitle:
      "Interactive 3D globe visualization of global Covid-19 case data from REST API",
    tags: ["Unity3D", "WebGL", "REST API", "Data Visualization"],
    category: "Web",
    gradient: "from-orange-500/20 to-red-500/20",
    year: "2020",
    overview:
      "During the early stages of the Covid-19 pandemic, understanding the geographical spread of cases was critical. This project created an interactive 3D globe visualization that pulls real-time case data from an open-source REST API and maps it geographically, allowing users to explore the pandemic's progression across countries and regions in their web browser.",
    process:
      "Built in Unity and deployed as a WebGL application, the visualization fetches Covid-19 case data from a public REST API, parses the JSON response, and maps case counts to geographical coordinates on a 3D globe. Visual encoding uses height and color intensity of extruded markers to represent case density. The WebGL build was optimized for reasonable load times and performance in desktop browsers.",
    features: [
      "Interactive 3D globe with geographical case mapping",
      "Real-time data fetching from public REST API",
      "Visual encoding of case density through height and color",
      "Web-based deployment via Unity WebGL",
      "Country-level data exploration with hover/click interaction",
    ],
    challenges:
      "Unity WebGL builds are notoriously large and slow to load. Optimizing the build size and initial load time while maintaining visual quality and interactivity required aggressive asset compression and lazy data loading. Parsing and mapping large JSON datasets to 3D coordinates performantly in the WebGL runtime was another key optimization target.",
    impact:
      "The project demonstrated that Unity WebGL can serve as a viable platform for data visualization applications, bridging the gap between rich 3D interactivity and web accessibility. It provided an intuitive spatial representation of pandemic data that complemented the flat charts and tables dominating dashboards at the time.",
    links: [
      {
        label: "Live Demo",
        url: "https://amit-ghimire.github.io/Covid19/",
      },
    ],
  },
];
