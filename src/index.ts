import { Components } from "@simpleblocks/components";
import {
  BlockDefinition,
  ComponentsInstance,
} from "@simpleblocks/components/@types/components";
import {
  ConfigType,
  PageBlocksType,
  PageConfigType,
  TemplateType,
} from "../@types/index";

export const defaultTemplateTemp = {
  styles: {},
  colors: {}
}

class SimpleBlocks {
  components: ComponentsInstance;
  sections: Object[];
  template: TemplateType;
  globalStyles: Object;
  linkResolver: (link: string) => string;

  constructor({
    components,
    sections = [],
    globalStyles = {},
    template = defaultTemplateTemp,
    linkResolver = (link: string) => link,
  }: ConfigType) {
    this.components = new Components(components);
    this.sections = sections;
    this.globalStyles = globalStyles;
    this.template = template;
    this.linkResolver = linkResolver;
  }

  getPageConfig = (page: PageBlocksType): PageConfigType => {
    return {
      id: page.id,
      page: page,
      components: this.components,
      sections: this.sections,
      globalStyles: this.globalStyles,
      template: this.template,
      linkResolver: this.linkResolver,
    };
  };
}

export default SimpleBlocks;
