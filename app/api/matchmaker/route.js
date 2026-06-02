import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { selections } = data; // e.g. { event: "Growing Family", timeframe: "1-3 Months", priority: "Top Schools" }

    const prompt = `
      You are an expert, luxury real estate AI Matchmaker for "Bounceback Real Estate Group". 
      A client has completed the "Life Event" survey with the following parameters:
      Life Event: ${selections.event}
      Timeline: ${selections.timeframe}
      Top Priority: ${selections.priority}

      Based on these parameters, provide a highly personalized, curated recommendation.
      Return the response STRICTLY as a JSON object with the following structure:
      {
        "headline": "A catchy, personalized headline for their situation",
        "analysis": "A 2-3 sentence explanation of why this strategy works for their life event and timeline",
        "recommended_property_type": "e.g., Luxury 4-Bed Home, High-rise Condo, etc.",
        "recommended_neighborhood_vibe": "e.g., Suburban with top schools, Walkable downtown, etc."
      }
      Do not include markdown blocks or any other text outside the JSON.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // using gpt-4o for fast, accurate json output
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const aiResponse = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json({ success: true, match: aiResponse });
  } catch (error) {
    console.error('Matchmaker API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate matches' }, { status: 500 });
  }
}
