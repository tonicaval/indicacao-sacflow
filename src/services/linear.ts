import { LinearClient, LinearFetch, User } from '@linear/sdk';
import { ENV } from '../../config';

const linearClient = new LinearClient({
  apiKey: ENV.LINEAR_KEY
});

interface Iteams {
  description: string | undefined;
  title?: string;
}

export const createIssueCRM = async ({ description, title }: Iteams) => {
  try {
    await linearClient.createIssue({
      teamId: "08152509-779e-4e28-9bd1-0b4177e40670",
      title,
      description,
      assigneeId: "f3036ee0-6b95-4118-8375-e7d2251df90e"
    });
  } catch (error) {
    console.log('[LINEAR ERROR, bitch]:', error);
  }
};
