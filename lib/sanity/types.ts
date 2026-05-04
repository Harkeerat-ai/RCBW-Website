/* ── Sanity CMS Type Definitions ── */

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface Avenue {
  _id: string;
  _type: "avenue";
  name: string;
  slug: SanitySlug;
  color: string;
  description: string;
  icon: string;
}

export interface Event {
  _id: string;
  _type: "event";
  title: string;
  slug: SanitySlug;
  date: string;
  coverImage: SanityImage;
  avenue: Avenue;
  description: string;
  gallery?: SanityImage[];
  reportPDF?: SanityFile;
  isFlagship?: boolean;
}

export interface Newsletter {
  _id: string;
  _type: "newsletter";
  issueNumber: number;
  title: string;
  date: string;
  coverImage: SanityImage;
  pdfFile: SanityFile;
  summary: string;
}

export interface BoardMember {
  _id: string;
  _type: "boardMember";
  name: string;
  role: string;
  avenue: Avenue;
  photo: SanityImage;
  linkedIn?: string;
}
