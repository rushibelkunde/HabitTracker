const Habit = require('../models/habit')


// Home Route, it will show existing habits
module.exports.home = async (req, res) => {
    const habits = await Habit.find();
    res.render('index', { habits });
}

// Route to add a new habit
module.exports.addHabit = async (req, res) => {
    const name = req.body.name;
    console.log(name)
    let date = new Date()
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth() + 1
    let days = new Date(currentYear,currentMonth,0).getDate()
    let currentdate = date.getDate()
    let fulldate = new Date().toLocaleDateString()
    const habit = new Habit({ name : name , date : currentdate , days: days, fulldate: fulldate});
    console.log(habit)
    await habit.save();
    res.redirect('/');
}


// Route to show the habit details for the past 7 days
module.exports.viewHabit = async (req, res) => {
    const { id } = req.params;
    const habit = await Habit.findById(id);
    res.render('habit', { habit });
}

// Route to update the habit status
module.exports.updateHabit = async (req, res) => {
    const {id}  = req.params;
    const status = req.body.status;
    const day = req.query.day;
    
    console.log(req.query.day,req.body.status)
    const habit = await Habit.findById(id);
    habit.status[day] = status;
    await habit.save();
    res.redirect(`/habits/${id}`);
}

// Route to delete a habit
module.exports.deleteHabit = async(req,res)=>{
    console.log(req.query.id)
    const id = req.query.id
    await Habit.findByIdAndDelete(id);
    return res.redirect('/')
  }