import response from './../response.js';
import OpenAI from "openai";

const ask = async (req, res) => {
    const { apiKey, question } = req.body;
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { 
                    role: "assistant", 
                    content: process.env.ASSISTANT_PERSONA
                },
                { 
                    role: "user", 
                    content: question
                }
            ],
            model: "gpt-4o-mini",
            store: false,
        });

        const resposta = completion.choices[0].message.content;

        response(res, 200, true, { resposta });
    } catch (error) {
        response(res, 500, false, error);        
    }
}

const askAssistant = async (req, res) => {
    const { apiKey, question, assistantId } = req.body;
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const thread = await openai.beta.threads.create();

        await openai.beta.threads.messages.create(
            thread.id,
            {
              role: "user",
              content: question
            }
        );

        const run = await openai.beta.threads.runs.createAndPoll(
            thread.id,
            { 
                assistant_id: assistantId 
            }
        );

        if(run.status === 'completed') {
            const messages = await openai.beta.threads.messages.list(run.thread_id);
            const resposta = messages.data[0].content[0].text.value;
            response(res, 200, true, { resposta });
        } else {
            response(res, 500, true, { erro: run.status });
        } 
    } catch (error) {
        response(res, 500, false, error);        
    }
}

export {
    ask,
    askAssistant
}