const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-body')
const port = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

router.get('/pets', async function (ctx, next) {
    // TODO : Data base response
    ctx.body = [{
        name: 'Dogo 12asdfasdfasd3'
    }, {
        name: 'Cat 1'
    }]
})

router.delete('/pets/:id', async (ctx) => {
    // TODO: Delete pet from DB
    ctx.body = {
        success: true,
        petID: ctx.prams.id
    }
})


app.use(router.routes())
app.use(router.allowedMethods())


app.listen(port, () => {
    console.log('listen!!')
})