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