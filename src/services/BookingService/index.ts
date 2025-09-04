import axios from "axios";

class Booking {
  async getAll() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/rooms/getAll`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching rooms:", error);
      throw error;
    }
  }

  async addAppointment(appointmentData: any) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/appointment/add`,
        appointmentData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding appointment:", error);
      throw error;
    }
  }
}

export const BookingService = new Booking();
