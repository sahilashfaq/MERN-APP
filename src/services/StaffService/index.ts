import axios from "axios";

class Staff {
  async getAll() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/staff/getAll`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching staff:", error);
      throw error;
    }
  }
}

export const StaffService = new Staff();
