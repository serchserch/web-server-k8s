# FitCo Kubernets/AWS/NODEJS/Docker

Create deployment

`shell
kubectl run web-server --replicas=2 --labels="run=load-balancer-example-2" --image=AWS_ECR_CONTAINER:VERSION  --port=3000
`

Create service loadbalancer type:

`shell
kubectl expose deployment web-server --type=LoadBalancer --name=my-service-2
`

Enviroment vars

- `PORT`: Koa listener port
- `MONGODB`: Mongo url connection
- `MESSAGE`: Home message `/` 



