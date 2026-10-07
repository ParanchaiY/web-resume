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
        // ถ้า html2pdf โหลดมาแล้ว (มีอินเทอร์เน็ต) → สร้าง PDF ดาวน์โหลดโดยตรง (ทำงานได้ทั้งมือถือและคอม)
        // ถ้าไม่มี → fallback ไปใช้ window.print() แบบเดิม
        if (window.html2pdf) {
            this.generatePDF();
        } else {
            window.print();
        }
    }
    generatePDF() {
        const lang = this.currentLang;
        const filename = lang === 'en'
            ? 'Resume-Paranchai-Yaemsod-EN.pdf'
            : 'Resume-Paranchai-Yaemsod-TH.pdf';
        const element = document.querySelector('.container');
        const htmlEl = document.documentElement;
        // เปิดโหมด print-mode เพื่อให้หน้าตาเหมือนตอนปริ้น A4 (2 คอลัมน์, sidebar ยาวเต็ม)
        htmlEl.classList.add('print-mode');
        const opt = {
            margin: 0,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                windowWidth: 794 // ความกว้าง A4 ที่ 96dpi → บังคับให้ใช้ layout แบบ desktop (2 คอลัมน์)
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };
        const cleanup = () => htmlEl.classList.remove('print-mode');
        html2pdf().set(opt).from(element).save()
            .then(cleanup)
            .catch(() => {
                cleanup();
                window.print(); // ถ้าสร้าง PDF ล้มเหลว fallback ไปปริ้นแบบปกติ
            });
    }
}
