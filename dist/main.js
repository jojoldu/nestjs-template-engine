"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const MainModule_1 = require("./MainModule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(MainModule_1.MainModule);
    setTemplateEngine(app);
    await app.listen(3000);
}
bootstrap();
function setTemplateEngine(app) {
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'template/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'template/views'));
    app.setViewEngine('hbs');
}
//# sourceMappingURL=main.js.map