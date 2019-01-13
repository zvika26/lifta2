export class Teacher {
  public _id: string;
  public name: string;
  public profession: string;


  constructor(_id: string, name: string, profession: string) {
    this._id = _id;
    this.name = name;
    this.profession = profession;
  }
}
