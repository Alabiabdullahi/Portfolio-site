const express= require('express')

const app= express()
const port=process.env.PORT || 2000

app.set('view engine','ejs')
app.use(express.static('./Public'))

app.get('/',(req, res)=>{
    res.render('Homepage',{title:'HomePage'})
})

app.get('/project',(req, res)=>{
    res.render('Project',{title:'Projects'})
})



app.get('/contact',(req, res)=>{
    res.render('Contact',{title:'Contact'})
})


app.get('/About',(req, res)=>{
    res.render('About',{title:'About Me'})
})


app.get('/selected',(req, res)=>{
    res.render('selected',{title:'About Me'})
})


app.get('/hire',(req, res)=>{
    res.redirect('/Contact')
})
app.listen(port,()=>{
    console.log('Listening to port...')
} )