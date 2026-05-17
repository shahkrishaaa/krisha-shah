const portfolioData = {
    // Personal Details
    name: "KRISHA SHAH",
    role: "Data Analyst",
    microline: "Dashboarding | Automation | Gen AI",
    heroImage: "resources/assets/hero/krishaaaa.jpg",
    resumeLink: "resources/assets/docs/K resume.pdf",
    email: "shahkrishaaa13@gmail.com",

    bio: "✔ Transform complex data into insights that improve reporting efficiency. " +
        "<br>✔ Build automated dashboards using Python, SQL, and Power BI. " +
        "<br>✔ Streamline analytical workflows using Gen AI. " +
        "<br>✔ Identify trends to support faster and smarter business decisions. ",

    // Social Links
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/shahkrishaaa/",
        github: "https://github.com/shahkrishaaa",
        email: "mailto:shahkrishaaa13@gmail.com"
    },


    // About Me
    about: {
        domains: [{
                title: "Data Analyst",
                illustration: "resources/assets/images/expertise_data.png",
                techIcons: ["database", "table", "bar-chart-2", "layout", "code"],
                bullets: [
                    "Performed data cleaning and exploratory analysis on real-world datasets.",
                    "Automated data processing and reporting using Python and SQL.",
                    "Built interactive dashboards for data visualization and insights.",
                    "Applied statistical techniques to identify trends and support decision-making."
                ]
            },
            {
                title: "Generative AI & Prompting",
                illustration: "resources/assets/images/expertise_ai.png",
                techIcons: ["brain", "message-square", "shield-check", "edit-3", "check-circle"],
                bullets: [
                    "Completed 500+ RLHF and SFT evaluation tasks for LLM outputs.",
                    "Evaluated responses on truthfulness, reasoning, safety, and instruction adherence.",
                    "Performed side-by-side (SxS) comparisons and provided structured feedback.",
                    "Applied prompt engineering to improve response quality and consistency.",
                    "Identified failure patterns and suggested improvements for model responses."
                ]
            }
        ]
    },

    // Education
    education: [{
            badge: "MBIT",
            institution: "Madhuben And Banubhai Institute of Technology",
            years: "2023–2027",
            degree: "B.Tech in Computer Engineering",
            location: "Anand, Gujarat",
            score: "8.61",
            scoreLabel: "CGPA",
            tag: "Computer Engineering",
            description: "Specializing in Data Science and Big Data",
            logo: "resources/assets/images/mbit.png",
            website: "https://www.mbit.edu.in/"
        },
        // {
        //     badge: "TACT",
        //     institution: "Trident Academy of Creative Technology",
        //     years: "2018–2021",
        //     degree: "Bachelor of Computer Applications",
        //     location: "BBSR, Odisha",
        //     score: "7.47",
        //     scoreLabel: "CGPA",
        //     tag: "Computer Application",
        //     description: "Foundational programming and database management",
        //     logo: "resources/assets/icons/trident-logo.webp",
        //     website: "https://tact.ac.in/"
        // },
        {
            badge: "XII",
            institution: "L.P. Savani High School",
            years: "2021–2023",
            degree: "Higher Secondary Examination",
            location: "Surat, Gujarat",
            score: "Passed",
            scoreLabel: "",
            tag: "Science",
            description: "",
            logo: "resources/assets/images/lps.jpg",
            website: "https://lpsavani.org/"
        }
    ],

    // Experience
    experience: [{
            role: "Computer Vision Intern",
            company: "Insignex",
            location: "Remote",
            duration: "May 2026 – Jun 2026",
            type: "Internship",
            // metrics: [{
            //         val: "85%+",
            //         label: "Accuracy"
            //     },
            //     {
            //         val: "2",
            //         label: "ML Models"
            //     }
            // ],
            techStack: ["Python", "Django", "Numpy", "OpenCV", "HTML/CSS"],
            description: "Working as a Trainee Intern at Insignex on a Real-Time Image Processing project using Django. Gaining hands-on experience in backend development, real-time processing workflows, and industry-level problem solving focused on image and video processing technologies."
        },
        {
            role: "Vice Chairperson - IEEE WIE",
            company: "MBIT IEEE Student Branch",
            location: "Anand, Gujarat",
            duration: "March 2024 – Present",
            type: "Administrative Volunteer",
            // metrics: [{
            //         val: "500+",
            //         label: "Tasks done"
            //     },
            //     {
            //         val: "95%",
            //         label: "Accuracy"
            //     }
            //],
            techStack: ["Leadership", "Event Management", "Team Collaboration", "Public Speaking", "Technical Coordination", "Community Engagement"],
            description: "Serving as the Vice Chairperson of IEEE Women in Engineering (WIE) at MBIT-CVM University, collaborating with a passionate team to organize impactful initiatives, promote innovation, and empower women in technology through leadership, teamwork, and community engagement."
        },
    //     {
    //         role: "Junior Data Analyst",
    //         company: "Landmine Soft",
    //         location: "Hyderabad, India",
    //         duration: "Feb 2023 – Mar 2024",
    //         type: "Full Time",
    //         metrics: [{
    //                 val: "5+",
    //                 label: "Ad-hoc reports delivered"
    //             },
    //             {
    //                 val: "20%",
    //                 label: "Reduction in query runtime"
    //             }
    //         ],
    //         techStack: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Data Cleaning", "Data Visualization"],
    //         description: "Owned the end-to-end data scrubbing and validation process " +
    //             "for raw datasets, ensuring 100% data integrity before senior-level analysis."
    //     },
    //     {
    //         role: "Data Analyst",
    //         company: "Landmine Soft",
    //         location: "Hyderabad, India",
    //         duration: "Apr 2024 – Present",
    //         type: "Full Time",
    //         metrics: [{
    //                 val: "10+",
    //                 label: "Dashboards built"
    //             },
    //             {
    //                 val: "1M+",
    //                 label: "Records analyzed"
    //             }
    //         ],
    //         techStack: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Data Cleaning", "Data Visualization"],
    //         description: "Analyzed large datasets using Python (Pandas, NumPy) and SQL to extract actionable insights. " +
    //             "Built interactive Power BI dashboards and automated reporting processes, reducing manual " +
    //             "effort by 30%. Performed data cleaning, transformation, and exploratory data analysis (EDA) " +
    //             "to support business decision-making."
    //     }
    ],

    // Projects
    projects: [{
            title: "CampusEase",
            description: "An all-in-one smart campus app for attendance, navigation, notices, schedules, and student utilities.",
            keyInsight: "One app improves student productivity",
            problem: "Students face scattered campus information and inefficient daily management.",
            // dataset: "10,000+ historical Uber ride records containing timestamps, pickup/drop-off locations, and trip statuses.",
            approach: [
                "Built a centralized mobile platform with real-time features and role-based access for students and faculty.",
                "Integrated real-time updates and role-based access",
                "Simplified navigation and student daily task management"
            ],
            businessImpact: "Enhances campus efficiency, communication, and overall student experience.",
            techStack: ["Flutter", "PostgresSQL", "Node JS"],
            category: "Mobile Development",
            image: "resources/assets/images/campusease.png",
            codeLink: "https://github.com/shahkrishaaa/CAMPUSEASE",
            demoLink: "https://nbviewer.org/github/somenathsau/CodeClause-data-science-internship/blob/main/Project%203%20-%20Uber%20Data%20Analysis/Uber%20data%20analysis.ipynb"
        },
        {
            title: "Image Processing using Django",
            description: "Developed an image processing application using Django framework, enabling efficient image manipulation and analysis.",
            keyInsight: "Real-time automation improves processing speed and accuracy",
            problem: "Slow and inefficient image processing workflows hinder productivity and accuracy in handling large volumes of images.",
            // dataset: "Large-scale image dataset containing various object categories for training and testing.",
            approach: [
                "Developed backend workflows using Django",
                "Integrated real-time image processing pipelines",
                "Optimized processing and data handling performance",
              
            ],
            businessImpact: "Provided a data-driven foundation for predictive policing strategies, enabling more targeted patrol deployments in high-risk zones.",
            techStack: ["Python", "Django", "OpenCV", "HTML/CSS"],
            category: "Computer Vision",
            image: "resources/assets/images/imagerec.png",
            codeLink: "https://github.com/Insignexs/cw2604_web_img_proc",
            demoLink: "https://nbviewer.org/github/somenathsau/Crime_Report_in_India_2013/blob/main/Crime_Report_Analysis_2013.ipynb"
        },
        // {
        //     title: "AI-Assisted Portfolio Website",
        //     description: "Developed a responsive developer portfolio using AI-assisted development (Vibe Coding) and automated workflows.",
        //     keyInsight: "AI tools reduced boilerplate coding time by 60%.",
        //     problem: "Building a portfolio from scratch is time-consuming and requires managing complex deployment and contact workflows.",
        //     dataset: "N/A - Software Engineering Project",
        //     approach: [
        //         "Utilized LLMs for rapid prototyping and CSS grid generation.",
        //         "Implemented Google Forms backend to bypass need for custom email servers.",
        //         "Focused on Semantic HTML and accessibility standard compliance."
        //     ],
        //     businessImpact: "Created a highly professional, zero-maintenance lead generation funnel for job opportunities.",
        //     techStack: ["AI-Assisted Dev", "Automation", "HTML/CSS", "JavaScript"],
        //     category: "AI",
        //     image: "resources/assets/images/portfolio-home.webp",
        //     codeLink: "https://github.com/somenathsau/somenathsau.github.io",
        //     demoLink: "https://somenathsau.github.io"
        // },
        // {
        //     title: "AWS EC2 Cloud Monitoring Tool",
        //     description: "Developed a cloud-based monitoring solution on Amazon EC2 to track server resource usage and automate alerts.",
        //     keyInsight: "Automated alerts reduced incident response time by over 40%.",
        //     problem: "Manual server monitoring leads to delayed responses to resource exhaustion, causing unexpected downtime.",
        //     dataset: "Real-time system telemetry (CPU, RAM, Disk I/O).",
        //     approach: [
        //         "Wrote Bash scripts to capture system metrics every 5 minutes.",
        //         "Configured Cron jobs for automated data extraction.",
        //         "Integrated with AWS CloudWatch for persistent logging and threshold alerts."
        //     ],
        //     businessImpact: "Ensured 99.9% uptime by enabling proactive scaling before server crashes occur.",
        //     techStack: ["AWS EC2", "Bash Scripting", "Cron Schedular", "CloudWatch"],
        //     category: "Cloud",
        //     image: "resources/assets/images/AWS_monitoring.webp",
        //     codeLink: "https://github.com/somenathsau/AWS-EC2-Cloud-Monitoring-Tool",
        //     demoLink: "https://cloudwatch.amazonaws.com/dashboard.html?dashboard=ResourceUsage&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTQ0MzUxMTA0OTQ2OCIsIlUiOiJ1cy1lYXN0LTFfcTJsRVB0cm5KIiwiQyI6IjIxZmw2bHE1b3VmdTBsZnIwdjQyM3ZidmJmIiwiSSI6InVzLWVhc3QtMTpiZTkyOTA5Ny00ZTYyLTQ3OWMtOWIzNi05ZmZmN2U1YmE5YzAiLCJNIjoiUHVibGljIn0="
        // }
        /*{
            title: "Speech Emotion Recognition",
            description: "Developed a Speech Emotion Recognition model using audio feature extraction, achieving 88%+ classification accuracy.",
            techStack: ["Python", "Matplotlib", "PyAudio"],
            image: "resources/assets/images/speech_emotion.jpg",
            codeLink: "#",
            demoLink: "#"
        }*/

    ],

    // Skills Section
    skills: [{
            category: "Data Analytics",
            tier: "primary",
            items: [{
                    name: "🐍 Python"
                },
                {
                    name: "🗄 SQL"
                },
                {
                    name: "🐼 Pandas"
                },
                {
                    name: "📈 Excel"
                },
                {
                    name: "📊 Power BI"
                },
                {
                    name: "📉 Matplotlib"
                }
            ]
        },
        {
            category: "Generative AI",
            tier: "competitive",
            items: [{
                    name: "🤖 RLHF Evaluation"
                },
                {
                    name: "🧠 Prompt Engineering"
                },
                {
                    name: "🎯 Response Evaluation"
                },
                {
                    name: "🛡️ Safety Review"
                }
            ]
        },
        {
            category: "Tools & Technologies",
            tier: "supporting",
            items: [{
                    name: "🌿 Git & GitHub"
                },
                {
                    name: "📓 Jupyter Notebook"
                },
                {
                    name: "💻 VS Code"
                },
                {
                    name: "🐬 MySQL"
                }
            ]
        },
        {
            category: "Additional Skills",
            tier: "basic",
            items: [{
                    name: "🌐 HTML 5"
                },
                {
                    name: "🎨 CSS 3"
                }
            ]
        }
    ],

    // Certifications
    certifications: [{
            title: "AI Dashboards with Power BI",
            issuer: "Skill Nation",
            year: "July 2025",
            credentialLink: "https://www.linkedin.com/posts/shahkrishaaa_powerbi-aiindata-datavisualization-activity-7355556663631695872-ZfWm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUxtmsBDkmW0f2IqRaTpPRf84MJtgOs1Ek" // Replace with actual link
        },
        {
            title: "Power BI Workshop for Data Analysts",
            issuer: "Office Master",
            year: "July 2025",
            credentialLink: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61518406" // Replace with actual link
        },
        //{
        //     title: "Commonwealth Bank - Introduction to Data Science Job Simulation",
        //     issuer: "Forage",
        //     year: "May 2025",
        //     credentialLink: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_cYkMuanGSYDTrvMry_1747032386986_completion_certificate.pdf" // Replace with actual link
        // },
        // {
        //     title: "Cognizant - Artificial Intelligence Job Simulation",
        //     issuer: "Forage",
        //     year: "June 2024",
        //     credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_cYkMuanGSYDTrvMry_1718646885974_completion_certificate.pdf" // Replace with actual link
        // },
        {
            title: "AWS Academy Cloud Foundations",
            issuer: "Amazon Web Services (AWS)",
            year: "March 2026",
            credentialLink: "https://www.credly.com/badges/f7d439f2-a52f-4060-8066-eedc65cdb5c4/public_url" // Replace with actual link
        }
    ]
};