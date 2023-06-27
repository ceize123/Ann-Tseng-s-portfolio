interface ImageFields {
  title: string;
  description?: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

interface AssetSys {
  space: {
    sys: {
      type: 'Link';
      linkType: 'Space';
      id: string;
    };
  };
  id: string;
  type: 'Asset';
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: 'Link';
      linkType: 'Environment';
    };
  };
  revision: number;
  locale: string;
}

export interface Asset {
  metadata: {
    tags: never[];
  };
  sys: AssetSys;
  fields: ImageFields;
}

export interface EntryFields {
  thumbnail: Asset;
  slug: string;
  banner: Asset;
  overview: string;
  title: string;
  skill?: string[];
  software?: string[];
  year: number;
  processImage?: Asset[];
  processDescription?: string[];
  spacePlanningImage1?: Asset[];
  spacePlanningDescription1?: string[];
  spacePlanningImage2?: Asset[];
  spacePlanningDescription2?: string[];
  spacePlanningImage3?: Asset[];
  spacePlanningDescription3?: string[];
  rendering3D?: Asset[];
}

interface EntrySys {
  space: {
    sys: {
      type: 'Link';
      linkType: 'Space';
      id: string;
    };
  };
  id: string;
  type: 'Entry';
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: 'Link';
      linkType: 'Environment';
    };
  };
  revision: number;
  contentType: {
    sys: {
      type: 'Link';
      linkType: 'ContentType';
      id: string;
    };
  };
  locale: string;
}

export interface Entry {
  metadata: {
    tags: never[];
  };
  sys: EntrySys;
  fields: EntryFields;
}
