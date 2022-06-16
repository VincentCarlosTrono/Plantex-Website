export interface AboutDetail {
    number: string;
    title: string;
    description: string;
    duration: string;
  }
  export type Details = Array<AboutDetail>;
  
  export interface ContactInterface {
    detail: string;
    icon: JSX.Element;
    number: string;
  }
  export type Contacts = Array<ContactInterface>;


export interface FeatureDetailInterface {
    icon: JSX.Element;
    description: string;
  }
  export type featureDetails = Array<FeatureDetailInterface>;

  export interface FooterInfoInterface {
    title: string;
    info1: string;
    icon1?: JSX.Element;
    icon2?: JSX.Element;
    icon3?: JSX.Element;
    info2?: string;
    info3?: string;
  }
  export type footerInformation = Array<FooterInfoInterface>;

  export interface NavigationInterface {
    name: string;
    link: string;
  }
  export type NavLists = Array<NavigationInterface>;

  export interface ProductInterface {
    image: string;
    name: string;
    price: string;
    duration: string;
  }
  export type ProductsData = Array<ProductInterface>;

  export interface InfoInterface {
    itemNumber: number;
    question: string;
    answer: string;
    isOpen: boolean;
  }