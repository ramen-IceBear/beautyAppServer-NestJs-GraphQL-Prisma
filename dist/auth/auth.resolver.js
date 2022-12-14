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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../types/graphql");
const auth_service_1 = require("./auth.service");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    register(register) {
        return this.authService.register(register);
    }
    login(login) {
        return this.authService.login(login);
    }
    async refreshToken(refreshToken) {
        return this.authService.refreshToken(refreshToken);
    }
};
__decorate([
    (0, graphql_1.Mutation)('register'),
    __param(0, (0, graphql_1.Args)('register')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.Register]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)('login'),
    __param(0, (0, graphql_1.Args)('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.Login]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)('refreshToken'),
    __param(0, (0, graphql_1.Args)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.RefreshToken]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshToken", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map