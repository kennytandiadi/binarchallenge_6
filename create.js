const {articles}=require('./models')

articles.create({
    title:'hello world',
    body:'Lorem Ipsum',
    approved:true
})
.then(article=>{
    console.log(article);
})