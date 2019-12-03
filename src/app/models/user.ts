export class User {
 constructor(
   public _id: any,
   public name: string,
   public surname: string,
   public email: string,
   public amount: number,
   public password: string,
   public saving?: number,
   public gettoken?: string,


 ) {

 }
}
