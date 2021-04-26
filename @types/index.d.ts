import {
  BlockDefinition,
  ComponentsInstance,
} from "@simpleblocks/components/@types/components.d";

export type ConfigType = {
  components: BlockDefinition[],
  sections: Object[],
  template: TemplateType,
  globalStyles: Object,
  linkResolver: (link: string) => string 
}

export type PageBlocksType = {
  id: string,
  name: string,
  slug: string,
  blocks: Object
}

export type TemplateType = {
  styles: Object,
  colors: Object
} | null

export type PageConfigType = {
  id: string,
  page: PageBlocksType,
  components: ComponentsInstance,
  sections: Object[],
  template: TemplateType,
  globalStyles: Object,
  linkResolver: (link: string) => string 
}