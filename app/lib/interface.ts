export interface blog{
    title:string;
    description:string;
    content:any;
    _id:string;
    slug:{
        current:string;
    }
    _createdAt:string;
}

export type ProjectType = Root2[];

export interface Root2 {
  _createdAt: string;
  _rev: string;
  description: string;
  title: string;
  content: Content[];
  technologies: Technology[];
  all_links: AllLink[];
  _updatedAt: string;
  _type: string;
  _id: string;
  poster?: Poster;
}

export interface Content {
  _type: string;
  _key: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Technology {
  name: string;
  logo: Logo;
  _key: string;
}

export interface Logo {
  _type: string;
  asset: Asset2;
}

export interface Asset2 {
  _ref: string;
  _type: string;
}

export interface AllLink {
  _key: string;
  url: string;
  name: string;
  logo?: Logo2;
}

export interface Logo2 {
  _type: string;
  asset: Asset3;
}

export interface Asset3 {
  _type: string;
  _ref: string;
}

export interface Poster {
  _type: string;
  caption: string;
  asset: Asset4;
}

export interface Asset4 {
  _type: string;
  _ref: string;
}
