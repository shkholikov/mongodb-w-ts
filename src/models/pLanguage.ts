import {ObjectId} from "mongodb"
export interface IProgrammingLanguage {
    name: string,
    type: string,
    category: string
    id?: ObjectId
}