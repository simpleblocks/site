import { Components } from "@simpleblocks/components"
import { BlockDefinition, ComponentsInstance } from "@simpleblocks/components/@types/components"

type ConfigType = {
    components: BlockDefinition[],
    sections: Object[],
    template: TemplateType,
    globalStyles: Object,
    linkResolver: (link: string) => string 
}

type PageBlocksType = {
    id: string,
    name: string,
    slug: string,
    blocks: Object
}

type TemplateType = {
    styles: Object,
    colors: Object
} | null

type PageConfigType = {
    id: string,
    page: PageBlocksType,
    components: ComponentsInstance,
    sections: Object[],
    template: TemplateType,
    globalStyles: Object,
    linkResolver: (link: string) => string 
}

const defaultTemplateTemp = {
    styles: {},
    colors: {}
}

class SimpleBlocks {
    components: ComponentsInstance;
    sections: Object[]
    template: TemplateType
    globalStyles: Object
    linkResolver: (link: string) => string 

    constructor({ components, sections = [], globalStyles = {}, template = defaultTemplateTemp, linkResolver = (link) => link } : ConfigType) {
        this.components = new Components(components)
        this.sections = sections
        this.globalStyles = globalStyles
        this.template = template
        this.linkResolver = linkResolver
    } 

    getPageConfig = (page: PageBlocksType): PageConfigType => {
        return {
            id: page.id,
            page: page,
            components: this.components,
            sections: this.sections,
            globalStyles: this.globalStyles,
            template: this.template,
            linkResolver: this.linkResolver
        }
    }
}

export default SimpleBlocks