export interface People{
    name:string
    deceased:boolean
}

export interface PeopleQueryResult{
    lastPage:boolean
    results:People[]
}