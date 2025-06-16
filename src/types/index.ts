  
export interface PersonInter {
    //定义一个接口，用于限制person对象的属性
    name: string;
    age: number;
    tel: number;
    x?: number;
 }

 //一个自定义类型、
 export type Persons = Array<PersonInter>;

//  export type Persons = PersonInter[];