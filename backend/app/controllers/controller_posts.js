const db = require('../../database/mongodb')
const objectId = require('mongodb').ObjectID
const fs = require('fs')

exports.getPosts = (req,res) => {
    db.collection('single_post').find().toArray((err ,result) => {
        if(err) return res.status(500).send({ msg : 5})

        if(result.length === 0 ) return res.status(200).send({msg : 4})

        res.send(result)
    })
}

exports.addPosts = (req,res) => {
    const title = req.body.title
    const file = req.files.file

    if(title == '' || file == undefined || title == undefined){
        return res.status(411).send({ msg : 4})
    }

    const imgName = new Date().getTime() +'_'+req.files.file.originalFilename
    
    const filePath = req.files.file.path
    const pathDestin = './uploads/'+imgName

    if(file.type != 'image/png' && file.type != 'image/jpeg'){
        return res.status(406).send({msg : 4})
    }

    fs.rename(filePath,pathDestin,err => {
        if(err) return res.status(500).send({error : 5})
    })

    db.collection('single_post').insertOne({
        title : title,
        img_url : imgName,
    },(err,result) => {
        if(err) return res.status(500).send({ msg : 5 })

        res.status(201).send({ msg : 2})
    })
}

exports.getOnePost = (req,res) => {
    const id = req.params.post_id

    db.collection('single_post').findOne({
        _id : objectId(id)
    },(err,result) => {
        if(err) return res.status(500).send({ msg : 5})

        res.send(result)
    })
}

exports.addComent = (req,res) => {
    const id = req.params.post_id
	console.log(req.body)
    const coment = req.body.coment

    db.collection('single_post').updateMany(
        {_id : objectId(id)},
        {$push:{
            coments:{
                id_coment : new objectId(),
                coment : coment
            }
        }},(err,result) => {
            if(err) return res.status(500).send({msg : 5})

            res.send({msg : 2})
        })
}

exports.deleteComent = (req,res) => {
    const id = req.params.post_id

    db.collection('single_post').updateMany(
        {},
        {$pull:{
            coments:{
                id_coment : objectId(id)
            }
        }},(err,result) => {
            if(err) return res.status(500).send({msg : 5})

            res.send({msg : 2})
        })
}