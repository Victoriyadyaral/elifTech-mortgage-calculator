  
const {Router} = require('express')
const shortid = require('shortid')
const Bank = require('../models/Bank')
const auth = require('../middleware/auth.middleware')
const router = Router()
const code = shortid.generate()

// router.post('/generate', auth, async (req, res) => {
  
//   try {
//     const bank = new Bank({
//       code,
//       ...req.body.bank,
//       owner: req.user.userId
//   })
//     console.log(bank.save())
//     await bank.save()
//     console.log('bank2')
//     res.status(201).json({ bank })
//   } catch (e) {
//     res.status(500).json({ message: 'Something went wrong, please try again' })
//   }
// })

router.get('/', auth, async (req, res) => {
  try {
    const banks = await Bank.find({ owner: req.user.userId })
    res.json(banks)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id)
    res.json(bank)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' })
  }
 })

module.exports = router