const Modal = {
    open(){
        document.querySelector('.modal-overlay')
        .classList
        .add('active')
     },
 
     close(){
         document.querySelector('.modal-overlay')
        .classList
        .remove('active')
     }
}

const empresas = [{
        id: 1,
        RazaoSocial: 'Unimed Maceio',
        CNPJ: 12345678910
    }, 
    {
        id: 2,
        RazaoSocial: 'Empresa 2',
        CNPJ: 12345678910
    }, 
    {
        id: 3,
        RazaoSocial: 'EMpresa 3',
        CNPJ: 12345678910
    }, 
    {
        id: 4,
        RazaoSocial: 'Unimed Maceio',
        CNPJ: 12345678910   
    }]


const DOM = {
    addEmpresa(empresa, index){
        console.log(empresa)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLEmpresas()
    },

    innerHTMLEmpresas(){
        const html = `
            <tr>
                <td>Raz.soc <span class="text-cnpj">CNPJ</span>
                </td><td><img src="assets/xmark-solid.svg" alt="">
                </td>
            </tr> 
        `

        return html
    }
}

DOM.addEmpresa()