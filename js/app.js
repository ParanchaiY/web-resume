import { ResumeModel } from './models/ResumeModel.js';
import { ResumeView } from './views/ResumeView.js';
import { ResumeController } from './controllers/ResumeController.js';

// Instantiate Objects
const model = new ResumeModel();
const view = new ResumeView();
const app = new ResumeController(model, view);

// เริ่มการทำงานเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});