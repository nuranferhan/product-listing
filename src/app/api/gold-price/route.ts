import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 saat cache

export async function GET() {
  try {
    // Ücretsiz alternatif: metals-api.com veya goldapi.io
    // Burada basit bir mock veri kullanıyorum, gerçek API için aşağıdaki seçeneklerden birini kullanın:
    
    // Seçenek 1: metals-api.com (ücretli ama ücretsiz tier var)
    // const response = await fetch('https://metals-api.com/api/latest?access_key=YOUR_KEY&base=USD&symbols=XAU');
    
    // Seçenek 2: goldapi.io (ücretsiz tier var)
    // const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
    //   headers: { 'x-access-token': process.env.GOLD_API_KEY || '' }
    // });

    // Geçici çözüm: Coinbase API (kripto gold - PAXG)
    const response = await fetch('https://api.coinbase.com/v2/prices/PAXG-USD/spot', {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      // Fallback: Ortalama altın fiyatı (gram başına)
      return NextResponse.json({ 
        pricePerGram: 68.50, // ~$68.50 per gram (örnek değer)
        source: 'fallback',
        timestamp: new Date().toISOString()
      });
    }

    const data = await response.json();
    
    // PAXG 1 troy ounce = 31.1035 gram
    const pricePerOunce = parseFloat(data.data.amount);
    const pricePerGram = pricePerOunce / 31.1035;

    return NextResponse.json({
      pricePerGram: parseFloat(pricePerGram.toFixed(2)),
      source: 'coinbase-paxg',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Gold price fetch error:', error);
    
    // Fallback price
    return NextResponse.json({
      pricePerGram: 68.50,
      source: 'fallback',
      timestamp: new Date().toISOString()
    });
  }
}