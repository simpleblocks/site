import { ComponentsInstance } from "@simpleblocks/components/@types/components";
import { ConfigType, PageBlocksType, PageConfigType, TemplateType } from "../@types/site";
declare class SimpleBlocks {
    components: ComponentsInstance;
    sections: Object[];
    template: TemplateType;
    globalStyles: Object;
    linkResolver: (link: string) => string;
    constructor({ components, sections, globalStyles, template, linkResolver, }: ConfigType);
    getPageConfig: (page: PageBlocksType) => PageConfigType;
}
export default SimpleBlocks;
