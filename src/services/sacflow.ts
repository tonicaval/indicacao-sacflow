/**
 * A class to interact with the Sacflow API, specifically for sending WhatsApp messages.
 *
 * The class provides methods to send WhatsApp messages via the Sacflow API.
 * It uses Axios for making HTTP requests.
 *
 * @example
 * const sacflowInstance = new sacflow({
 *   accountId: 12345,
 *   whatsappId: 67890,
 *   token: 'YOUR_SACFLOW_API_TOKEN'
 * });
 * sacflowInstance.sendWhatsAppMessage({
 *   contact: '+1234567890',
 *   message: 'Hello from Sacflow!'
 * });
 */

import axios from "axios";


interface ISendWhatsAppMessageClass {
  message: string;
  contact: {
    name: string;
    phone: string;
  };
  from?: string;
  isPrivate?: boolean;
  queueId?: number;
  status?: string;
  tagId?: number;
  messageTimeout?: number;
}

interface construtorSacflow {
  accountId: number;
  whatsappId: number;
  token: string;
}

export class sacflow {
  static apiSacflow = axios.create({
    baseURL: "https://api.sacflow.io",
  });

  accountId: number;
  whatsappId: number;
  token: string;

  constructor({ accountId, whatsappId, token }: construtorSacflow) {
    this.accountId = accountId;
    this.whatsappId = whatsappId;
    this.token = token;
  }

  async sendWhatsAppMessage({
    contact,
    message,
    from = "Microservices",
    isPrivate = false,
    queueId,
    status = "pending",
    tagId,
    messageTimeout,
  }: ISendWhatsAppMessageClass): Promise<any> {
    try {
      let payload: any = {
        accountId: this.accountId,
        whatsappId: this.whatsappId,
        contact,
        message,
        from,
        type: "text",
        isPrivate,
        queueId,
        status,
        tagId,
        messageTimeout,
      };

      const response = await sacflow.apiSacflow.post(
        `/api/send-text`,
        payload,
        {
          headers: {
            authorization: `Bearer ${this.token}`,
          },
        }
      );

      console.log("response: ", response.data);

      return response;
    } catch (err: any) {
      console.log(
        "------------------- erro ao enviar mensagem de whatsapp: ",
        err
      );
    }
  }
}