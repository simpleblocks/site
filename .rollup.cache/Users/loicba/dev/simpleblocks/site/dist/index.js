import { Components } from "@simpleblocks/components";
import { defaultTemplateTemp, } from "../@types/site";
var SimpleBlocks = /** @class */ (function () {
    function SimpleBlocks(_a) {
        var _this = this;
        var components = _a.components, _b = _a.sections, sections = _b === void 0 ? [] : _b, _c = _a.globalStyles, globalStyles = _c === void 0 ? {} : _c, _d = _a.template, template = _d === void 0 ? defaultTemplateTemp : _d, _e = _a.linkResolver, linkResolver = _e === void 0 ? function (link) { return link; } : _e;
        this.getPageConfig = function (page) {
            return {
                id: page.id,
                page: page,
                components: _this.components,
                sections: _this.sections,
                globalStyles: _this.globalStyles,
                template: _this.template,
                linkResolver: _this.linkResolver,
            };
        };
        this.components = new Components(components);
        this.sections = sections;
        this.globalStyles = globalStyles;
        this.template = template;
        this.linkResolver = linkResolver;
    }
    return SimpleBlocks;
}());
export default SimpleBlocks;
//# sourceMappingURL=index.js.map