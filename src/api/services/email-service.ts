import apiClient from "../client/api";

export const EmailService = {
  signToNewsletter: async (email: string) => {
    const response = await apiClient.post(
      "/api/HttpTrigger?code=I-KGotOJCYK_kWewNnbfgz-1eo9OwwiI0PMxe-9n4ULKAzFupg7lqg%3D%3D",
      JSON.stringify({
        Email: email,
      })
    );
    return response.data;
  },
};
