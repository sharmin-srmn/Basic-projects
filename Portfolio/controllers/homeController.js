
const homeController = (req, res) =>{
    // res.send('Homepage')
    // res.sendFile(join(process.cwd(), '/views/index.html'))
    res.render('index', {title: 'Home'})
}

export {homeController}