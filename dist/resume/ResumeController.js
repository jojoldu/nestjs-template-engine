"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeController = void 0;
const common_1 = require("@nestjs/common");
const ResumeService_1 = require("./ResumeService");
let ResumeController = class ResumeController {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }
    getHello() {
        return { message: 'Hello world!' };
    }
    root(res) {
        const viewName = this.resumeService.getViewName();
        return res.render(viewName, {
            message: 'Hello world!, Resume2',
        });
    }
};
__decorate([
    (0, common_1.Get)('/resume1'),
    (0, common_1.Render)('resume/resume1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/resume2'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "root", null);
ResumeController = __decorate([
    (0, common_1.Controller)('/resume'),
    __metadata("design:paramtypes", [ResumeService_1.ResumeService])
], ResumeController);
exports.ResumeController = ResumeController;
//# sourceMappingURL=ResumeController.js.map