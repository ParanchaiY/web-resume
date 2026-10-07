export class ResumeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.currentLang = "th"; // ภาษาเริ่มต้น: ไทย
    }

    init() {
        this.render();
    }

    render() {
        const data = this.model.getResumeData(this.currentLang);
        this.view.render(data);
        // ผูก event ใหม่ทุกครั้งที่ render ใหม่ (เพราะ DOM ถูกสร้างใหม่ทุกครั้ง)
        this.view.bindPrintEvent(() => this.handlePrint());
        this.view.bindLanguageEvent((lang) => this.handleLanguageChange(lang));
    }

    handleLanguageChange(lang) {
        if (lang !== this.currentLang) {
            this.currentLang = lang;
            this.render();
        }
    }

    handlePrint() {
        window.print();
    }
}
