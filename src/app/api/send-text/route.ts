import { createIssueCRM } from '@/services/linear';
import { sacflow } from '@/services/sacflow';

export async function POST(request: Request) {
  const res = await request.json();

  const sacflowInstance = new sacflow({
    accountId: 1,
    whatsappId: 1,
    token: 'ad8d672c-b196-4f2e-bf24-aaa8523ef258'
  });

  const privateMessage = `*Nova indicação para o Sacflow:*

*Nome:* 
${res.name}

*E-mail:*
${res.email}

*Nome do indicado:*
${res.referName}

*E-mail do indicado:*
${res.referEmail}

*WhatsApp do indicado:*
${res.referWhatsapp}

*Detalhes:*
${res.referInfo}

*Como conheceu:*
${res.howYouKnow}`;

  const privateMessageLinear = `

**Nome:** ${res.name}

**E-mail:** ${res.email}

**Nome do indicado:** ${res.referName}

**E-mail do indicado:** ${res.referEmail}

**WhatsApp do indicado:** ${res.referWhatsapp}

**Detalhes:** ${res.referInfo}

**Como conheceu:** ${res.howYouKnow}`;

  const sendMessageSacflowPrivate = sacflowInstance.sendWhatsAppMessage({
    contact: {
      name: res.name,
      phone: `55${res.whatsapp}`
    },
    message: privateMessage,
    isPrivate: true
  });

  const sendMessageSacflowClient = sacflowInstance.sendWhatsAppMessage({
    contact: {
      name: res.name,
      phone: `55${res.whatsapp}`
    },
    message: `Oi, ${res.name}! Obrigado pela indicação ao Sacflow. 🎉
   
Nossa equipe entrará em contato com o indicado. Se ele contratar o Sacflow, entraremos em contato com você para pagar a recompensa.`
  });

  const sendLinear = createIssueCRM({
    title: `Indicação do Sacflow ${res.name}`,
    description: privateMessageLinear
  });

  await Promise.allSettled([sendMessageSacflowClient, sendLinear, sendMessageSacflowPrivate]);
  return Response.json(res);
}
