import axios from "axios";

export const updateClassStatus = async (classId, newStatus) => {
    console.log(newStatus,classId)
    try {
      const response = await axios.put(`/classes/${classId}/status`, { status: newStatus });
      const updatedClass = response.data;
    } catch (error) {
      console.error("Error updating class status:", error);
      throw error;
    }
  };
  
  export const updateFeedback = async (classId, feedbackText) => {
    try {
      const response = await axios.put(`/classes/${classId}/feedback`, { adminFeedback:feedbackText });
      console.log(feedbackText)
      const updatedClass = response.data;
      return updatedClass;
    } catch (error) {
      console.error("Error updating feedback:", error);
      throw error;
    }
  };