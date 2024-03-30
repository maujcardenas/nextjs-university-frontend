import axios from "axios";

const API_BASE_URL = "http://localhost:1337/api";

export async function fetchSubjects() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/subjects?sort=subjectTitle&pagination[pageSize]=60`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return null;
  }
}

export async function fetchCurrentSubjects(studentSlug) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/course-completions?populate=*&filters[student][slug][$eq]=${studentSlug}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current subjects:", error);
    return null;
  }
}

export async function updateCourseCompletion(courseCompletionId, updatedInfo) {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/course-completions/${courseCompletionId}`,
      { data: updatedInfo }
    );
    console.log("Course Completion data updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating course completion data:", error);
    throw error;
  }
}
