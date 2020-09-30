"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleBlocks = /** @class */ (function () {
    function SimpleBlocks(_a) {
        var _this = this;
        var components = _a.components, _b = _a.sections, sections = _b === void 0 ? [] : _b;
        this.components = [];
        this.getPageConfig = function (page) {
            return {
                id: page.id,
                name: page.name,
                slug: page.slug,
                blocks: page.blocks,
                components: _this.components,
            };
        };
        this.components = components;
    }
    return SimpleBlocks;
}());
exports.default = SimpleBlocks;
//# sourceMappingURL=index.js.map