import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

const runTests = async () => {
  try {
    console.log("Testing GET /users...");
    const allUsers = await axios.get(API_URL);
    console.log("Response:", allUsers.data);

    console.log("Testing POST /users...");
    const newUser = await axios.post(API_URL, {
      name: "New Developer",
      email: "dev@example.com"
    });
    console.log("Created:", newUser.data);

    const newId = newUser.data.data.id; 
    console.log(`\nTesting GET /users/${newId}...`);
    const singleUser = await axios.get(`${API_URL}/${newId}`);
    console.log("Found:", singleUser.data);

  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
  }
};

runTests();

