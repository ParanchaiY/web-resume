export class ResumeModel {
    constructor() {
        // ===== ข้อมูลทั้งสองภาษา =====
        this._profile = {
            th: {
                name: "ปรัญชัย แย้มสอาด",
                title: "IT Support Specialist",
                email: "py.paranchai@gmail.com",
                phone: "095-148-6783",
                location: "ระยอง, ไทย",
                militaryStatus: "ผ่านการเกณฑ์ทหารแล้ว (สำเร็จการศึกษาวิชาทหาร รด. ปี 3)",
                summary: "บัณฑิตวิศวกรรมซอฟต์แวร์ (วท.บ.) มหาวิทยาลัยบูรพา มีประสบการณ์กว่า 3 ปีในการดูแลระบบคอมพิวเตอร์ แก้ไขปัญหา Hardware / Software / Network และพัฒนา Web Application เชี่ยวชาญการ Troubleshooting, การติดตั้งบำรุงรักษาระบบ Windows, การสนับสนุนผู้ใช้งาน (Helpdesk), และการจัดทำเอกสาร พร้อมนำความรู้ด้านการเขียนโปรแกรมและการแก้ปัญหาเชิงวิศวกรรมมาประยุกต์ใช้ในการดูแลระบบ IT Support ขององค์กรได้อย่างมีประสิทธิภาพ",
                coreCompetencies: [
                    "การสนับสนุนผู้ใช้งานและแก้ไขปัญหา (Helpdesk & User Support)",
                    "การซ่อมบำรุงและติดตั้งฮาร์ดแวร์คอมพิวเตอร์ (Hardware Maintenance)",
                    "การดูแลระบบปฏิบัติการ Windows และ Linux เบื้องต้น (OS Administration)",
                    "การแก้ไขปัญหาเครือข่ายและการตั้งค่าเครือข่าย (Network Troubleshooting)",
                    "การพัฒนาและบำรุงรักษา Web Application (Web Development)",
                    "การจัดทำเอกสารและสื่อประชาสัมพันธ์ (Documentation & Graphic Design)"
                ],
                skills: [
                    { category: "Hardware & Helpdesk", items: "PC/Laptop Assembly, Hardware Diagnostics, Peripheral Setup, User Support, Helpdesk Troubleshooting" },
                    { category: "Operating Systems", items: "Windows 10/11, Windows Server (Basic), Linux Command Line, System Maintenance" },
                    { category: "Networking", items: "TCP/IP, LAN/Wi-Fi Configuration, Router/Switch Setup, Network Troubleshooting, IP Config" },
                    { category: "Software & Web Tech", items: "HTML5, PHP, CSS3, JavaScript (ES6+ / OOP / MVC), SQL, Git/GitHub, VS Code" },
                    { category: "Office & Graphic Tools", items: "Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Adobe Photoshop, Image Editing" },
                    { category: "Tools & Utilities", items: "Remote Desktop (AnyDesk/TeamViewer), Active Directory (Basic), CMD/PowerShell" }
                ],
                experience: [
                    {
                        role: "IT Support & Digital Services (Freelance / Self-Employed)",
                        company: "งานบริการอิสระด้านไอทีและสื่อดิจิทัล",
                        period: "ก.ย. 2567 – ปัจจุบัน",
                        details: [
                            "รับดูแล ซ่อมบำรุง และแก้ไขปัญหาคอมพิวเตอร์ Hardware/Software พื้นฐานให้กับลูกค้าทั่วไปและร้านค้าขนาดเล็ก",
                            "จัดทำและตรวจทานเอกสารรายงาน สรุปข้อมูล โดยใช้ Microsoft Office (Word, Excel, PowerPoint)",
                            "รับออกแบบ ตกแต่ง และตัดต่อภาพกราฟิกสำหรับสื่อออนไลน์ด้วย Adobe Photoshop ตามโจทย์ของผู้ใช้บริการ",
                            "พัฒนาและศึกษาเรียนรู้เทคโนโลยีใหม่ๆ ด้าน Web Application และระบบ IT Support เพื่ออัปเดตทักษะอย่างต่อเนื่อง"
                        ]
                    },
                    {
                        role: "Web Programmer (Fixed-term Contract)",
                        company: "บริษัท ซอร์ด ดิจิทัล แอนด์ คอนซัลแตนท์ จำกัด (Sword Digital & Consultant Co., Ltd.)",
                        period: "ม.ค. 2567 – ส.ค. 2567",
                        details: [
                            "ปฏิบัติงานตามสัญญาจ้างโครงการ (Project-based Contract) พัฒนาและดูแลรักษา Web Application",
                            "วิเคราะห์และแก้ไขปัญหาทางเทคนิค (Troubleshooting & Debugging) ทั้งในส่วนระบบและหน้าเว็บให้ผู้ใช้งาน",
                            "ทดสอบการทำงานของระบบ (System Testing) และประสานงานร่วมกับทีมพัฒนาเพื่อปรับปรุงประสิทธิภาพการใช้งาน",
                            "ประยุกต์ใช้แนวคิด Clean Code และโครงสร้างระบบเพื่อรองรับการขยายตัวของแอปพลิเคชัน"
                        ]
                    },
                    {
                        role: "IT Support & Freelance Computer Services",
                        company: "รับงานอิสระและบริการด้านไอที (Freelance / Self-Employed)",
                        period: "ม.ค. 2565 – ธ.ค. 2566",
                        details: [
                            "ให้บริการรับซ่อม แก้ไขปัญหา Hardware/Software และลงระบบปฏิบัติการ Windows สำหรับคอมพิวเตอร์ส่วนบุคคล",
                            "จัดการงานเอกสาร ข้อมูล และสื่อนำเสนอด้วย Microsoft Office (Word, Excel, PowerPoint) ให้แก่ผู้ใช้บริการ",
                            "รับตัดต่อ ตกแต่งภาพ และออกแบบสื่อกราฟิกพื้นฐานด้วย Adobe Photoshop ตามความต้องการของลูกค้า",
                            "ศึกษาค้นคว้าอัปเดตความรู้ด้าน Web Development, Network เบื้องต้น และเครื่องมือ IT Support ใหม่ๆ ด้วยตนเอง"
                        ]
                    },
                    {
                        role: "เจ้าหน้าที่ปฏิบัติงานโครงการ (Project Staff)",
                        company: "โครงการ 1 ตำบล 1 มหาวิทยาลัย (U2T) — กระทรวงการอุดมศึกษาฯ (MHESI)",
                        period: "มี.ค. 2564 – ธ.ค. 2564",
                        details: [
                            "ให้บริการการสนับสนุนด้านเทคโนโลยี การจัดเก็บบริหารจัดการข้อมูล และแก้ปัญหาการใช้งานเบื้องต้นแก่ผู้ใช้ในพื้นที่",
                            "จัดทำเอกสาร สรุปผลการดำเนินงาน ด้วย Microsoft Office (Word, Excel, PowerPoint) และดูแลอุปกรณ์ไอทีพื้นฐานที่ใช้ในโครงการ",
                            "ตัดต่อ ออกแบบสื่อประชาสัมพันธ์และตกแต่งภาพกิจกรรมโครงการด้วย Adobe Photoshop เพื่อใช้ในการนำเสนอและจัดทำรายงาน"
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
                    "ศึกษาด้วยตนเองด้าน Cybersecurity ผ่านแพลตฟอร์ม CTF (DropCTF)",
                    "ศึกษา Linux Administration และ Network Security เพื่อพัฒนาทักษะอย่างต่อเนื่อง",
                    "ศึกษาพื้นฐานการทดสอบระบบ (QA Testing) และ Automation Testing"
                ]
            },
            en: {
                name: "Paranchai Yaemsod",
                title: "IT Support Specialist",
                email: "py.paranchai@gmail.com",
                phone: "095-148-6783",
                location: "Rayong, Thailand",
                militaryStatus: "Completed military service (ROTC, Year 3)",
                summary: "Software Engineering graduate (B.Sc.) from Burapha University with over 3 years of experience in computer system maintenance, Hardware/Software/Network troubleshooting, and Web Application development. Skilled in Troubleshooting, Windows system installation and maintenance, Helpdesk/User Support, and documentation. Eager to apply programming knowledge and engineering problem-solving skills to effectively manage and support the organization's IT Support systems.",
                coreCompetencies: [
                    "Helpdesk & User Support",
                    "Hardware Maintenance & Assembly",
                    "OS Administration (Windows / Linux Basic)",
                    "Network Troubleshooting & Configuration",
                    "Web Application Development & Maintenance",
                    "Documentation & Graphic Design"
                ],
                skills: [
                    { category: "Hardware & Helpdesk", items: "PC/Laptop Assembly, Hardware Diagnostics, Peripheral Setup, User Support, Helpdesk Troubleshooting" },
                    { category: "Operating Systems", items: "Windows 10/11, Windows Server (Basic), Linux Command Line, System Maintenance" },
                    { category: "Networking", items: "TCP/IP, LAN/Wi-Fi Configuration, Router/Switch Setup, Network Troubleshooting, IP Config" },
                    { category: "Software & Web Tech", items: "HTML5, PHP, CSS3, JavaScript (ES6+ / OOP / MVC), SQL, Git/GitHub, VS Code" },
                    { category: "Office & Graphic Tools", items: "Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Adobe Photoshop, Image Editing" },
                    { category: "Tools & Utilities", items: "Remote Desktop (AnyDesk/TeamViewer), Active Directory (Basic), CMD/PowerShell" }
                ],
                experience: [
                    {
                        role: "IT Support & Digital Services (Freelance / Self-Employed)",
                        company: "Freelance IT & Digital Media Services",
                        period: "Sep 2024 – Present",
                        details: [
                            "Provided computer maintenance, repair, and Hardware/Software troubleshooting services for individual customers and small businesses",
                            "Prepared and reviewed reports and data summaries using Microsoft Office (Word, Excel, PowerPoint)",
                            "Designed and edited graphic content for online media using Adobe Photoshop according to client requirements",
                            "Continuously studied and developed new skills in Web Application and IT Support technologies"
                        ]
                    },
                    {
                        role: "Web Programmer (Fixed-term Contract)",
                        company: "Sword Digital & Consultant Co., Ltd.",
                        period: "Jan 2024 – Aug 2024",
                        details: [
                            "Developed and maintained Web Applications under project-based contracts",
                            "Analyzed and resolved technical issues (Troubleshooting & Debugging) for both backend and frontend systems",
                            "Performed System Testing and coordinated with the development team to improve application performance",
                            "Applied Clean Code principles and system architecture patterns to support application scalability"
                        ]
                    },
                    {
                        role: "IT Support & Freelance Computer Services",
                        company: "Freelance / Self-Employed",
                        period: "Jan 2022 – Dec 2023",
                        details: [
                            "Provided repair, Hardware/Software troubleshooting, and Windows OS installation services for personal computers",
                            "Prepared documents, data, and presentations using Microsoft Office (Word, Excel, PowerPoint) for clients",
                            "Edited and designed basic graphic content using Adobe Photoshop according to client requirements",
                            "Self-studied and updated knowledge in Web Development, basic Networking, and new IT Support tools"
                        ]
                    },
                    {
                        role: "Project Staff (IT Support)",
                        company: "One Tambon One University (U2T) Project — Ministry of Higher Education, Science, Research and Innovation (MHESI)",
                        period: "Mar 2021 – Dec 2021",
                        details: [
                            "Provided technology support, data management, and basic user troubleshooting for local communities",
                            "Prepared documents and performance reports using Microsoft Office (Word, Excel, PowerPoint) and maintained basic IT equipment",
                            "Edited and designed promotional media and event photos using Adobe Photoshop for presentations and reports"
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
                    "Self-studying Cybersecurity through CTF platforms (DropCTF)",
                    "Studying Linux Administration and Network Security for continuous skill development",
                    "Studying QA Testing fundamentals and Automation Testing"
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
                competencies: "ความสามารถหลัก",
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
                competencies: "Core Competencies",
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
