const express= require('express')

const app= express()
const port=process.env.PORT || 2000

app.set('view engine','ejs')
app.use(express.static('./Public'))

app.get('/',(req, res)=>{
    res.status(200).render('Homepage',{title:'HomePage'})
})

app.get('/project',(req, res)=>{
    res.status(200).render('Project',{title:'Projects'})
})



app.get('/contact',(req, res)=>{
    res.status(200).render('Contact',{title:'Contact'})
})


app.get('/About',(req, res)=>{
    res.status(200).render('About',{title:'About Me'})
})


app.get('/selected',(req, res)=>{
    res.status(200).render('selected',{title:'About Me'})
})


app.get('/hire',(req, res)=>{
    res.redirect('/Contact')
})
app.listen(port,()=>{
    console.log('Listening to port...')
} )