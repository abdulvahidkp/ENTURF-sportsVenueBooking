const sports = require('../../models/sports.model');
const vms = require('../../models/vms.model');
const turfs = require('../../models/turf.model');

module.exports = {
  getSports: async (req, res) => {
    try {
      await sports.aggregate([{
        $project: {
          sport: 1,
          facilityDetails: {
            $filter: {
              input: "$facilityDetails",
              as: "facility",
              cond: {
                $eq: ["$$facility.status", true]
              }
            }
          }
        }
      },
      {
        $match: {
          $expr: {
            $gt: [{ $size: "$facilityDetails" }, 0]
          }
        }
      }
      ]).then(response => {
        res.status(200).json({ response })
      }).catch(err => {
        console.log(err.message)
        res.status(400).json({ message: 'error occured', err: err.message })
      })

    } catch (error) {
      console.log(error.message)
      res.status(400).json({ message: 'error occured', err: error.message })
    }
  },
  addTurf: async (req, res) => {
    turfs.create({ vmId: req._id, ...req.body }).then(response => {
      res.status(200).json({ message: 'success' })
    }).catch(err => {
      console.log(err.message)
      res.status(400).json({ message: 'error occured' })
    })
  },
  updateTurf: async (req,res) => {
    const vmId = req._id
    const {id,venueName,mobile,district,place,actualPrice,discountPercentage,description,image,document,slots,sportFacility,lat,lng} = req.body
    turfs.updateOne({_id:id},{venueName,mobile,district,place,actualPrice,discountPercentage,description,image,document,slots,sportFacility,lat,lng}).then(response=>{
      res.status(200).json({message:'success'})
    })
  },
  getTurfs: async (req, res) => {
    turfs.find({ vmId: req._id }).then(response => {
      res.status(200).json(response);
    }).catch(err => {
      console.log(err);
      res.status(400).json({ message: 'error occured at getting Turfs' })
    })
  },
  getTurf: async (req,res) => {
    turfs.findOne({_id:req.params.id}).then(response=>{
      res.status(200).json(response);
    }).catch(err=>{
      console.log(err.message);
      res.status(400).json({ message: 'error occured at getting Turfs' })
    })
  },
  changeBlock: async (req, res) => {
    const { id } = req.body;
    await turfs.updateOne({ _id: id }, [{ "$set": { "vmIsBlocked": { "$eq": [false, "$vmIsBlocked"] } } }]).then(response => {
      res.sendStatus(200)
    }).catch(err => {
      console.log(err.message);
      res.status(400).json({ message: 'error occured' })
    })
  }
} 