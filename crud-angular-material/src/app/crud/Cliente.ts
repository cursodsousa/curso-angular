import { v4 as uuid } from 'uuid' 

export class Cliente {
    constructor(
        public id: string,
        public nome: string,
        public cpf: string,
        public email: string,
        public dataNascimento: string,
        public version: number,
    ){}

    static newCliente() : Cliente {
        return new Cliente(uuid(),'', '','', '', 0);
    }
}