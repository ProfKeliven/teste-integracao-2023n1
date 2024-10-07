//importar nossos modulos
const { addUser, getUser, deleteUser } = require('../src/users')
const { addOrder, getOrder, deleteOrder } = require('../src/orders')

//estrutura 
//testando funcao adicionar 
describe('Testando a funcao adicionar pedidos e usuarios', () => {
    test('adicionar pedidos e usuarios', () => {
        const user = {id: 1, 
                    name: "João"
                }
        const order = {
            id: 100,
            item: "mouse",
            userId: 1
        }

        addUser(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)
        //verificar a integracao dos dois
        expect(findOrder.userId).toBe(findUser.id)
    })

    

})