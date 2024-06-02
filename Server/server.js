const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/teachersRecruitment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Schemas
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const personalDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fullName: String,
  currentAddress: String,
  email: String,
  adharCardNumber: String,
  mobileNumber: String,
  dob: Date,
  age: Number,
  nationality: String,
  religion: String,
  gender: String,
  maritalStatus: String,
  category: String,
});

const educationDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  highestQualification: String,
  university: String,
  yearOfPassing: Number,
  percentage: Number,
  additionalCourses: String
});

const achievementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  researchPapers: [{ type: String }],
  projectSummary: { type: String, maxLength: 150 },
  projectLink: { type: String }
});

const experienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  institution: { type: String, required: true },
  position: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  natureOfAppointment: { type: String, required: true },
  totalExperience: { type: Number, required: true },
  experienceType: { type: String, required: true } // Teaching or Administrative
});

// Define Models
const User = mongoose.model('User', userSchema);
const PersonalDetails = mongoose.model('PersonalDetails', personalDetailsSchema);
const EducationDetails = mongoose.model('EducationDetails', educationDetailsSchema);
const Achievement = mongoose.model('Achievement', achievementSchema);
const Experience = mongoose.model('Experience', experienceSchema);

// User Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    // Save the new user
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Server Error');
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Server Error');
  }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, 'your_jwt_secret');
    req.user = verified;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(400).send('Invalid Token');
  }
};

// Routes for saving personal details
app.post('/savePersonalDetails', verifyToken, async (req, res) => {
  const {
    fullName, currentAddress, email, adharCardNumber, mobileNumber, dob,
    age, nationality, religion, gender, maritalStatus, category
  } = req.body;

  const newPersonalDetails = new PersonalDetails({
    userId: req.user.userId,
    fullName,
    currentAddress,
    email,
    adharCardNumber,
    mobileNumber,
    dob,
    age,
    nationality,
    religion,
    gender,
    maritalStatus,
    category
  });

  try {
    await newPersonalDetails.save();
    res.status(200).send('Personal details saved successfully');
  } catch (err) {
    console.error('Error saving personal details:', err);
    res.status(500).send('Server Error');
  }
});

// Routes for saving education details
app.post('/saveEducationDetails', verifyToken, async (req, res) => {
  const {
    highestQualification, university, yearOfPassing, percentage, additionalCourses
  } = req.body;

  const newEducationDetails = new EducationDetails({
    userId: req.user.userId,
    highestQualification,
    university,
    yearOfPassing,
    percentage,
    additionalCourses
  });

  try {
    await newEducationDetails.save();
    res.status(200).send({ message: 'Education details saved successfully' });
  } catch (err) {
    console.error('Error saving education details:', err);
    res.status(500).send('Server Error');
  }
});

// Routes for saving achievements
app.post('/saveAchievements', verifyToken, async (req, res) => {
  const { researchPapers, projectSummary, projectLink } = req.body;

  const newAchievement = new Achievement({
    userId: req.user.userId,
    researchPapers,
    projectSummary,
    projectLink
  });

  try {
    await newAchievement.save();
    res.status(200).send({ message: 'Achievement details saved successfully' });
  } catch (err) {
    console.error('Error saving achievement details:', err);
    res.status(500).send('Server Error');
  }
});

// Routes for saving teaching experience
app.post('/saveTeachingExperience', verifyToken, async (req, res) => {
  const {
    institution, position, fromDate, toDate, natureOfAppointment, totalExperience
  } = req.body;

  const newExperience = new Experience({
    userId: req.user.userId,
    institution,
    position,
    fromDate,
    toDate,
    natureOfAppointment,
    totalExperience,
    experienceType: 'Teaching'
  });

  try {
    await newExperience.save();
    res.status(200).send('Teaching experience saved successfully');
  } catch (err) {
    console.error('Error saving teaching experience:', err);
    res.status(500).send('Server Error');
  }
});

// Routes for saving administrative experience
app.post('/saveAdministrativeExperience', verifyToken, async (req, res) => {
  const {
    institution, position, fromDate, toDate, natureOfAppointment, totalExperience
  } = req.body;

  const newExperience = new Experience({
    userId: req.user.userId,
    institution,
    position,
    fromDate,
    toDate,
    natureOfAppointment,
    totalExperience,
    experienceType: 'Administrative'
  });

  try {
    await newExperience.save();
    res.status(200).send('Administrative experience saved successfully');
  } catch (err) {
    console.error('Error saving administrative experience:', err);
    res.status(500).send('Server Error');
  }
});

// Route to get personal and education details
app.get('/getDetails', verifyToken, async (req, res) => {
  try {
    const personalDetails = await PersonalDetails.findOne({ userId: req.user.userId });
    const educationDetails = await EducationDetails.findOne({ userId: req.user.userId });

    if (!personalDetails && !educationDetails) {
      return res.status(404).send('Details not found');
    }

    res.status(200).json({ personalDetails, educationDetails });
  } catch (err) {
    console.error('Error fetching details:', err);
    res.status(500).send('Server Error');
  }
});

// Route to get all details of the user
app.get('/getAllDetails', verifyToken, async (req, res) => {
  try {
    const personalDetails = await PersonalDetails.findOne({ userId: req.user.userId });
    const educationDetails = await EducationDetails.findOne({ userId: req.user.userId });
    const achievements = await Achievement.findOne({ userId: req.user.userId });
    const teachingExperience = await Experience.find({ userId: req.user.userId, experienceType: 'Teaching' });
    const administrativeExperience = await Experience.find({ userId: req.user.userId, experienceType: 'Administrative' });

    if (!personalDetails && !educationDetails && !achievements && teachingExperience.length === 0 && administrativeExperience.length === 0) {
      return res.status(404).send('No details found');
    }

    res.status(200).json({
      personalDetails,
      educationDetails,
      achievements,
      teachingExperience,
      administrativeExperience
    });
  } catch (err) {
    console.error('Error fetching all details:', err);
    res.status(500).send('Server Error');
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
