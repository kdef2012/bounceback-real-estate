import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log('Received Valuation Request:', data);
    
    // Simulate network delay and "AI processing"
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock valuation logic based on square footage or random if not provided
    const baseValue = data.sqft ? parseInt(data.sqft) * 450 : 850000;
    const randomFluctuation = Math.floor(Math.random() * 50000) - 25000;
    const estimatedValue = baseValue + randomFluctuation;

    return NextResponse.json({ 
      success: true, 
      estimatedValue: estimatedValue,
      rangeLow: estimatedValue - 45000,
      rangeHigh: estimatedValue + 65000
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process request.' }, { status: 500 });
  }
}
