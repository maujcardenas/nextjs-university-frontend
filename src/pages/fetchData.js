import axios from "axios";

const API_BASE_URL = "http://localhost:1337/api";

export async function fetchSubjects() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/subjects?sort=Department&pagination[pageSize]=60`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return null;
  }
}

export async function fetchEnrollments() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/enrollments?pagination[pageSize]=60`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return null;
  }
}
