/* =====================================================================
   i18n.js  -  Bascule de langue FR / EN
   - Anglais par défaut (première visite).
   - [data-i18n]         -> textContent
   - [data-i18n-html]    -> innerHTML
   - [data-i18n-title]   -> attribut data-title (HUD cards)
   - [data-i18n-desc]    -> attribut data-desc  (HUD cards)
   - [data-i18n-attr]    -> compatibilité "attr:key,attr:key"
   - .btn-lang[data-lang] -> bascule
   - window.__loaderMessages -> partagé avec loader.js
   ===================================================================== */

(function () {
    'use strict';

    const translations = {
        en: {
            /* ---------- Loader ---------- */
            'loader.greeting': 'Hi, it\'s Timm.',
            'loader.wait':     'Please wait for the animation.',
            'loader.next':     'Next',
            'btn.resume':      'My Resume',
            'btn.contact':     'My contact',
            'loader.messages': [
            'I am an engineering student.',
            'I study mechatronics  and robotics',
            'I am passionate about nuclear power,',
            'Drones !',
            'And robot locomotion !!!',
            'I love Isaac Softwares',
            'I work on AI',
            'the management of AI agents',
            'That\'s futur',
            'And also Neural Networks and  Machine Learning',
            'I am a hard worker',
            'Otherwise, <br> I have hobbies',
            'A robotics club <br> and sports'
            ],


            /* ---------- Nav ---------- */
            'nav.about':       'About',
            'nav.projects':    'Projects',
            'nav.internship':  'Internships',
            'nav.education':   'Education',
            'nav.references':  'References',
            'nav.contact':     'Contact',

            /* ---------- Titres ---------- */
            'title.about':      'ABOUT ME',
            'title.projects':   'PROJECTS',
            'title.internship': 'INTERNSHIPS',
            'title.education':  'EDUCATION',
            'title.references': 'REFERENCES',
            'title.contact':    'CONTACT ME',

            /* ---------- About ---------- */
            'about.p1': 'I\'m <span class="text-red">Timm Claverie</span>, a fifth-year engineering student at SeaTech, part of the French INP (Institut National Polytechnique) network. I am studying for a dual degree in embedded systems. I specialise in <span class="text-red">Mechatronic, Robotics</span> and autonomous <span class="text-red">embedded systems</span>.',
            'about.p2': 'I work on projects that combine <span class="text-red">software development, artificial intelligence, embedded programming, debugging, and simulation</span>, aiming to build intelligent and reliable systems.',
            'about.p3': '<span class="text-red">Hard-working, dedicated and adaptable</span>, I seek to deepen my knowledge, contribute to innovative projects and make a <span class="text-red">long-term commitment</span>.',

            /* ---------- Projects : labels + titres + descriptions ---------- */
            'projects.hint':   'Swipe or use the arrows to browse the projects, then click a panel to open one.',
            'projects.seeAll': 'See all my projects',

            'prj.1.label': 'DESIGN',
            'prj.1.title': '3D Tracking System',
            'prj.1.desc':  'Replace a system consisting of 5 Qualisys cameras for the COSMER laboratory. Work on YOLO object recognition, a stereo vision system, calibration using ArUcos, and real-time 3D trajectory tracking and positioning.',
            'prj.2.label': 'SENSOR FUSION',
            'prj.2.title': 'Sensor Fusion',
            'prj.2.desc':  'Implement a Visual-Inertial Odometry system on a drone and to perform algorithm benchmarking for fusion.',
            'prj.3.label': 'EMBEDDED',
            'prj.3.title': 'Embedded Systems : Mobile Robot Control',
            'prj.3.desc':  'C programming for an autonomous mobile robot : <br>motor control, analogue-to-digital conversions, infrared telemetry, time stamping and state machine',
            'prj.4.label': 'ROBOCUP',
            'prj.4.title': 'RoboCup : NN B-Spline Trajectory Planner',
            'prj.4.desc':  'Optimisation of robot trajectories using a neural network for calculating Bézier curves in Python.',
            'prj.5.label': 'CS GROUP',
            'prj.5.title': 'Optimisation of Maritime Surveillance',
            'prj.5.desc':  'Group project combining AI image processing and data management. <br> My role: designing a data table in PostgreSQL and a Human-Machine Interface (HMI).',
            'prj.6.label': 'ROS',
            'prj.6.title': 'ROS Programming : Autonomous Turtlebot',
            'prj.6.desc':  'Autonomous navigation and obstacle avoidance under ROS 1 : <br> event handling, Python code, LiDAR sensor integration.',
            'prj.7.label': 'HMI',
            'prj.7.title': 'Road Vehicle Dynamic Simulator',
            'prj.7.desc':  'Interactive interface for studying the kinematics, dynamics of a vehicle, and its stability criteria.',
            'prj.8.label': 'MACHINE LEARNING',
            'prj.8.title': 'Machine Learning : Fraud detection',
            'prj.8.desc':  'Analysis of the dataset containing credit card transactions. <br> Evaluation methods and model explainability.',

            /* ---------- Internships ---------- */
            'intern.1.title': 'Defense Sector R&D',
            'intern.1.desc':  'During this internship at the <strong>naval air base</strong> in Hyères, the centre entrusted me with the task of developing an <strong>innovative module</strong> for the <strong>French Navy</strong>. My objective was to design a <strong>testing infrastructure</strong>.<br><br>This design allowed me to develop my knowledge of <strong>3D modelling</strong> and combine the expertise of machinists and engineers in multidisciplinary fields. This experience was decisive, consolidating my focus on <strong>defence systems engineering</strong> and <strong>military aeronautics</strong>.',

            'intern.2.title': 'Robotic and Drone Sectors R&D',
            'intern.2.desc':  'My role was to implement a <strong>Visual-Inertial Odometry</strong> system on a drone and to perform <strong>algorithm benchmarking for fusion</strong>. A platform, comprising a Jetson mini-computer and sensors, retrieves topics via a ROS2 architecture for <strong>EKF, UKF, and VIO</strong> pose estimation algorithms.<br><br>This project allowed me to gain <strong>hands-on experience</strong> with tuning sensor fusion algorithms. Configure these algorithms is learned through empirical testing and not with courses. I was also able to familiarize myself with <strong>embedded systems for drones</strong>. You can find the project on GitHub:<br><a href="https://github.com/timm-clv/SensorFusion/tree/main" target="_blank" rel="noopener noreferrer" style="color: #E13C4C; text-decoration: underline; font-weight: bold;">https://github.com/timm-clv/SensorFusion/tree/main</a>',

            /* ---------- Education ---------- */
            'edu.1.title': 'SeaTech Engineering School &amp; RISE Master <em class="edu-date">2024-2027</em>',
            'edu.1.li1':   'Systemics, electronics, land and marine robotics, embedded systems and AI, sensor fusion, control-command, project management.',
            'edu.1.li2':   'Minor in Security &amp; Defence: military conferences on technological innovation and geostrategy.',
            'edu.1.li3':   'Additional AI workshop course: machine learning.',
            'edu.2.title': 'Intensive Mathematics Bachelor\'s Degree (2 years) <em class="edu-date">2022-2024</em>',
            'edu.cta':     'Certifications \u00b7 Skills \u00b7 Tools \u00b7 Domains',

            /* ---------- References ---------- */
            'ref.1.text': 'Timm is a young and highly motivated engineer who approaches every task with enthusiasm. He takes the time to understand each problem and works persistently until he finds a solution. He is reliable, proactive, and very nice to work with.',
            'ref.1.role': 'Researcher at CRTA',
            'ref.2.text': 'I have worked on numerous projects and practical assignments with Timm at SeaTech. He is a very hard-working and reliable partner who can always be counted on. His professionalism and skills in mechatronics are real assets to any team. I would recommend him without hesitation.',
            'ref.2.role': 'Project partner',

            /* ---------- Contact ---------- */
            'contact.desc':     'Currently looking for a <strong>6-month internship</strong> starting in 2027,<br>Open to opportunities in Power Electronics, Control-Command, Systems engineering, AI for Robotics and, if possible, a CIFRE thesis in a company.',
            'contact.location': 'FRANCE, Toulon',

            /* ---------- Skills page ---------- */
            'sk.title':        'Skills & Tools',
            'sk.subtitle':     'Certifications, competencies, tools and fields of application behind my projects in robotics, embedded systems and AI.',
            'sk.back':         '\u2190 Portfolio',
            'sk.nav.certs':    'Certifications',
            'sk.nav.skills':   'Skills',
            'sk.nav.tools':    'Tools',
            'sk.nav.domains':  'Domains',
            'sk.footer.back':  'Back to portfolio',

            'sk.div.certs':    'CERTIFICATIONS',
            'sk.div.skills':   'SKILLS',
            'sk.div.tools':    'TOOLS',
            'sk.div.domains':  'DOMAINS',

            'sk.certs.tab.ml':    'Machine Learning',
            'sk.certs.tab.toeic': 'English \u00b7 TOEIC',

            'sk.certs.ml.lead':     'Machine Learning with Python \u2014 training courses taken on Kaggle: introduction to data evaluation, pipeline mastery and model explainability. Applied to a dataset for detecting fraudulent credit card transactions.',
            'sk.certs.ml.c1':       'Intro to Machine Learning',
            'sk.certs.ml.c1.desc':  'Kaggle certificate.',
            'sk.certs.ml.c2':       'Intermediate Machine Learning',
            'sk.certs.ml.c2.desc':  'Kaggle certificate.',
            'sk.certs.ml.c3':       'Machine Learning Explainability',
            'sk.certs.ml.c3.desc':  'Kaggle certificate.',
            'sk.certs.toeic.lead':  'English language proficiency certification.',
            'sk.certs.toeic.level': 'TOEIC \u00b7 LEVEL B2',

            'sk.skills.core':        'Core competencies',
            'sk.skills.core.1':      'Systemic analysis',
            'sk.skills.core.2':      'Critical analysis',
            'sk.skills.core.3':      'Questioning and physical consistency',
            'sk.skills.core.4':      'AI agent piloting and management',
            'sk.skills.core.5':      'Problem solving with neural networks and machine learning',
            'sk.skills.core.6':      'Experiments in sensor fusion and odometry',
            'sk.skills.tech':        'Technical competencies',
            'sk.skills.soft':        'Soft skills',
            'sk.skills.emb.title':   'Embedded Systems',
            'sk.skills.emb.text':    'Real-Time Operating System // Microcontrollers // Electronic // Code Optimization',
            'sk.skills.emb.meta':    'Robotics Club, School Education',
            'sk.skills.robo.title':  'Robotics',
            'sk.skills.robo.text':   'ROS System (topics, nodes) // Trajectory Planning // LIDAR // DC Motor Control',
            'sk.skills.robo.meta':   'Robotics Club, School Education',
            'sk.skills.ai.title':    'AI',
            'sk.skills.ai.text':     'Object Detection // Neural Networks // PyTorch // Machine Learning',
            'sk.skills.ai.meta':     'Personal Project, Robotics Club, School Education',
            'sk.skills.sim.title':   'Simulation',
            'sk.skills.sim.text':    'Gazebo // MatLab // Python // IsaacSim // IsaacLab // MuJoCo',
            'sk.skills.sim.meta':    'Personal Project, School Education',
            'sk.skills.team.title':  'Team Synergy',
            'sk.skills.team.text':   'Communication // Good humour // Dedication // Adaptability',
            'sk.skills.team.meta':   'School Group projects',
            'sk.skills.pm.title':    'Project Management',
            'sk.skills.pm.text':     'Autonomy // Time Management // Resource Planning',
            'sk.skills.pm.meta':     'Internship Experiences',

            'sk.tools.ros2.text':      'Robot Operating System 2: middleware for nodes, topics and sensor-fusion pipelines.',
            'sk.tools.isaacsim.text':  'NVIDIA robotics simulator for physics-based simulation.',
            'sk.tools.isaaclab.text':  'Robot-learning framework built on top of Isaac Sim.',
            'sk.tools.mujoco.text':    'Physics engine for fast and accurate robot simulation.',
            'sk.tools.excel.text':     'Correlated data tables, to help someone taking over a project understand it.',
            'sk.tools.python.text':    'Data analysis, trajectory construction, neural networks with PyTorch / TensorFlow.',
            'sk.tools.cpp.text':       'Memory management and hardware control for robotics.',
            'sk.tools.gazebo.text':    'Linux. 3D robotics simulator, physics engine and environment modeling.',
            'sk.tools.matlab.text':    'Integrated HMI. Numerical computing and algorithm development.',
            'sk.tools.simulink.text':  'Block diagram environment for simulation and Model-Based Design. Work on \u201cPUMA\u201d robotic arms.',
            'sk.tools.solidworks.text':'Computer-aided design (CAD).',
            'sk.tools.latex.text':     'Quality report writing.',
            'sk.tools.pandas.text':    'Data manipulation and analysis in Python.',
            'sk.tools.tensorflow.text':'Machine-learning framework for building and training neural networks.',

            'sk.domains.lead': 'The fields where my projects, internships and studies meet.',
            'sk.domains.1.title': 'Defense & Security',
            'sk.domains.1.text':  'Minor in Security and Defence. Conferences on geostrategy, cybersecurity, naval architecture\u2026',
            'sk.domains.2.title': 'Autonomous Robotics',
            'sk.domains.2.text':  'Path planning, obstacle avoidance, system control and PID control for robotics.',
            'sk.domains.3.title': 'Smart Sensing',
            'sk.domains.3.text':  'Sensor fusion (LIDAR / IMU / Camera / Rangefinders), and image processing for maritime surveillance.',
            'sk.domains.4.title': 'Aerospace & UAV',
            'sk.domains.4.text':  'Visual-Inertial Odometry on a drone and benchmarking of sensor-fusion algorithms (CRTA internship).',
            'sk.domains.5.title': 'AI for Robotics',
            'sk.domains.5.text':  'Neural-network trajectory planning (RoboCup), machine learning, object detection.',
            'sk.domains.6.title': 'Embedded & Real-Time Systems',
            'sk.domains.6.text':  'C programming of an autonomous mobile robot: motor control and real-time constraints.',
            'sk.domains.7.title': 'Modeling & Simulation',
            'sk.domains.7.text':  'Gazebo, Matlab / Simulink, road-vehicle dynamic simulator, Isaac Sim, Isaac Lab and MuJoCo.',
            'sk.domains.8.title': 'Control-Command',
            'sk.domains.8.text':  'Speed and heading control of robots (PID). Open to opportunities in Power Electronics.',
            'sk.domains.9.title': 'R&D & Prototyping',
            'sk.domains.9.text':  'Innovative module for the French Navy designed in 3D during the CEPA/10S internship.',
            'sk.domains.10.title': 'Marine Systems',
            'sk.domains.10.text':  'Coming soon: detection solutions for underwater vehicles (ROV / AUV).',

            /* ---------- All-projects page ---------- */
            'ap.title':  'ALL MY PROJECTS',
            'ap.filter.all':      'All',
            'ap.filter.robotics': 'Robotics',
            'ap.filter.ai':       'AI & Data',
            'ap.filter.embedded': 'Embedded',
            'ap.report': 'REPORT',
            'ap.notebook': 'Notebook',
            'ap.back': 'Back to portfolio',
            'ap.copyright': '\u00a9 2025-2026 Timm CLAVERIE-',

            'ap.p1.title': 'Maritime Surveillance CS GROUP',
            'ap.p1.desc':  'Development of an AI-processed image bank aimed at optimising surveillance. My role: creating the database and the human-machine interface.',
            'ap.p2.title': 'Embedded Drone Platform',
            'ap.p2.desc':  'Odometry obtained via Visual-Inertial Data Collection Platform. Sensor Fusion Benchmarking. Sensors synchronization. GPS-denied System. ROS2 Architecture',
            'ap.p3.title': 'Autonomous Mobile Robot',
            'ap.p3.desc':  'Programming a robot in C to avoid obstacles. Work on state machines, analogue conversions and electronics.',
            'ap.p4.title': 'Programming a TurtleBot',
            'ap.p4.desc':  'Python programming on ROS/GAZEBO for a robot. Node communication via topics.',
            'ap.p5.title': 'Underwater Acoustics',
            'ap.p5.desc':  'Characterisation of underwater acoustic signals. Signal processing using "sliding products".',
            'ap.p6.title': 'Road Vehicle Dynamic Simulator',
            'ap.p6.desc':  'Interactive interface for studying the kinematics, dynamics of a vehicle, and its stability criteria. Objective of studying land vehicles.',
            'ap.p7.title': 'Image processing',
            'ap.p7.desc':  'Machine vision, remote sensing, and marine mapping using Python OpenCV',
            'ap.p8.title': 'Spline Trajectory for Competition Robots',
            'ap.p8.desc':  'Improvement of RCT robot movement via embedded B-Spline calculation. Embedded Python model recalculated 50 times per second.',
            'ap.p9.title': 'Fraud Detection',
            'ap.p9.desc':  'Analysis of the dataset containing credit card transactions. Machine learning, evaluation methods and model explainability.',
            'ap.p10.title': '3D Tracking',
            'ap.p10.desc':  'Work on YOLO object recognition, a stereo vision system, calibration using ArUcos, and real-time 3D trajectory tracking and positioning.'
        },

        fr: {
            'loader.greeting': 'Salut, moi c\'est <span class="highlight-name">Timm.</span>',
            'loader.wait':     'Merci de patienter pendant l\'animation.',
            'loader.next':     'Suivant',
            'btn.resume':      'Mon CV',
            'btn.contact':     'Mon contact',
            'loader.messages': [
            'Je suis étudiant en ingénierie.',
            'J\'étudie la mécatronique <br> et la robotique',
            'Je suis passionné par <br> l\'énergie nucléaire',
            'Par les drones !',
            'Et par la locomotion de robots !!!',
            'J\'adore les logiciels Isaac',
            'Je travaille sur l\'IA',
            'la gestion d\'agents IA',
            'C\'est le futur',
            'Et aussi sur les réseaux neuronaux et <br> l\'apprentissage automatique',
            'Je suis très travailleur',
            'Sinon, <br> j\'ai des loisirs',
            'Un club de robotique <br> et le sport'
            ],

            'nav.about':       'À propos',
            'nav.projects':    'Projets',
            'nav.internship':  'Stages',
            'nav.education':   'Formation',
            'nav.references':  'Références',
            'nav.contact':     'Contact',

            'title.about':      'À PROPOS',
            'title.projects':   'PROJETS',
            'title.internship': 'STAGES',
            'title.education':  'FORMATION',
            'title.references': 'RÉFÉRENCES',
            'title.contact':    'CONTACT',

            'about.p1': 'Je suis <span class="text-red">Timm Claverie</span>, étudiant en cinquième année d\'ingénierie à SeaTech, membre du réseau INP (Institut National Polytechnique). Je poursuis un double diplôme en systèmes embarqués. Je me spécialise en <span class="text-red">mécatronique, robotique</span> et <span class="text-red">systèmes embarqués</span> autonomes.',
            'about.p2': 'Je travaille sur des projets qui combinent <span class="text-red">développement logiciel, intelligence artificielle, programmation embarquée, débogage et simulation</span>, dans le but de construire des systèmes intelligents et fiables.',
            'about.p3': '<span class="text-red">Travailleur, investi et adaptable</span>, je cherche à approfondir mes connaissances, à contribuer à des projets innovants et à m\'engager sur le <span class="text-red">long terme</span>.',

            'projects.hint':   'Glissez ou utilisez les flèches pour parcourir les projets, puis cliquez sur un panneau pour l\'ouvrir.',
            'projects.seeAll': 'Voir tous mes projets',

            'prj.1.label': 'CONCEPTION',
            'prj.1.title': 'Suivi 3D',
            'prj.1.desc':  'Remplacer un système composé de 5 caméras Qualisys pour le laboratoire COSMER. Travail sur la reconnaissance d\'objets YOLO, un système de vision stéréo, la calibration par ArUcos, et le suivi et positionnement 3D en temps réel.',
            'prj.2.label': 'FUSION CAPTEURS',
            'prj.2.title': 'Fusion de Capteurs',
            'prj.2.desc':  'Implémenter un système d\'odométrie visuo-inertielle sur un drone et effectuer un benchmarking d\'algorithmes de fusion.',
            'prj.3.label': 'EMBARQUÉ',
            'prj.3.title': 'Systèmes Embarqués : Commande de Robot Mobile',
            'prj.3.desc':  'Programmation en C d\'un robot mobile autonome : <br>commande moteur, conversions analogique-numérique, télémétrie infrarouge, horodatage et machine à états',
            'prj.4.label': 'ROBOCUP',
            'prj.4.title': 'RoboCup : Planificateur de Trajectoire B-Spline par NN',
            'prj.4.desc':  'Optimisation des trajectoires du robot via un réseau de neurones pour le calcul de courbes de Bézier en Python.',
            'prj.5.label': 'CS GROUP',
            'prj.5.title': 'Optimisation de la Surveillance Maritime',
            'prj.5.desc':  'Projet de groupe combinant traitement d\'images par IA et gestion de données. <br> Mon rôle : conception d\'une table de données en PostgreSQL et d\'une Interface Homme-Machine (IHM).',
            'prj.6.label': 'ROS',
            'prj.6.title': 'Programmation ROS : Turtlebot Autonome',
            'prj.6.desc':  'Navigation autonome et évitement d\'obstacles sous ROS 1 : <br> gestion d\'événements, code Python, intégration du capteur LiDAR.',
            'prj.7.label': 'IHM',
            'prj.7.title': 'Simulateur Dynamique de Véhicule Routier',
            'prj.7.desc':  'Interface interactive pour étudier la cinématique, la dynamique d\'un véhicule et ses critères de stabilité.',
            'prj.8.label': 'MACHINE LEARNING',
            'prj.8.title': 'Machine Learning : Détection de Fraude',
            'prj.8.desc':  'Analyse du jeu de données de transactions par carte bancaire. <br> Méthodes d\'évaluation et explicabilité des modèles.',

            'intern.1.title': 'R&D Secteur Défense',
            'intern.1.desc':  'Lors de ce stage à la <strong>base aéronavale</strong> de Hyères, le centre m\'a confié le développement d\'un <strong>module innovant</strong> pour la <strong>Marine Nationale</strong>. Mon objectif était de concevoir une <strong>infrastructure de test</strong>.<br><br>Cette conception m\'a permis de développer mes connaissances en <strong>modélisation 3D</strong> et de combiner l\'expertise de machinistes et d\'ingénieurs dans des domaines pluridisciplinaires. Cette expérience a été décisive, consolidant mon intérêt pour l\'<strong>ingénierie des systèmes de défense</strong> et l\'<strong>aéronautique militaire</strong>.',

            'intern.2.title': 'R&D Secteurs Robotique et Drones',
            'intern.2.desc':  'Mon rôle était d\'implémenter un système d\'<strong>odométrie visuo-inertielle</strong> sur un drone et d\'effectuer un <strong>benchmarking d\'algorithmes de fusion</strong>. Une plateforme, comprenant un mini-ordinateur Jetson et des capteurs, récupère les topics via une architecture ROS2 pour des algorithmes d\'estimation de pose <strong>EKF, UKF et VIO</strong>.<br><br>Ce projet m\'a permis d\'acquérir une <strong>expérience pratique</strong> du réglage d\'algorithmes de fusion de capteurs. Leur configuration s\'apprend par tests empiriques plutôt que par des cours. J\'ai aussi pu me familiariser avec les <strong>systèmes embarqués pour drones</strong>. Le projet est disponible sur GitHub :<br><a href="https://github.com/timm-clv/SensorFusion/tree/main" target="_blank" rel="noopener noreferrer" style="color: #E13C4C; text-decoration: underline; font-weight: bold;">https://github.com/timm-clv/SensorFusion/tree/main</a>',

            'edu.1.title': 'École d\'Ingénieurs SeaTech &amp; Master RISE <em class="edu-date">2024-2027</em>',
            'edu.1.li1':   'Systémique, électronique, robotique terrestre et marine, systèmes embarqués et IA, fusion de capteurs, commande-contrôle, gestion de projet.',
            'edu.1.li2':   'Mineure Sécurité &amp; Défense : conférences militaires sur l\'innovation technologique et la géostratégie.',
            'edu.1.li3':   'Cours complémentaire en atelier IA : machine learning.',
            'edu.2.title': 'Licence Intensive en Mathématiques (2 ans) <em class="edu-date">2022-2024</em>',
            'edu.cta':     'Certifications \u00b7 Compétences \u00b7 Outils \u00b7 Domaines',

            'ref.1.text': 'Timm est un jeune ingénieur très motivé qui aborde chaque tâche avec enthousiasme. Il prend le temps de comprendre chaque problème et travaille avec persévérance jusqu\'à trouver une solution. Il est fiable, proactif et très agréable à côtoyer.',
            'ref.1.role': 'Chercheur au CRTA',
            'ref.2.text': 'J\'ai travaillé sur de nombreux projets et travaux pratiques avec Timm à SeaTech. C\'est un partenaire très travailleur et fiable sur lequel on peut toujours compter. Son professionnalisme et ses compétences en mécatronique sont de vrais atouts pour n\'importe quelle équipe. Je le recommanderais sans hésiter.',
            'ref.2.role': 'Partenaire de projet',

            'contact.desc':     'Actuellement à la recherche d\'un <strong>stage de 6 mois</strong> à partir de 2027,<br>Ouvert aux opportunités en électronique de puissance, commande-contrôle, ingénierie système, IA pour la robotique et, si possible, une thèse CIFRE en entreprise.',
            'contact.location': 'FRANCE, Toulon',

            'sk.title':        'Compétences & Outils',
            'sk.subtitle':     'Certifications, compétences, outils et domaines d\'application derrière mes projets en robotique, systèmes embarqués et IA.',
            'sk.back':         '\u2190 Portfolio',
            'sk.nav.certs':    'Certifications',
            'sk.nav.skills':   'Compétences',
            'sk.nav.tools':    'Outils',
            'sk.nav.domains':  'Domaines',
            'sk.footer.back':  'Retour au portfolio',

            'sk.div.certs':    'CERTIFICATIONS',
            'sk.div.skills':   'COMPÉTENCES',
            'sk.div.tools':    'OUTILS',
            'sk.div.domains':  'DOMAINES',

            'sk.certs.tab.ml':    'Machine Learning',
            'sk.certs.tab.toeic': 'Anglais \u00b7 TOEIC',

            'sk.certs.ml.lead':     'Machine Learning avec Python \u2014 formations suivies sur Kaggle : introduction à l\'évaluation des données, maîtrise du pipeline et explicabilité des modèles. Appliqué à un jeu de données de détection de transactions frauduleuses par carte bancaire.',
            'sk.certs.ml.c1':       'Intro to Machine Learning',
            'sk.certs.ml.c1.desc':  'Certificat Kaggle.',
            'sk.certs.ml.c2':       'Intermediate Machine Learning',
            'sk.certs.ml.c2.desc':  'Certificat Kaggle.',
            'sk.certs.ml.c3':       'Machine Learning Explainability',
            'sk.certs.ml.c3.desc':  'Certificat Kaggle.',
            'sk.certs.toeic.lead':  'Certification de compétence en langue anglaise.',
            'sk.certs.toeic.level': 'TOEIC \u00b7 NIVEAU B2',

            'sk.skills.core':        'Compétences clés',
            'sk.skills.core.1':      'Analyse systémique',
            'sk.skills.core.2':      'Analyse critique',
            'sk.skills.core.3':      'Remise en question et cohérence physique',
            'sk.skills.core.4':      'Pilotage et gestion d\'agents IA',
            'sk.skills.core.5':      'Résolution de problèmes via réseaux de neurones et machine learning',
            'sk.skills.core.6':      'Expérimentations en fusion de capteurs et odométrie',
            'sk.skills.tech':        'Compétences techniques',
            'sk.skills.soft':        'Compétences humaines',
            'sk.skills.emb.title':   'Systèmes Embarqués',
            'sk.skills.emb.text':    'Système Temps Réel // Microcontrôleurs // Électronique // Optimisation de code',
            'sk.skills.emb.meta':    'Club Robotique, Formation scolaire',
            'sk.skills.robo.title':  'Robotique',
            'sk.skills.robo.text':   'Système ROS (topics, nodes) // Planification de trajectoire // LIDAR // Commande moteur DC',
            'sk.skills.robo.meta':   'Club Robotique, Formation scolaire',
            'sk.skills.ai.title':    'IA',
            'sk.skills.ai.text':     'Détection d\'objets // Réseaux de neurones // PyTorch // Machine Learning',
            'sk.skills.ai.meta':     'Projet personnel, Club Robotique, Formation scolaire',
            'sk.skills.sim.title':   'Simulation',
            'sk.skills.sim.text':    'Gazebo // MatLab // Python // IsaacSim // IsaacLab // MuJoCo',
            'sk.skills.sim.meta':    'Projet personnel, Formation scolaire',
            'sk.skills.team.title':  'Synergie d\'équipe',
            'sk.skills.team.text':   'Communication // Bonne humeur // Investissement // Adaptabilité',
            'sk.skills.team.meta':   'Projets de groupe scolaires',
            'sk.skills.pm.title':    'Gestion de projet',
            'sk.skills.pm.text':     'Autonomie // Gestion du temps // Planification des ressources',
            'sk.skills.pm.meta':     'Expériences en stage',

            'sk.tools.ros2.text':      'Robot Operating System 2 : middleware pour les nodes, topics et pipelines de fusion de capteurs.',
            'sk.tools.isaacsim.text':  'Simulateur robotique NVIDIA pour la simulation physique.',
            'sk.tools.isaaclab.text':  'Framework d\'apprentissage robotique basé sur Isaac Sim.',
            'sk.tools.mujoco.text':    'Moteur physique pour une simulation robotique rapide et précise.',
            'sk.tools.excel.text':     'Tableaux de données corrélées pour aider la reprise d\'un projet.',
            'sk.tools.python.text':    'Analyse de données, construction de trajectoires, réseaux de neurones avec PyTorch / TensorFlow.',
            'sk.tools.cpp.text':       'Gestion mémoire et contrôle matériel pour la robotique.',
            'sk.tools.gazebo.text':    'Linux. Simulateur robotique 3D, moteur physique et modélisation d\'environnement.',
            'sk.tools.matlab.text':    'IHM intégrée. Calcul numérique et développement d\'algorithmes.',
            'sk.tools.simulink.text':  'Environnement de diagrammes blocs pour la simulation et le Model-Based Design. Travail sur bras robotisés \u00ab PUMA \u00bb.',
            'sk.tools.solidworks.text':'Conception assistée par ordinateur (CAO).',
            'sk.tools.latex.text':     'Rédaction de rapports de qualité.',
            'sk.tools.pandas.text':    'Manipulation et analyse de données en Python.',
            'sk.tools.tensorflow.text':'Framework de machine learning pour la construction et l\'entraînement de réseaux de neurones.',

            'sk.domains.lead': 'Les domaines où se rejoignent mes projets, stages et études.',
            'sk.domains.1.title': 'Défense & Sécurité',
            'sk.domains.1.text':  'Mineure Sécurité et Défense. Conférences sur la géostratégie, la cybersécurité, l\'architecture navale\u2026',
            'sk.domains.2.title': 'Robotique Autonome',
            'sk.domains.2.text':  'Planification de trajectoire, évitement d\'obstacles, contrôle système et PID pour la robotique.',
            'sk.domains.3.title': 'Capteurs Intelligents',
            'sk.domains.3.text':  'Fusion de capteurs (LIDAR / IMU / Caméra / Télémètres) et traitement d\'image pour la surveillance maritime.',
            'sk.domains.4.title': 'Aérospatial & Drones',
            'sk.domains.4.text':  'Odométrie visuo-inertielle sur drone et benchmarking d\'algorithmes de fusion de capteurs (stage CRTA).',
            'sk.domains.5.title': 'IA pour la Robotique',
            'sk.domains.5.text':  'Planification de trajectoire par réseau de neurones (RoboCup), machine learning, détection d\'objets.',
            'sk.domains.6.title': 'Systèmes Embarqués & Temps Réel',
            'sk.domains.6.text':  'Programmation en C d\'un robot mobile autonome : commande moteur et contraintes temps réel.',
            'sk.domains.7.title': 'Modélisation & Simulation',
            'sk.domains.7.text':  'Gazebo, Matlab / Simulink, simulateur dynamique de véhicule routier, Isaac Sim, Isaac Lab et MuJoCo.',
            'sk.domains.8.title': 'Commande-Contrôle',
            'sk.domains.8.text':  'Contrôle de vitesse et de cap de robots (PID). Ouvert aux opportunités en électronique de puissance.',
            'sk.domains.9.title': 'R&D & Prototypage',
            'sk.domains.9.text':  'Module innovant pour la Marine nationale conçu en 3D lors du stage CEPA/10S.',
            'sk.domains.10.title': 'Systèmes Marins',
            'sk.domains.10.text':  'Bientôt : solutions de détection pour véhicules sous-marins (ROV / AUV).',

            'ap.title':  'TOUS MES PROJETS',
            'ap.filter.all':      'Tous',
            'ap.filter.robotics': 'Robotique',
            'ap.filter.ai':       'IA & Données',
            'ap.filter.embedded': 'Embarqué',
            'ap.report': 'RAPPORT',
            'ap.notebook': 'Notebook',
            'ap.back': 'Retour au portfolio',
            'ap.copyright': '\u00a9 2025-2026 Timm CLAVERIE-',

            'ap.p1.title': 'Surveillance Maritime CS GROUP',
            'ap.p1.desc':  'Développement d\'une banque d\'images traitées par IA pour optimiser la surveillance. Mon rôle : création de la base de données et de l\'interface homme-machine.',
            'ap.p2.title': 'Plateforme Drone Embarquée',
            'ap.p2.desc':  'Odométrie obtenue via une plateforme de collecte de données visuo-inertielles. Benchmarking de fusion de capteurs. Synchronisation des capteurs. Système sans GPS. Architecture ROS2',
            'ap.p3.title': 'Robot Mobile Autonome',
            'ap.p3.desc':  'Programmation d\'un robot en C pour éviter les obstacles. Travail sur machines à états, conversions analogiques et électronique.',
            'ap.p4.title': 'Programmation d\'un TurtleBot',
            'ap.p4.desc':  'Programmation Python sous ROS/GAZEBO pour un robot. Communication entre nodes via topics.',
            'ap.p5.title': 'Acoustique Sous-Marine',
            'ap.p5.desc':  'Caractérisation de signaux acoustiques sous-marins. Traitement du signal par "produits glissants".',
            'ap.p6.title': 'Simulateur Dynamique de Véhicule Routier',
            'ap.p6.desc':  'Interface interactive pour étudier la cinématique, la dynamique d\'un véhicule et ses critères de stabilité. Objectif : étude des véhicules terrestres.',
            'ap.p7.title': 'Traitement d\'image',
            'ap.p7.desc':  'Vision industrielle, télédétection et cartographie marine avec Python OpenCV',
            'ap.p8.title': 'Trajectoire Spline pour Robots de Compétition',
            'ap.p8.desc':  'Amélioration du déplacement du robot RCT via un calcul de B-Spline embarqué. Modèle Python embarqué recalculé 50 fois par seconde.',
            'ap.p9.title': 'Détection de Fraude',
            'ap.p9.desc':  'Analyse du jeu de données de transactions par carte bancaire. Machine learning, méthodes d\'évaluation et explicabilité des modèles.',
            'ap.p10.title': 'Suivi 3D',
            'ap.p10.desc':  'Travail sur la reconnaissance d\'objets YOLO, un système de vision stéréo, la calibration par ArUcos, et le suivi et positionnement 3D en temps réel.'
        }
    };

    /* ------------------------------------------------------------------
       LANGUE PAR DÉFAUT = ANGLAIS
       ------------------------------------------------------------------ */
    let stored = localStorage.getItem('lang');
    let currentLang = (stored === 'fr' || stored === 'en') ? stored : 'en';

    function syncLoaderMessages(lang) {
        if (!window.__loaderMessages || !translations[lang] || !translations[lang]['loader.messages']) return;
        const msgs = translations[lang]['loader.messages'];
        window.__loaderMessages.length = 0;
        msgs.forEach(m => window.__loaderMessages.push(m));
    }

    function applyLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        const dict = translations[lang];

        // 1) textContent (pour les labels visibles : .hud-label, nav, sous-titres…)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && dict[key] !== undefined) el.textContent = dict[key];
        });

        // 2) innerHTML (paragraphes avec <span>/<strong>/<br>…)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (key && dict[key] !== undefined) el.innerHTML = dict[key];
        });

        // 3) HUD cards : attribut data-title (utilisé par main.js au clic)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (key && dict[key] !== undefined) el.setAttribute('data-title', dict[key]);
        });

        // 4) HUD cards : attribut data-desc (utilisé par main.js au clic)
        document.querySelectorAll('[data-i18n-desc]').forEach(el => {
            const key = el.getAttribute('data-i18n-desc');
            if (key && dict[key] !== undefined) el.setAttribute('data-desc', dict[key]);
        });

        // 5) Compat : attributs génériques "attr1:key1,attr2:key2"
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            spec.split(',').forEach(pair => {
                const parts = pair.split(':');
                if (parts.length < 2) return;
                const attr = parts[0].trim();
                const key  = parts.slice(1).join(':').trim();
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });

        // 6) Si un projet est actuellement affiché, on met à jour le popup en direct
        const activeCard = document.querySelector('.hud-card.active');
        const screenTitle = document.getElementById('screen-title');
        const screenDesc  = document.getElementById('screen-desc');
        if (activeCard && screenTitle && activeCard.classList.contains('active')) {
            // On ne réécrit que si le popup est ouvert (display != none)
            const layer = document.getElementById('tactical-content-layer');
            if (layer && layer.style.display !== 'none') {
                const t = activeCard.getAttribute('data-title');
                const d = activeCard.getAttribute('data-desc');
                if (t) screenTitle.innerText = t;
                if (d && screenDesc) screenDesc.innerHTML = d;
            }
        }

        syncLoaderMessages(lang);

        document.querySelectorAll('.btn-lang').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    window.setLanguage = applyLanguage;
    window.getLanguage = () => currentLang;

    syncLoaderMessages(currentLang);

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.btn-lang').forEach(btn => {
            btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
        });
        applyLanguage(currentLang);
    });
})();