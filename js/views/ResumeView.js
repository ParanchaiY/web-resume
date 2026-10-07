export class ResumeView {
    constructor() {
        this.appRoot = document.getElementById("app-root");
    }

    render(data) {
        const labels = data.labels;
        const lang = data.currentLang;

        const skillsHTML = data.skills
            .map((s) => {
                const itemsList = s.items
                    .split(", ")
                    .map((item) => `<span class="badge">${item}</span>`)
                    .join("");
                return `
                <div class="skills-group">
                    <strong>${s.category}</strong>
                    <div class="badge-container">${itemsList}</div>
                </div>`;
            })
            .join("");

        const competenciesHTML = data.coreCompetencies
            .map((c) => `<li class="competency-item"><span class="bullet">&#9656;</span> ${c}</li>`)
            .join("");

        const expHTML = data.experience
            .map(
                (e) => `
            <div class="timeline-item">
                <div class="job-header">
                    <h3 class="job-title">${e.role}</h3>
                    <span class="job-period">${e.period}</span>
                </div>
                <div class="job-company">${e.company}</div>
                <ul class="job-details">
                    ${e.details.map((d) => `<li>${d}</li>`).join("")}
                </ul>
            </div>`,
            )
            .join("");

        const langHTML = data.languages
            .map(
                (l) => `
            <div class="lang-item">
                <span class="lang-name">${l.name}</span>
                <span class="lang-level">${l.level}</span>
            </div>`,
            )
            .join("");

        const devHTML = data.professionalDevelopment
            .map((d) => `<li>${d}</li>`)
            .join("");

        this.appRoot.innerHTML = `
            <div class="action-bar">
                <div class="lang-toggle">
                    <button class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
                    <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                </div>
                <button id="btnPrint" class="btn-print">&#128196; ${labels.printBtn}</button>
            </div>

            <div class="resume-wrapper">
                <aside class="sidebar">
                    <div class="sidebar-header">
                        <img src="assets/images/profile.jpg" alt="Profile Picture" class="profile-img">
                        <h1 class="full-name">${data.name}</h1>
                        <p class="job-title-sidebar">${data.title}</p>
                    </div>

                    <div class="sidebar-section contact-section">
                        <h2 class="sidebar-h2">${labels.contact}</h2>
                        <div class="contact-list">
                            <div class="contact-item"><span class="contact-icon">&#128231;</span><span>${data.email}</span></div>
                            <div class="contact-item"><span class="contact-icon">&#128241;</span><span>${data.phone}</span></div>
                            <div class="contact-item"><span class="contact-icon">&#128205;</span><span>${data.location}</span></div>
                        </div>
                    </div>

                    <div class="sidebar-section">
                        <h2 class="sidebar-h2">${labels.skills}</h2>
                        ${skillsHTML}
                    </div>

                    <div class="sidebar-section">
                        <h2 class="sidebar-h2">${labels.education}</h2>
                        <div class="edu-item">
                            <p class="edu-degree">${data.education.degree}</p>
                            <p class="edu-faculty">${data.education.faculty}</p>
                            <p class="edu-university">${data.education.university}</p>
                            <p class="edu-period">${data.education.period}</p>
                        </div>
                    </div>

                    <div class="sidebar-section">
                        <h2 class="sidebar-h2">${labels.languages}</h2>
                        ${langHTML}
                    </div>

                    <div class="sidebar-section">
                        <h2 class="sidebar-h2">${labels.military}</h2>
                        <p class="military-text">&#9989; ${data.militaryStatus}</p>
                    </div>
                </aside>

                <main class="main-content">
                    <section class="main-section">
                        <h2 class="main-h2">${labels.summary}</h2>
                        <p class="summary-text">${data.summary}</p>
                    </section>

                    <section class="main-section">
                        <h2 class="main-h2">${labels.competencies}</h2>
                        <ul class="competencies-list">${competenciesHTML}</ul>
                    </section>

                    <section class="main-section">
                        <h2 class="main-h2">${labels.experience}</h2>
                        ${expHTML}
                    </section>

                    <section class="main-section">
                        <h2 class="main-h2">${labels.development}</h2>
                        <ul class="dev-list">${devHTML}</ul>
                    </section>
                </main>
            </div>

            <footer class="page-footer">
                <p>${labels.footer}</p>
            </footer>
        `;
    }

    bindPrintEvent(handler) {
        const btnPrint = document.getElementById("btnPrint");
        if (btnPrint) {
            btnPrint.addEventListener("click", handler);
        }
    }

    bindLanguageEvent(handler) {
        const langBtns = document.querySelectorAll(".lang-btn");
        langBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                handler(btn.getAttribute("data-lang"));
            });
        });
    }
}
