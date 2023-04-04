interface AssetFields {
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
  fields: AssetFields;
}

export interface EntryFields {
  [key: string]: string | number | Asset[] | Asset;
  title: string;
  year: number;
  thumbnail: Asset[];
  slug: string;
  banner: Asset;
  overview: string;
  sketches: Asset[];
  sec1Drawing: Asset[];
  sec2Drawing: Asset[];
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

interface RootObject {
  metadata: {
    tags: never[];
  };
  sys: {
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
  };
  fields: {
    title: string;
    year: number;
    thumbnail: Asset[];
    slug: string;
    banner: Asset;
  };
}
