import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContributors extends Struct.ComponentSchema {
  collectionName: 'components_shared_contributors';
  info: {
    displayName: 'Contributors';
    icon: 'heart';
  };
  attributes: {
    email: Schema.Attribute.String;
    LinkedIn: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProjectLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_links';
  info: {
    displayName: 'Project Links';
    icon: 'cursor';
  };
  attributes: {
    github: Schema.Attribute.String;
    live: Schema.Attribute.String;
  };
}

export interface SharedProjectRelation extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_relations';
  info: {
    displayName: 'ProjectRelation';
    icon: 'collapse';
  };
  attributes: {
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTechStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_stacks';
  info: {
    displayName: 'Tech Stack';
    icon: 'stack';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    purpose: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contributors': SharedContributors;
      'shared.media': SharedMedia;
      'shared.project-links': SharedProjectLinks;
      'shared.project-relation': SharedProjectRelation;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tech-stack': SharedTechStack;
    }
  }
}
