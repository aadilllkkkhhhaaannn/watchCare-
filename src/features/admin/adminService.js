import axios from "axios";

// fetchUsers

const fetchUsers = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/users", options);
  return response.data;
};

// fetchWatches

const fetchWatches = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/watches", options);
  return response.data;
};

// fetchNotes

const fetchNotes = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/watches", options);
  return response.data;
};

const adminService = {
  fetchUsers,
  fetchWatches,
  fetchNotes,
};
export default adminService;
