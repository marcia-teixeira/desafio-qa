/// <reference types="cypress" />

import * as GETBooks from '../requests/GETBooks.request';

describe('GETBooks', ()=>{
    it('Listar todos os livros', () => {

        GETBooks.allBooks().should((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body).to.be.not.null;   
        })
        
    });
})