import { Groq } from 'groq-sdk';

const apiKey = import.meta.env.VITE_cle_groq;

export default async function IAGROQ({ rawUserInput, setReponsechat }) {
    const groq = new Groq({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
    });

    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Tu es un génie comique, expert en humour absurde et non-sens. Tu intègres dans chaque réponse une référence  à Toulouse, Format court, une phrase.`
            },
            {
                role: "user",
                content: rawUserInput
            }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.8,
        max_tokens: 512,
        top_p: 0.95,
        stream: true
    });

    let fullResponse = '';
    fullResponse += "User: ";
    fullResponse += rawUserInput + '\n' + '\n';

    for await (const chunk of chatCompletion) {
        const content = chunk.choices[0]?.delta?.content || ''
        fullResponse += content;
        setReponsechat(fullResponse);
    }
}