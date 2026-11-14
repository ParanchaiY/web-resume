export class ResumeModel {
    constructor() {
        // ===== ข้อมูลทั้งสองภาษา =====
        this._profile = {
            th: {
                name: "ปรัญชัย แย้มสอาด",
                title: "IT Support | Technical Support | Helpdesk",
                email: "py.paranchai@gmail.com",
                phone: "+66 95-148-6783",
                location: "ระยอง, ไทย",
                militaryStatus: "ผ่านการเกณฑ์ทหารแล้ว (สำเร็จการศึกษาวิชาทหาร รด. ปี 3)",
                summary: "บัณฑิตสาขาวิศวกรรมซอฟต์แวร์จากมหาวิทยาลัยบูรพา มีพื้นฐานด้านระบบคอมพิวเตอร์ การพัฒนาเว็บไซต์ และการแก้ไขปัญหาทางเทคนิคเบื้องต้น มีประสบการณ์ในการจัดการข้อมูล จัดทำเอกสาร ดูแลอุปกรณ์คอมพิวเตอร์ และสนับสนุนการดำเนินงานภายในโครงการ ปัจจุบันมุ่งเน้นการพัฒนาความรู้ด้าน IT Support, Computer Hardware, Networking และ Operating Systems อย่างต่อเนื่อง พร้อมเรียนรู้เทคโนโลยีใหม่และพัฒนาทักษะเพื่อเติบโตในสายงาน IT Support และ Technical Support",
                coreCompetencies: [
                    "ทำงานด้านเอกสารและสื่อนำเสนอ (Microsoft Office)",
                    "ออกแบบและตัดต่อภาพกราฟิก (Adobe Photoshop)",
                    "เขียนและดูแลหน้าเว็บเบื้องต้น (HTML, CSS, พื้นฐาน PHP/JS)",
                    "ช่วยเหลือและสนับสนุนผู้ใช้งานเบื้องต้น",
                    "มีพื้นฐานความรู้ด้านซอฟต์แวร์และการแก้ปัญหา",
                    "กำลังศึกษาระบบปฏิบัติการ เครือข่าย และทักษะ IT Support เพิ่มเติม"
                ],
                skills: [
                    { category: "HARDWARE & HELPDESK (BASIC / SELF-STUDY)", items: "PC/Laptop Assembly, Basic Diagnostics, Peripheral Setup, User Support, Helpdesk Troubleshooting" },
                    { category: "OPERATING SYSTEMS (BASIC / SELF-STUDY)", items: "Windows 10/11, Windows Installation, Windows Maintenance, Linux Command Line" },
                    { category: "NETWORKING (BASIC / SELF-STUDY)", items: "TCP/IP, LAN/Wi-Fi Configuration, Network Troubleshooting, DNS, DHCP, IP Configuration" },
                    { category: "IT SUPPORT TOOLS (BASIC / SELF-STUDY)", items: "Remote Desktop, AnyDesk, TeamViewer, Active Directory (Basic), Command Prompt, PowerShell (Basic)" },
                    { category: "OFFICE PRODUCTIVITY", items: "Microsoft Word, Microsoft Excel, Microsoft PowerPoint" },
                    { category: "ADDITIONAL TECHNICAL SKILLS", items: "Adobe Photoshop, HTML5, CSS3, PHP (Basic), JavaScript (Basic), SQL (Basic), Git/GitHub" }
                ],
                experience: [
                    {
                        role: "IT Support & Digital Services (Self-Learning)",
                        company: "การพัฒนาทักษะด้านไอที",
                        period: "ก.ย. 2567 – ปัจจุบัน",
                        details: [
                            "ศึกษาและฝึกปฏิบัติด้าน Computer Hardware และ IT Support",
                            "ฝึกติดตั้ง ดูแล และแก้ไขปัญหาการใช้งาน Windows 10/11",
                            "ศึกษาการใช้งานเครื่องมือ Remote Support และ Active Directory เบื้องต้น",
                            "พัฒนาความรู้ด้าน Linux Command Line และ Network Fundamentals",
                            "ศึกษาความรู้ด้าน Cybersecurity และ Network Security เพื่อเพิ่มทักษะด้านเทคโนโลยีสารสนเทศ"
                        ]
                    },
                    {
                        role: "Web Programmer (Fixed-term Contract)",
                        company: "บริษัท ซอร์ด ดิจิทัล แอนด์ คอนซัลแตนท์ จำกัด (Sword Digital & Consultant Co., Ltd.)",
                        period: "ม.ค. 2567 – ส.ค. 2567",
                        details: [
                            "ปฏิบัติงานตามสัญญาจ้างโครงการ (Project-based Contract) พัฒนาและดูแลรักษา Web Application",
                            "วิเคราะห์และแก้ไขปัญหาทางเทคนิค (Troubleshooting & Debugging) ทั้งในส่วนระบบและหน้าเว็บให้ผู้ใช้งาน",
                            "ทดสอบการทำงานของระบบ (System Testing) และประสานงานร่วมกับทีมพัฒนาเพื่อปรับปรุงประสิทธิภาพการใช้งาน"
                        ]
                    },
                    {
                        role: "IT Skill Development & Self-Study",
                        company: "การศึกษาและพัฒนาทักษะด้านเทคโนโลยีสารสนเทศด้วยตนเอง",
                        period: "ม.ค. 2565 – ธ.ค. 2566",
                        details: [
                            "ฝึกฝนการซ่อม แก้ไขปัญหา Hardware/Software และติดตั้งระบบปฏิบัติการ Windows บนคอมพิวเตอร์ส่วนบุคคล",
                            "จัดการงานเอกสาร ข้อมูล และสื่อนำเสนอด้วย Microsoft Office (Word, Excel, PowerPoint)",
                            "ฝึกตัดต่อ ตกแต่งภาพ และออกแบบสื่อกราฟิกพื้นฐานด้วย Adobe Photoshop",
                            "ศึกษาค้นคว้าและพัฒนาความรู้ด้าน Web Development, Networking พื้นฐาน และเครื่องมือ IT Support ด้วยตนเอง"
                        ]
                    },
                    {
                        role: "เจ้าหน้าที่ปฏิบัติงานโครงการ (Project Staff)",
                        company: "โครงการ 1 ตำบล 1 มหาวิทยาลัย (U2T) — กระทรวงการอุดมศึกษาฯ (MHESI)",
                        period: "มี.ค. 2564 – ธ.ค. 2564",
                        details: [
                            "สนับสนุนการจัดเก็บและบริหารจัดการข้อมูลภายในโครงการ",
                            "ให้ความช่วยเหลือด้านเทคโนโลยีและแก้ไขปัญหาการใช้งานคอมพิวเตอร์เบื้องต้น",
                            "จัดทำเอกสาร รายงาน และสรุปผลการดำเนินงานด้วย Microsoft Office",
                            "ดูแลอุปกรณ์คอมพิวเตอร์และอุปกรณ์ที่ใช้ในโครงการ",
                            "ออกแบบและตกแต่งสื่อประชาสัมพันธ์ด้วย Adobe Photoshop"
                        ]
                    }
                ],
                education: {
                    degree: "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิชาวิศวกรรมซอฟต์แวร์",
                    faculty: "คณะวิทยาการสารสนเทศ",
                    university: "มหาวิทยาลัยบูรพา",
                    period: "2559 – 2563"
                },
                languages: [
                    { name: "ภาษาไทย", level: "แม่นยำ (Native)" },
                    { name: "ภาษาอังกฤษ", level: "พื้นฐาน (Basic)" }
                ],
                professionalDevelopment: [
                    "ศึกษา Cybersecurity ผ่านแพลตฟอร์ม CTF",
                    "ศึกษา Linux Administration",
                    "ศึกษา Network Security เบื้องต้น",
                    // "ศึกษาพื้นฐาน QA Testing และ Software Testing",
                    "พัฒนาความรู้ด้าน IT Support และ Technical Support อย่างต่อเนื่อง",
                    "ศึกษาพื้นฐาน Windows Server Administration",
                    "ฝึกใช้งาน VirtualBox / VMware (Basic)"
                ]
            },
            en: {
                name: "Paranchai Yaemsod",
                title: "IT Support | Technical Support | Helpdesk",
                email: "py.paranchai@gmail.com",
                phone: "+66 95-148-6783",
                location: "Rayong, Thailand",
                militaryStatus: "Completed military service (ROTC, Year 3)",
                summary: "Bachelor of Science in Software Engineering from Burapha University with a foundation in computer systems, web development, and basic technical troubleshooting. Experienced in documentation, data management, computer equipment support, and project coordination. Continuously developing knowledge in IT Support, computer hardware, networking, and operating systems while seeking opportunities to build a professional career in IT Support and Technical Support roles.",
                coreCompetencies: [
                    "Documentation & Presentations (Microsoft Office)",
                    "Graphic Design & Image Editing (Adobe Photoshop)",
                    "Basic Web Page Development & Maintenance (HTML, CSS, Basic PHP/JS)",
                    "Basic User Assistance & Support",
                    "Fundamental Software Knowledge & Troubleshooting",
                    "Currently building skills in OS, Networking & IT Support"
                ],
                skills: [
                    { category: "HARDWARE & HELPDESK (BASIC / SELF-STUDY)", items: "PC/Laptop Assembly, Basic Diagnostics, Peripheral Setup, User Support, Helpdesk Troubleshooting" },
                    { category: "OPERATING SYSTEMS (BASIC / SELF-STUDY)", items: "Windows 10/11, Windows Installation, Windows Maintenance, Linux Command Line" },
                    { category: "NETWORKING (BASIC / SELF-STUDY)", items: "TCP/IP, LAN/Wi-Fi Configuration, Network Troubleshooting, DNS, DHCP, IP Configuration" },
                    { category: "IT SUPPORT TOOLS (BASIC / SELF-STUDY)", items: "Remote Desktop, AnyDesk, TeamViewer, Active Directory (Basic), Command Prompt, PowerShell (Basic)" },
                    { category: "OFFICE PRODUCTIVITY", items: "Microsoft Word, Microsoft Excel, Microsoft PowerPoint" },
                    { category: "ADDITIONAL TECHNICAL SKILLS", items: "Adobe Photoshop, HTML5, CSS3, PHP (Basic), JavaScript (Basic), SQL (Basic), Git/GitHub" }
                ],
                experience: [
                    {
                        role: "IT Support & Digital Services (Self-Learning)",
                        company: "IT Skill Development",
                        period: "Sep 2024 – Present",
                        details: [
                            "Continuously developing IT Support, computer hardware, and troubleshooting skills through self-study and hands-on practice.",
                            "Practicing Windows installation, configuration, and basic system maintenance.",
                            "Learning fundamental networking concepts including TCP/IP, DNS, DHCP, and network troubleshooting.",
                            "Studying Linux administration, cybersecurity fundamentals, and IT support tools.",
                            "Assisting with basic computer-related issues and technical support for personal and community use."
                        ]
                    },
                    {
                        role: "Web Programmer (Fixed-term Contract)",
                        company: "Sword Digital & Consultant Co., Ltd.",
                        period: "Jan 2024 – Aug 2024",
                        details: [
                            "Developed and maintained Web Applications under project-based contracts",
                            "Analyzed and resolved technical issues (Troubleshooting & Debugging) for both backend and frontend systems",
                            "Performed System Testing and coordinated with the development team to improve application performance"
                        ]
                    },
                    {
                        role: "IT Skill Development & Self-Study",
                        company: "Self-Learning & Personal Skill Development",
                        period: "Jan 2022 – Dec 2023",
                        details: [
                            "Practiced hardware and software troubleshooting on personal computers.",
                            "Installed and configured Windows operating systems.",
                            "Developed proficiency in Microsoft Office applications for documentation and reporting.",
                            "Practiced basic graphic design and image editing using Adobe Photoshop.",
                            "Studied web development concepts, networking fundamentals, and IT support tools through self-learning."
                        ]
                    },
                    {
                        role: "Project Staff",
                        company: "One Tambon One University (U2T) Project — Ministry of Higher Education, Science, Research and Innovation (MHESI)",
                        period: "Mar 2021 – Dec 2021",
                        details: [
                            "Supported data collection and information management activities within the project.",
                            "Provided basic technology and computer usage assistance.",
                            "Prepared reports, documentation, and presentations using Microsoft Office.",
                            "Assisted in maintaining basic IT equipment used in project activities.",
                            "Designed and edited promotional materials using Adobe Photoshop."
                        ]
                    }
                ],
                education: {
                    degree: "Bachelor of Science (B.Sc.) in Software Engineering",
                    faculty: "Faculty of Informatics",
                    university: "Burapha University",
                    period: "2016 – 2020"
                },
                languages: [
                    { name: "Thai", level: "Native" },
                    { name: "English", level: "Basic (Technical reading)" }
                ],
                professionalDevelopment: [
                    "Cybersecurity Fundamentals (CTF Learning Platforms)",
                    "Linux Administration Fundamentals",
                    "Network Security Fundamentals",
                    // "Software Testing & QA Fundamentals",
                    "IT Support and Helpdesk Self-Learning",
                    "Windows Server Fundamentals",
                    "VirtualBox / VMware (Basic)"
                ]
            }
        };

        // ===== Labels (หัวข้อ) ทั้งสองภาษา =====
        this._labels = {
            th: {
                contact: "ข้อมูลติดต่อ",
                skills: "ทักษะความสามารถ",
                education: "การศึกษา",
                languages: "ภาษา",
                military: "สถานะทหาร",
                summary: "สรุปคุณวุฒิ",
                competencies: "ความสามารถพื้นฐาน",
                experience: "ประสบการณ์ทำงาน",
                development: "การพัฒนาตนเองอย่างต่อเนื่อง",
                printBtn: "ดาวน์โหลด / พิมพ์เป็น PDF",
                footer: "© 2569 Built with Vanilla JS (OOP/MVC Architecture) | Hosted on Cloudflare Pages"
            },
            en: {
                contact: "Contact",
                skills: "Technical Skills",
                education: "Education",
                languages: "Languages",
                military: "Military Status",
                summary: "Professional Summary",
                competencies: "Foundational Skills",
                experience: "Work Experience",
                development: "Professional Development",
                printBtn: "Download / Print as PDF",
                footer: "© 2026 Built with Vanilla JS (OOP/MVC Architecture) | Hosted on Cloudflare Pages"
            }
        };
    }

    getResumeData(lang = "th") {
        const language = this._profile[lang] ? lang : "th";
        return {
            ...this._profile[language],
            labels: this._labels[language],
            currentLang: language
        };
    }
}
