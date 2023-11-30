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

interface Root2 {
  technologies: Technology[];
  _createdAt: string;
  description: string;
  _id: string;
  all_links: AllLink[];
  _rev: string;
  _type: string;
  title: string;
  _updatedAt: string;
  content: Content[];
}

interface Technology {
  name: string;
  logo: Logo;
  _key: string;
}

interface Logo {
  asset: Asset;
  _type: string;
}

interface Asset {
  _ref: string;
  _type: string;
}

interface AllLink {
  name: string;
  _key: string;
  url: string;
}

interface Content {
  _type: string;
  _key: string;
  asset: Asset2;
}

interface Asset2 {
  _ref: string;
  _type: string;
}
