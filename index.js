const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-body')
const cors = require('kcors')
const mongoose = require('mongoose')

const config = require('./config')
const Pets = require('./models/pets')

const port = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

if (config.mongodb) {
  mongoose.connect(config.mongodb)
  mongoose.connection.on('error', console.error.bind(console, `Please check your mongo connection: ${config.mongodb}`))
  mongoose.connection.once('open', console.info.bind(console, `ByPrice is connected to mongo at: ${config.mongodb}`))
}


app.use(cors())
app.use(body())

/* Error handler */
app.use(async function (ctx, next) {
  try {
    return await next()
  } catch (err) {
    ctx.status = err.status
    ctx.body = {
      code: err.status,
      message: err.message
    }
  }
})


router.get('/', async function (ctx, next) {
  ctx.body = config.message
})

router.get('/pets', async function (ctx, next) {
  if (!mongoose.connection.readyState) ctx.throw({ message: 'Please check your mongo connection' }, 503)
  ctx.body = await Pets.find({})
})

router.post('/pets', async function (ctx, next) {
  if (!mongoose.connection.readyState) ctx.throw({ message: 'Please check your mongo connection' }, 503)
  let pet = new Pets(ctx.request.body)
  ctx.body = await pet.save()
})

router.delete('/pets/:id', async (ctx) => {
  if (!mongoose.connection.readyState) ctx.throw({ message: 'Please check your mongo connection' }, 503)
  let res = await Pets.deleteOne({ _id: ctx.params.id })
  if (!res.deletedCount) ctx.throw({ error: 'Not found pet' }, 404)
  ctx.status = 204
  ctx.body = undefined
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  console.log('listen!!')
})
