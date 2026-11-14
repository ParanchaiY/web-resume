export class ResumeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // โหลดภาษาที่เคยบันทึกไว้ หรือใช้ "th" เป็นค่าเริ่มต้น
        this.currentLang = localStorage.getItem('preferredLang') || "th";
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
            localStorage.setItem('preferredLang', lang);
            this.render();
        }
    }
    handlePrint() {
        const ua = navigator.userAgent || "";
        // ตรวจจับเบราว์เซอร์ในแอป Facebook / Messenger / Instagram / LINE
        // ซึ่งมักจะบล็อก window.print() และบล็อกการดาวน์โหลดไฟล์
        const isInAppBrowser = /FBAN|FBAV|Instagram|Line\//i.test(ua);

        if (isInAppBrowser) {
            alert(
                "เบราว์เซอร์ในแอป Facebook/Messenger ไม่รองรับการปริ้นหรือดาวน์โหลดไฟล์\n\n" +
                "วิธีดาวน์โหลด PDF:\n" +
                "1. แตะเมนู (⋯) ที่มุมขวาบน\n" +
                "2. เลือก \"เปิดใน Chrome\" หรือ \"เปิดใน Safari\"\n" +
                "3. กดปุ่มดาวน์โหลดอีกครั้ง"
            );
            return;
        }

        // ทุกเบราว์เซอร์ปกติ (PC, Chrome, Safari, Android Chrome)
        // ใช้ window.print() → เปิด dialog ให้เลือกปริ้นหรือ Save as PDF คุณภาพสูง
        window.print();
    }
}
