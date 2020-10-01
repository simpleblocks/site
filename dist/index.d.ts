import { BlockDefinition, ComponentsInstance } from "@simpleblocks/components/@types/components";
declare type ConfigType = {
    components: BlockDefinition[];
    sections: Object[];
    template: TemplateType;
    globalStyles: Object;
    linkResolver: (link: string) => string;
};
declare type PageBlocksType = {
    id: string;
    name: string;
    slug: string;
    blocks: Object;
};
declare type TemplateType = {
    styles: Object;
    colors: Object;
} | null;
declare type PageConfigType = {
    id: string;
    page: PageBlocksType;
    components: ComponentsInstance;
    sections: Object[];
    template: TemplateType;
    globalStyles: Object;
    linkResolver: (link: string) => string;
};
declare class SimpleBlocks {
    components: ComponentsInstance;
    sections: Object[];
    template: TemplateType;
    globalStyles: Object;
    linkResolver: (link: string) => string;
    constructor({ components, sections, globalStyles, template, linkResolver }: ConfigType);
    getPageConfig: (page: PageBlocksType) => PageConfigType;
}
export default SimpleBlocks;
//# sourceMappingURL=index.d.ts.map