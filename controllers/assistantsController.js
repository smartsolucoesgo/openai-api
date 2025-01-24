import response from './../response.js';
import OpenAI from "openai";


const edit = async (req, res) => {
    const { apiKey, assistantId, model, name, instructions, temperature, response_format } = req.body;
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const myUpdatedAssistant = await openai.beta.assistants.update(
            assistantId,
            {
                instructions: instructions,
                name: name,
                model: model,
                temperature: temperature,
                response_format: response_format
            }
        );

        response(res, 200, true, myUpdatedAssistant);
    } catch (error) {
        response(res, 500, false, error);        
    }
}

const create = async (req, res) => {
    const { apiKey, model, name, instructions, temperature, response_format } = req.body;
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const myAssistant = await openai.beta.assistants.create({
            instructions: instructions,
            name: name,
            tools: [
                { type: "code_interpreter" }
            ],
            model: model,
            temperature: temperature,
            response_format: { "type": response_format }
        });

        response(res, 200, true, myAssistant);
    } catch (error) {
        response(res, 500, false, error);        
    }
}

const deleteAssistant = async (req, res) => {
    const { apiKey, assistantId } = req.body;
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const myDeletedAssistant = await openai.beta.assistants.del(assistantId);

        response(res, 200, true, myDeletedAssistant);
    } catch (error) {
        response(res, 500, false, error);        
    }
}

export {
    create,
    edit,
    deleteAssistant
}