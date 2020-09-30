import { BlockDefinition } from "@simpleblocks/components"


type ConfigType = {
    components: BlockDefinition[],
    sections: any[]
}

type PageBlocksType = {
    id: string,
    name: string,
    slug: string,
    blocks: BlockDefinition[]
}

class SimpleBlocks {
    components: BlockDefinition[] = []

    constructor({ components, sections = [] } : ConfigType) {
        this.components = components
    } 

    getPageConfig = (page: PageBlocksType) => {
        return {
            id: page.id,
            name: page.name,
            slug: page.slug,
            blocks: page.blocks,
            components: this.components,
        }
    }
}

export default SimpleBlocks