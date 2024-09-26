//#desc Get All contacts
//@route GET /api/contacts
//@acces public
const getContacts = (req,res)=>{
    res.status(200).json({message :"Get all Contacts"})
}

//#desc Get contact 
//@route GET /api/contacts
//@acces public
const getContact = (req,res)=>{
    res.status(201).json({message :`Get contact for ${req.params.id}`})
} 

//#desc Create New contact
//@route POST /api/contacts
//@acces public
const createContact = (req,res)=>{
    console.log("The request body is :", req.body)
    const { name, email, phone} = req.body
    if(!name || !email || !phone ){
        res.status(400)
        throw new Error('All fields are mandatory ! ')
    }
    res.status(201).json({message :`Create new contact`})
}

//#desc Update contact
//@route PUT /api/contacts
//@acces public
const updateContact = (req,res)=>{
    res.status(200).json({message :`Update contact for ${req.params.id}`})
}

//#desc Delete contact
//@route PUT /api/contacts
//@acces public
const deleteContact = (req,res)=>{
    res.status(200).json({message :`Delete contact for ${req.params.id}`})
}

module.exports = {getContact , getContacts, createContact, updateContact, deleteContact}