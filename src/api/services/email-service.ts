import apiClient from "../client/api";

export const EmailService = {
  signToNewsletter: async (email: string) => {
    const response = await apiClient.post(
      "/api/HttpTrigger?code=PeVxta7u5QnutJAcjjeG6bJYrzfFjuq-JPZ3oyBJYFBdAzFuI0Vxug%3D%3D",
      JSON.stringify({
        Email: email,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },
};
