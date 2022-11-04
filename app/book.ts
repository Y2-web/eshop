export class Book {
id: number|null;
titre: string;
auteur: string;
editeur: string;
annee: number;
idU: number|null;

constructor(id: number|null, titre:string, auteur:string, editeur:string, annee:number,idU: number|null)
{
    this.id= id;
    this.titre = titre;
    this.auteur= auteur;
    this.editeur= editeur;
    this.annee= annee;
    this.idU = idU;
}
}
